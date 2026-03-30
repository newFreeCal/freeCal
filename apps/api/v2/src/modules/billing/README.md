# Billing Module - unEE Version

## Status

Billing features are stubbed for the open-source version. No Stripe configuration is required.

## Overview

This module contains stub implementations for billing features in the unEE (no Enterprise Edition) version of freeCal. All billing endpoints return stub data without making any actual Stripe API calls.

## Available Endpoints

All endpoints return stub data:

- **GET** `/v2/billing/:teamId/check` - Returns `no_billing` status
- **POST** `/v2/billing/:teamId/subscribe` - Returns empty URL
- **POST** `/v2/billing/:teamId/upgrade` - Returns empty URL
- **DELETE** `/v2/billing/:teamId/unsubscribe` - No-op (returns success)
- **POST** `/v2/billing/webhook` - Returns success (ignores Stripe events)

## Implementation Details

### Services

- **BillingServiceStub** - Implements all billing methods but returns minimal valid data without Stripe API calls
- **BillingRepository** - Database operations for billing data (works without Stripe)
- **BillingConfigService** - Configuration for billing plans (stubbed)

### Guards

- **RequireStripeConfig** - Guard that throws an error if Stripe is configured, preventing access to billing endpoints when Stripe is not set up

### Webhook Handling

The webhook endpoint accepts requests but ignores them, logging a warning that Stripe is not configured. This prevents errors from Stripe webhook events.

## Environment Variables

### Required for Stubbing

- `STRIPE_WEBHOOK_SECRET` - Can be empty for unEE
- `STRIPE_PRICE_*` - Can be empty for unEE

### Environment Variables to Remove

- `CALCOM_LICENSE_KEY` - No longer required
- `STRIPE_*` - Can be empty for unEE

## Billing Data Structure

### BillingData

```typescript
{
  team: Team & { platformBilling: PlatformBilling | null } | null;
  status: "valid" | "no_subscription" | "no_billing";
  plan: PlatformPlan | "none";
}
```

### PlatformPlan

```typescript
| "NONE"
| "PER_BOOKING"
| "PER_ACTIVE_USER"
```

## Testing

To test the billing module without Stripe:

1. Set all Stripe environment variables to empty strings
2. Run the application
3. The billing endpoints should return stub data
4. No Stripe API calls should occur

## Migration Guide

For self-hosted instances:

1. Remove or comment out all Stripe environment variables
2. Ensure `STRIPE_WEBHOOK_SECRET` is not set
3. The billing module will automatically use stub implementations
4. No code changes are required

## Notes

- The billing service in `apps/api/v2/src/modules/billing/services/billing.service.ts` has been replaced with `billing.service.stub.ts`
- All billing endpoints include the `RequireStripeConfig` guard
- Webhook handlers are stubbed and return success without processing events
- The application runs in self-hosted mode without license keys