# unEE Migration Guide

## Overview

This guide documents the complete migration from Cal.com's commercial/enterprise version to freeCal - the fully open-source version without licensing restrictions.

## What Changed

### Architecture

**Before (Cal.com):**
```
packages/features/
├── ee/                    # Commercial features (REMOVED)
│   ├── billing/
│   ├── workflows/
│   ├── organizations/
│   ├── teams/
│   ├── api-keys/
│   ├── round-robin/
│   ├── payments/
│   ├── sso/
│   ├── dsync/
│   └── ...
├── workflows/             # Open-source features
├── organizations/
└── ...
```

**After (freeCal):**
```
packages/features/
├── workflows/
│   └── lib/stubs/         # Stub implementations
├── organizations/
│   └── lib/stubs/         # Stub implementations
├── billing/
│   └── lib/stubs/         # Stub implementations
└── ...
```

### Key Principles

1. **No EE directories** - All `/ee/` directories completely removed
2. **Stub implementations** - Commercial features replaced with no-op stubs
3. **Same API surface** - Stubs maintain identical function signatures
4. **No-op by default** - Stubs return null, false, empty arrays, etc.

## Removed Features

| Feature | Commercial Functionality | Open-Source Replacement |
|---------|-------------------------|------------------------|
| **Billing** | Stripe payments, credits, subscriptions | Stub returns success: true |
| **SSO** | SAML, OAuth, enterprise auth | Stub returns null/not configured |
| **DSYNC** | SCIM, Azure AD, Okta sync | Stub functions do nothing |
| **AI Workflows** | AI phone calls, voice automation | Stub returns empty responses |
| **Advanced Reminders** | WhatsApp, SMS automation | Stub functions are no-op |
| **Org Management** | Multi-team orgs, domains | Simplified single-team model |
| **API Keys** | Advanced key management, auto-lock | Basic key generation only |
| **Round Robin** | Advanced reassignment logic | Basic distribution only |
| **Managed Events** | Locked fields, templates | No restrictions |
| **Payments** | Payment collection for events | Stub returns no payment required |

## Migration Steps

### 1. Code Migration

All import paths have been automatically migrated:

**Before:**
```typescript
import { getOrgFullOrigin } from "@calcom/ee/organizations/lib/orgDomains";
import { roundRobinReassignment } from "@calcom/features/ee/round-robin/roundRobinReassignment";
import LicenseRequired from "~/ee/common/components/LicenseRequired";
```

**After:**
```typescript
import { getOrgFullOrigin } from "@calcom/features/organizations/lib/stubs/orgDomains";
import { roundRobinReassignment } from "@calcom/features/round-robin/lib/stubs/roundRobinReassignment";
import LicenseRequired from "~/common/components/LicenseRequired";
```

### 2. Database Schema

No database migrations required. The schema remains compatible.

### 3. Environment Variables

The following commercial-related environment variables are now ignored (safe to remove):

```bash
# No longer needed (can be removed from .env)
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
SAML_DATABASE_URL=
OKTA_API_KEY=
AZURE_AD_CLIENT_ID=
```

### 4. Feature Behavior Changes

#### Billing & Payments
- **Before:** Required Stripe account, credit system
- **After:** All features free, no payment processing

#### SSO
- **Before:** Enterprise SSO via SAML/OAuth
- **After:** Standard email/password and NextAuth providers only

#### Organizations
- **Before:** Multi-team organizations with domain verification
- **After:** Simplified team structure, no domain restrictions

#### Workflows
- **Before:** AI phone calls, WhatsApp, SMS reminders
- **After:** Email reminders only (if configured)

#### API Keys
- **Before:** Advanced key management with auto-lock, rate limiting
- **After:** Basic key generation and validation

## Testing

### Verify No EE Imports

```bash
# Check for remaining EE imports (should only find test files)
grep -r "@calcom/ee\|@calcom/features/ee" packages/ apps/ \
  --include="*.ts" --include="*.tsx" | \
  grep -v node_modules | \
  grep -v ".test.ts" | \
  grep -v ".spec.ts" | \
  wc -l

# Expected: 0 (zero non-test files with EE imports)
```

### Run Build

```bash
# Build should complete without EE-related errors
yarn build

# Type check (may have pre-existing unrelated errors)
yarn type-check:ci --force
```

### Run Seed

```bash
# Database seed should work without EE dependencies
yarn workspace @calcom/prisma dx
```

### Run Tests

```bash
# Unit tests (test mocks may reference EE paths - this is intentional)
yarn test

# E2E tests
yarn test-e2e
```

## Known Limitations

### What You Lose

1. **No payment processing** - Cannot charge for events
2. **No enterprise SSO** - No SAML/Okta/Azure AD integration
3. **No directory sync** - No SCIM user provisioning
4. **No AI features** - No AI phone calls or voice automation
5. **No advanced reminders** - No WhatsApp/SMS automation
6. **No org management** - No multi-team organization structure
7. **No license validation** - No premium feature gates

### What You Keep

1. **Core scheduling** - All basic booking functionality
2. **Event types** - Unlimited event types
3. **Calendars** - Google, Outlook, Apple Calendar sync
4. **Video conferencing** - Zoom, Google Meet, Daily.co, etc.
5. **Workflows** - Email-based workflows and reminders
6. **Teams** - Basic team collaboration
7. **Embeds** - Embeddable booking forms
8. **API** - Full tRPC and REST API access
9. **App Store** - 100+ third-party integrations

## Troubleshooting

### Module Not Found Errors

If you see errors like:
```
Cannot find module '@calcom/ee/...'
```

**Solution:** Update the import path to use stub location:
```typescript
// Wrong
import { X } from "@calcom/ee/feature/...";

// Correct
import { X } from "@calcom/features/feature/lib/stubs/...";
```

### Build Errors

If build fails with EE-related errors:

```bash
# Find files with EE imports
grep -r "@calcom/ee/" packages/ apps/ --include="*.ts" --include="*.tsx"

# Manually update imports or run fix script
npx tsx scripts/fix-ee-imports.ts
```

### Seed Command Fails

If seed command fails with EE import errors:

```bash
# Check seed.ts for EE imports
grep "@calcom/ee/" scripts/seed.ts

# Update to stub imports
# @calcom/ee/api-keys/lib/apiKeys 
#   → @calcom/features/api-keys/lib/stubs/apiKeys
# @calcom/ee/organizations/lib/orgDomains 
#   → @calcom/features/organizations/lib/stubs/orgDomains
```

## Verification Checklist

After migration, verify:

- [ ] No `/ee/` directories exist
- [ ] No non-test files import from `@calcom/ee/`
- [ ] All stubs exist in `lib/stubs/` directories
- [ ] Build completes without EE errors
- [ ] Seed command runs successfully
- [ ] Tests pass (test mocks may reference EE - this is OK)
- [ ] Type check passes (pre-existing errors unrelated to EE are OK)

## Commands Reference

```bash
# Verify no EE directories
find packages/ apps/ -type d -name "ee" 2>/dev/null

# Verify no EE imports in source files
grep -r "@calcom/ee\|@calcom/features/ee" packages/ apps/ \
  --include="*.ts" --include="*.tsx" | \
  grep -v node_modules | \
  grep -v ".test.ts" | \
  grep -v ".spec.ts"

# Run build
yarn build

# Run seed
yarn workspace @calcom/prisma dx

# Run tests
yarn test

# Type check
yarn type-check:ci --force

# Lint
yarn lint:fix

# Format
yarn biome check --write .
```

## Support

For issues or questions:

- **Documentation**: See `unEE.md` for detailed stub documentation
- **Development Guide**: See `AGENTS.md` for development conventions
- **Project Structure**: See `PROJECT_STRUCTURE.md` for codebase overview
- **Issues**: https://github.com/calcom/freeCal/issues

## License

This project is licensed under AGPLv3. See `LICENSE` for details.

---

**Note:** This migration is part of the unEE project - the systematic removal of all commercial/enterprise code to create a completely open-source scheduling platform.
