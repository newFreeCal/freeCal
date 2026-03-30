import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AppConfig } from "@/config/type";

@Injectable()
export class RequireStripeConfig implements CanActivate {
  constructor(private readonly configService: ConfigService<AppConfig>) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const stripeWebhookSecret = this.configService.get("stripe.webhookSecret", { infer: true }) ?? "";

    if (stripeWebhookSecret) {
      throw new ForbiddenException("Billing features require Stripe configuration");
    }

    return true;
  }
}
