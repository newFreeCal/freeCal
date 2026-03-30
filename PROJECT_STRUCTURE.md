# freeCal Project Structure

freeCal is an open-source scheduling platform (Calendly alternative) built as a Yarn/Turbo monorepo using Next.js, tRPC, Prisma, and TypeScript.

## Root Directory Overview

```
/mnt/hdd/Projects/freeCal/
├── apps/                    # Applications (Next.js apps, API servers)
├── packages/                # Shared packages (prisma, trpc, ui, features, etc.)
├── specs/                   # Feature specifications and templates
├── docs/                    # User and developer documentation
├── deploy/                  # Deployment scripts and configurations
├── scripts/                 # Database seeding and utility scripts
├── node_modules/            # Dependencies
├── .turbo/                  # Turbo build cache
├── .changeset/              # Changeset version management
├── .husky/                  # Git hooks
├── .yarn/                   # Yarn configuration and cache
├── AGENTS.md                # AI agent development guide
├── CLAUDE.md                # Symlink to AGENTS.md (for Claude CLI)
├── biome.json               # Biome linter/formatter configuration
├── turbo.json               # Turbo build system configuration
├── playwright.config.ts     # Playwright E2E test configuration
├── vitest.config.mts        # Vitest unit test configuration
├── docker-compose.yml       # Docker Compose for local development
├── Dockerfile               # Docker build for production
├── package.json             # Root package.json (workspace manifest)
├── yarn.lock                # Yarn dependency lock file
└── .env.example             # Environment variables template
```

---

## apps/ - Applications

### apps/web/
Main Next.js web application (the primary user-facing app).

```
apps/web/
├── app/                    # Next.js 13+ App Router pages
│   ├── api/               # API routes (auth, integrations, webhooks)
│   ├── (booking-page-wrapper)/  # Booking page layout wrapper
│   ├── (use-page-wrapper)/      # User-facing pages wrapper
│   ├── reschedule/        # Reschedule booking page
│   ├── routing-forms/     # Routing forms pages
│   ├── cache/            # Cached routes
│   ├── e2e/              # E2E test utilities
│   ├── icons/            # Icon assets
│   ├── _trpc/            # tRPC client configuration
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── providers.tsx     # React providers
├── pages/                 # Next.js Pages Router (legacy)
│   ├── api/              # API routes
│   └── router/           # Client-side routing
├── components/            # Web-specific React components
├── lib/                   # Web-specific utilities
├── modules/               # Feature modules (V2 architecture)
├── public/                # Static assets
│   ├── static/locales/   # i18n translation files
│   └── images/           # Static images
├── styles/                # Global CSS styles
├── test/                  # Test utilities
├── server/                # Server-only code
├── scripts/               # Build and deployment scripts
├── playwright/            # Playwright test configurations
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Web app dependencies
```

### apps/api/
API server applications.

```
apps/api/
├── v1/                    # Legacy REST API (deprecated)
│   ├── pages/             # API endpoints
│   ├── lib/               # Shared utilities
│   ├── scripts/           # Build scripts
│   └── next.config.js     # Next.js config
└── v2/                    # Modern NestJS API (Platform API)
    ├── src/               # Source code
    │   ├── ee/           # Enterprise endpoints
    │   └── ...           # Other modules
    ├── scripts/          # Build scripts
    ├── test/             # Tests
    ├── nest-cli.json     # NestJS CLI config
    └── package.json      # NestJS dependencies
```

---

## packages/ - Shared Packages

### packages/prisma/
Database schema and migrations (core of the data layer).

```
packages/prisma/
├── schema.prisma          # Database schema definition
├── migrations/            # Database migrations
├── seed.ts               # Database seeding script
├── client/               # Prisma client (generated)
├── generated/            # Generated types
├── extensions/           # Prisma query extensions
├── selects/              # Predefined select queries
├── zod/                  # Zod schemas from Prisma
├── enum-generator.ts     # TypeScript enum generator
├── package.json
└── README.md
```

### packages/trpc/
Type-safe API layer using tRPC.

```
packages/trpc/
├── server/               # Server-side tRPC
│   ├── routers/         # API route handlers
│   ├── trpc.ts         # tRPC initialization
│   └── middlewares/    # Request middlewares
├── react/               # React hooks for tRPC client
├── components/          # tRPC React components
├── types/               # TypeScript types
├── index.ts             # Main exports
└── package.json
```

### packages/ui/
Shared UI component library (shadcn/ui-based).

```
packages/ui/
├── components/          # React components
│   ├── button/          # Button component
│   ├── dialog/          # Dialog component
│   ├── form/           # Form components
│   ├── icon/           # Icon components
│   └── ...
├── styles/             # Global styles
├── scripts/            # Build scripts
├── package.json
└── tsconfig.json
```

### packages/features/
Feature-specific modules (72 feature directories).

```
packages/features/
├── bookings/            # Booking logic and components
│   ├── Booker/          # Booking UI component
│   └── ...
├── calendars/          # Calendar integrations
├── auth/               # Authentication logic
├── availability/       # Availability checking
├── eventtypes/         # Event type management
├── users/              # User management
├── organizations/      # Organization features
├── webhooks/           # Webhook handling
├── workflows/          # Automated workflows
├── video-call-guest/   # Video call integration
├── routing-forms/      # Routing forms
├── notifications/      # Notification system
├── insights/           # Analytics and insights
├── oauth/              # OAuth integrations
├── scheduling/         # Scheduling algorithms
├── profiles/           # User profiles
├── tasker/             # Task management
├── calAIPhone/         # AI phone integration
├── pbac/               # Permission-based access control
├── ee/                 # Enterprise features
│   ├── organizations/  # Organization management
│   ├── workflows/     # Premium workflows
│   └── ...
├── index.ts            # Main exports
└── package.json
```

### packages/lib/
Core shared utilities and services.

```
packages/lib/
├── apps/               # App-related utilities
├── auth/              # Authentication utilities
├── bookings/          # Booking utilities
├── CalendarService.ts # Calendar integration base
├── CalEventParser.ts  # Calendar event parsing
├── checkRateLimitAndThrowError.ts  # Rate limiting
├── server/            # Server-side utilities
├── components/        # Shared components
└── ...
```

### packages/app-store/
Third-party integrations (100+ apps).

```
packages/app-store/
├── googlecalendar/    # Google Calendar integration
├── zoomvideo/         # Zoom integration
├── stripepayment/     # Stripe payment
├── slack/             # Slack integration
├── salesforce/        # Salesforce CRM
├── zapier/            # Zapier automation
├── templates/         # App templates
│   ├── _calendar/    # Calendar app template
│   └── _auth-based-app/  # OAuth app template
├── _appRegistry.ts   # App registry
├── appStoreMetaData.ts  # App metadata
├── apps.server.generated.ts  # Generated server code
├── apps.browser.generated.ts # Generated browser code
├── apps.schemas.generated.ts # Generated schemas
└── package.json
```

### packages/platform/
Platform-specific code for freeCal Platform.

```
packages/platform/
├── atoms/             # Platform atoms (reusable UI)
├── constants/        # Platform constants
├── enums/            # Platform enums
├── types/            # Platform types
├── utils/            # Platform utilities
├── libraries/        # Re-exported libraries for API v2
├── examples/         # Example implementations
│   └── base/         # Base OAuth example
└── package.json
```

### packages/emails/
Email template and sending logic.

```
packages/emails/
├── templates/        # Email templates
├── lib/             # Email utilities
├── email-manager.ts # Email sending orchestration
├── auth-email-service.ts    # Auth emails
├── billing-email-service.ts # Billing emails
├── workflow-email-service.ts # Workflow emails
├── src/             # Source files
└── package.json
```

### packages/embeds/
Embeddable booking components.

```
packages/embeds/
├── embed-core/       # Core embed functionality
├── embed-react/      # React embed component
├── embed-snippet/    # Embed script snippet
├── inline-embed-lifecycle.mermaid
├── modal-embed-lifecycle.mermaid
├── README.md
└── package.json
```

### Other Packages

| Package | Purpose |
|---------|---------|
| `packages/config/` | Next.js and i18n configuration |
| `packages/types/` | Shared TypeScript type definitions |
| `packages/lib/` | Core utilities (see above) |
| `packages/dayjs/` | Day.js date utilities with plugins |
| `packages/debugging/` | Debug utilities and components |
| `packages/emails/` | Email templates and services |
| `packages/sms/` | SMS notification handling |
| `packages/testing/` | Testing utilities and mocks |
| `packages/kysely/` | Kysely query builder types |
| `packages/coss-ui/` | Legacy UI components (migration in progress) |
| `packages/app-store-cli/` | CLI for managing app-store |
| `packages/ee/` | Enterprise edition extensions |

---

## Root Configuration Files

| File | Purpose |
|------|---------|
| `AGENTS.md` | AI agent development guide and rules |
| `CLAUDE.md` | Symlink to AGENTS.md |
| `biome.json` | Biome linter and formatter config |
| `turbo.json` | Turbo monorepo build config |
| `playwright.config.ts` | E2E test configuration |
| `vitest.config.mts` | Unit test configuration |
| `vitest.workspace.ts` | Vitest workspace config |
| `docker-compose.yml` | Local development stack (Postgres, etc.) |
| `Dockerfile` | Production Docker image |
| `package.json` | Root workspace manifest |
| `.env.example` | Environment variable template |
| `i18n.json` | Internationalization config |
| `i18n.lock` | i18n lock file |
| `app.json` | Vercel app configuration |

---

## docs/ - Documentation

```
docs/
├── introduction.mdx       # Getting started guide
├── self-hosting/         # Self-hosting guides
├── platform/             # Platform/API documentation
├── api-reference/        # API reference docs
├── developing/           # Development guides
├── images/               # Documentation images
├── snippets/            # Code snippets
└── README.md
```

---

## specs/ - Feature Specifications

```
specs/
├── README.md             # Spec workflow documentation
└── _templates/           # Specification templates
    ├── prompts.md
    ├── design.md
    ├── implementation.md
    ├── docs/
    └── decisions.md
```

---

## scripts/ - Database and Utility Scripts

| Script | Purpose |
|--------|---------|
| `seed.ts` | Main database seeding (test users, event types) |
| `seed-app-store.ts` | Seed app-store apps |
| `seed-insights.ts` | Seed analytics data |
| `seed-performance-testing.ts` | Generate test data |
| `seed-pbac-*.ts` | Seed permission data |
| `wait-for-it.sh` | Wait for service availability |
| `vercel.sh` | Vercel deployment script |
| `staging-deploy.sh` | Staging deployment |

---

## deploy/ - Deployment Configurations

```
deploy/
├── codespaces/          # GitHub Codespaces config
├── install.sh           # Installation script
└── README.md
```

---

## .changeset/ - Version Management

Changeset configuration for version management and changelog generation.

---

## Key Architectural Patterns

1. **App Router**: `apps/web/app/` uses Next.js 13+ App Router
2. **Pages Router**: `apps/web/pages/` uses legacy Pages Router
3. **tRPC**: Type-safe APIs via `packages/trpc/`
4. **Prisma**: Database ORM via `packages/prisma/`
5. **Feature Modules**: `packages/features/` contains domain-specific logic
6. **Platform API**: `apps/api/v2/` uses NestJS for REST API

---

## Tech Stack

- **Framework**: Next.js 13+ (App Router + Pages Router)
- **Language**: TypeScript (strict mode)
- **Database**: PostgreSQL with Prisma ORM
- **API**: tRPC (web), NestJS (API v2)
- **Auth**: NextAuth.js
- **Styling**: Tailwind CSS + shadcn/ui
- **Testing**: Vitest (unit), Playwright (E2E)
- **i18n**: next-i18next
- **Build**: Turbo (monorepo), Yarn (package manager)
- **Linting**: Biome
