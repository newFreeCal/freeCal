import type { PlatformBilling, Team } from "@calcom/prisma/client";
import { InjectQueue } from "@nestjs/bull";
import { BadRequestException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Queue } from "bull";
import { DateTime } from "luxon";
import { AppConfig } from "@/config/type";
import { PlatformBillingTasker } from "@/lib/services/tasker/platform-billing-tasker.service";
import { BILLING_QUEUE, INCREMENT_JOB, IncrementJobDataType } from "@/modules/billing/billing.processor";
import { BillingRepository } from "@/modules/billing/billing.repository";
import { BillingData, IBillingService } from "@/modules/billing/interfaces/billing-service.interface";
import { BillingConfigService } from "@/modules/billing/services/billing.config.service";
import { PlatformPlan } from "@/modules/billing/types";
import { OrganizationsRepository } from "@/modules/organizations/index/organizations.repository";
import { StripeService } from "@/modules/stripe/stripe.service";
import { UsersRepository } from "@/modules/users/users.repository";

@Injectable()
export class BillingServiceStub implements IBillingService {
  private logger = new Logger("BillingServiceStub");
  private readonly webAppUrl: string;

  constructor(
    private readonly teamsRepository: OrganizationsRepository,
    public readonly stripeService: StripeService,
    public readonly billingRepository: BillingRepository,
    private readonly configService: ConfigService<AppConfig>,
    private readonly billingConfigService: BillingConfigService,
    private readonly usersRepository: UsersRepository,
    private readonly platformBillingTasker: PlatformBillingTasker,
    @InjectQueue(BILLING_QUEUE) private readonly billingQueue: Queue
  ) {
    this.webAppUrl = this.configService.get("app.baseUrl", { infer: true }) ?? "https://app.freeCal";
  }

  async getBillingData(teamId: number): Promise<BillingData> {
    return { team: null, status: "no_billing" as const, plan: "none" };
  }

  async createTeamBilling(teamId: number): Promise<string> {
    return "";
  }

  async redirectToSubscribeCheckout(
    teamId: number,
    plan: PlatformPlan,
    customerId?: string
  ): Promise<string> {
    return "";
  }

  async updateSubscriptionForTeam(teamId: number, plan: PlatformPlan): Promise<string> {
    return "";
  }

  async setPerBookingSubscriptionForTeam(
    teamId: number,
    subscriptionId: string,
    plan: PlatformPlan
  ): Promise<ReturnType<typeof BillingRepository.prototype.updateTeamBilling>> {
    const billingCycleStart = DateTime.now().get("day");
    const billingCycleEnd = DateTime.now().plus({ month: 1 }).get("day");

    return this.billingRepository.updateTeamBilling(
      teamId,
      billingCycleStart,
      billingCycleEnd,
      plan,
      subscriptionId
    );
  }

  async setPerActiveUserSubscriptionForTeam(
    teamId: number,
    subscriptionId: string,
    plan: PlatformPlan,
    priceId: string
  ): Promise<ReturnType<typeof BillingRepository.prototype.updateTeamBilling>> {
    const billingCycleStart = DateTime.now().get("day");
    const billingCycleEnd = DateTime.now().plus({ month: 1 }).get("day");

    return this.billingRepository.updateTeamBilling(
      teamId,
      billingCycleStart,
      billingCycleEnd,
      plan,
      subscriptionId,
      priceId
    );
  }

  async handleStripeSubscriptionDeleted(event: any): Promise<void> {
    this.logger.log("Stripe Subscription deleted", { eventId: event.id });
    return;
  }

  getSubscriptionIdFromInvoice(invoice: any): string | null {
    return null;
  }
  getCustomerIdFromInvoice(invoice: any): string | null {
    return null;
  }

  async handleStripePaymentSuccess(event: any): Promise<void> {
    this.logger.log("Stripe Payment success", { eventId: event.id });
    return;
  }

  async handleStripePaymentFailed(event: any): Promise<void> {
    this.logger.log("Stripe Payment failed", { eventId: event.id });
    return;
  }

  async handleStripePaymentPastDue(event: any): Promise<void> {
    this.logger.log("Stripe Payment past due", { eventId: event.id });
    return;
  }

  async handleStripeCheckoutEvents(event: any): Promise<void> {
    this.logger.log("Stripe Checkout event", { eventId: event.id });
    return;
  }

  async handleStripeSubscriptionForActiveManagedUsers(event: any): Promise<void> {
    this.logger.log("Stripe Subscription for active managed users", { eventId: event.id });
    return;
  }

  async getActiveManagedUsersCount(
    subscriptionId: string,
    invoiceStart: Date,
    invoiceEnd: Date
  ): Promise<number> {
    return 0;
  }

  async updateStripeSubscriptionForTeam(teamId: number, plan: PlatformPlan): Promise<void> {
    this.logger.log("Update Stripe subscription for team", { teamId, plan });
    return;
  }
  /**
   *
   * Adds a job to the queue to increment usage of a stripe subscription.
   * we delay the job until the booking starts.
   * the delay ensure we can adapt to cancel / reschedule.
   */
  async increaseUsageByUserId(
    userId: number,
    booking: {
      uid: string;
      startTime: Date;
      fromReschedule?: string | null;
    }
  ): Promise<boolean | undefined> {
    if (this.configService.get("e2e")) {
      return true;
    }
    const { uid, startTime, fromReschedule } = booking;

    if (this.configService.get("enableAsyncTasker")) {
      if (fromReschedule) {
        this.platformBillingTasker.perform();
        return true;
      }
      this.platformBillingTasker.perform();
      return true;
    }

    let delay = startTime.getTime() - Date.now();

    if (delay < 0) {
      delay = 0;
    }

    if (fromReschedule) {
      await this.cancelUsageByBookingUid(fromReschedule);
      this.logger.log(`Cancelled usage increment job for rescheduled booking uid: ${fromReschedule}`);
    }
    await this.billingQueue.add(
      INCREMENT_JOB,
      {
        userId,
      } satisfies IncrementJobDataType,
      { delay: delay, jobId: `increment-${uid}`, removeOnComplete: true }
    );
    this.logger.log(`Added stripe usage increment job for booking ${uid} and user ${userId}`);
    return true;
  }

  /**
   *
   * Cancels the usage increment job for a booking when it is cancelled.
   * Removing an attendee from a booking does not cancel the usage increment job.
   */
  async cancelUsageByBookingUid(bookingUid: string): Promise<boolean | undefined> {
    if (this.configService.get("e2e")) {
      return true;
    }

    if (this.configService.get("enableAsyncTasker")) {
      this.platformBillingTasker.perform();
      return true;
    }

    const job = await this.billingQueue.getJob(`increment-${bookingUid}`);
    if (job) {
      await job.remove();
      this.logger.log(`Removed increment job for cancelled booking ${bookingUid}`);
    }
    return true;
  }

  async cancelTeamSubscription(teamId: number): Promise<void> {
    this.logger.log("Cancel team subscription", { teamId });
    return;
  }

  async onModuleDestroy(): Promise<void> {
    try {
      await this.billingQueue.close();
    } catch (err) {
      this.logger.error(err);
    }
  }
}
