# freeCal Project Context

## Project Overview

**freeCal** is an open-source scheduling platform (Calendly alternative) built as a Yarn/Turbo monorepo. It's a fork of the original Cal.com project with all commercial and enterprise components removed to create a completely open-source version under the AGPLv3 license.

### Key Characteristics

- **Open Source**: No commercial/enterprise restrictions - all core features are free
- **Monorepo Architecture**: Uses Yarn workspaces with Turbo for build optimization
- **Type-Safe Stack**: TypeScript throughout with strict typing
- **Self-Hosted**: Designed for both hosted and self-hosted deployments

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 13+ (App Router + Pages Router) |
| Language | TypeScript (strict mode) |
| Database | PostgreSQL with Prisma ORM |
| API | tRPC (type-safe RPC), NestJS (API v2 REST) |
| Auth | NextAuth.js |
| Styling | Tailwind CSS + shadcn/ui |
| Testing | Vitest (unit), Playwright (E2E) |
| i18n | next-i18next |
| Build | Turbo (monorepo), Yarn 4.12+ |
| Linting | Biome |

### Project Structure

```
apps/
├── web/                    # Main Next.js application
├── api/
│   ├── v1/                 # Legacy REST API (deprecated)
│   └── v2/                 # Modern NestJS Platform API
└── ...                     # Other apps (website, console, etc.)

packages/
├── prisma/                 # Database schema and migrations
├── trpc/                   # tRPC API layer
├── ui/                     # Shared UI components (shadcn-based)
├── features/               # 72+ feature modules (bookings, calendars, etc.)
├── lib/                    # Shared utilities and services
├── app-store/              # 100+ third-party integrations
├── platform/               # Platform-specific code (atoms, enums, types)
├── emails/                 # Email templates and services
├── embeds/                 # Embeddable booking components
└── ...                     # Other packages (sms, testing, config, etc.)

specs/                      # Feature specifications and design docs
docs/                       # User and developer documentation
deploy/                     # Deployment scripts and configs
agents/                     # AI agent development guide and rules
```

## Building and Running

### Prerequisites

- Node.js >= 18.x
- PostgreSQL >= 13.x
- Yarn >= 4.12.0

### Quick Start (Docker)

```bash
# Clone and setup
git clone https://github.com/calcom/freeCal.git
cd freeCal

# Create environment file
cp .env.example .env
# Generate required secrets
echo "NEXTAUTH_SECRET=$(openssl rand -base64 32)" >> .env
echo "CALENDSO_ENCRYPTION_KEY=$(openssl rand -base64 24)" >> .env

# Start with Docker Compose (includes Postgres)
docker compose up -d
```

### Development (Local)

```bash
# Install dependencies
yarn

# Setup database
yarn workspace @calcom/prisma db-migrate

# Start development server
yarn dev
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
DATABASE_URL=postgresql://user:pass@localhost:5432/freeCal
NEXTAUTH_SECRET=<generated-secret>
CALENDSO_ENCRYPTION_KEY=<generated-encryption-key>
NEXTAUTH_URL=http://localhost:3000
```

For app-store integrations, also copy `.env.appStore.example` to `.env.appStore`.

### Testing

```bash
# Unit tests
yarn test

# Type check
yarn type-check:ci --force

# E2E tests
yarn test-e2e

# Lint and format
yarn lint:fix
yarn biome check --write .
```

### Key Commands

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build production bundle |
| `yarn dx` | Development environment with database |
| `yarn db-studio` | Open Prisma Studio |
| `yarn test` | Run unit tests |
| `yarn test-e2e` | Run E2E tests |
| `yarn type-check:ci --force` | Full type check (run before pushing) |
| `yarn lint:fix` | Run linter and auto-fix |
| `yarn biome check --write .` | Format code with Biome |

## Development Conventions

### Code Style

1. **Type Safety**
   - Use `import type` for TypeScript type imports
   - Never use `as any` - use proper type-safe solutions
   - Always use `select` instead of `include` in Prisma queries

2. **Error Handling**
   - Use `ErrorWithCode` for non-tRPC errors (services, repositories, utilities)
   - Use `TRPCError` only in tRPC routers
   - Provide descriptive errors with context

3. **Imports**
   - Import directly from source files, not barrel files
   - Example: `@calcom/ui/components/button` not `@calcom/ui`
   - Avoid circular dependencies (package-specific restrictions apply)

4. **Code Organization**
   - Business logic belongs in Services, not Repositories
   - Use early returns to reduce nesting
   - Use `date-fns` or native `Date` instead of Day.js when timezone awareness isn't needed

5. **PR Guidelines**
   - Keep PRs small: <500 lines, <10 files (code only)
   - Use conventional commits: `feat:`, `fix:`, `refactor:`
   - Create PRs in draft mode by default
   - Add translation strings to `apps/web/public/static/locales/en/common.json`

### Architecture Patterns

**App Router**: New pages use Next.js 13+ App Router at `apps/web/app/`

**Pages Router**: Legacy pages at `apps/web/pages/` (migration in progress)

**tRPC**: Type-safe APIs via `packages/trpc/server/routers/`

**Feature Modules**: Domain-specific logic in `packages/features/[feature]/`

**Platform API**: Modern REST API via `apps/api/v2/` (NestJS)

**Embed Components**: Reusable booking embeds in `packages/embeds/`

**App Store**: 100+ third-party integrations in `packages/app-store/`

### API v2 Import Restrictions

When importing into `apps/api/v2`:

```typescript
# DO import from platform packages
import { ProfileRepository } from "@calcom/platform-libraries";

# DON'T import directly from features or trpc
import { ProfileRepository } from "@calcom/features/profile/repositories/ProfileRepository"; // ❌
```

Re-export from `packages/platform/libraries/index.ts` when needed.

### Testing Strategy

- **Unit tests**: Vitest with coverage
- **E2E tests**: Playwright with HTML reports
- **Test coverage**: Run tests before pushing

### Database

- Schema: `packages/prisma/schema.prisma`
- Migrations: `packages/prisma/migrations/`
- Use Prisma migrations for schema changes
- Run `yarn prisma generate` after schema changes

## Special Considerations

### unEE Project (Open-Source Migration)

This repository is part of the "unEE" project - the systematic removal of commercial/enterprise code:

- **EE directories deleted**: `packages/features/ee/`, `apps/web/modules/ee/`, `apps/api/v2/src/ee/`
- **Stub implementations**: All commercial code replaced with no-op stubs
- **Import paths updated**: All `@calcom/ee/...` → feature-specific stub paths
- **No commercial code**: Zero commercial code remains in OSS version

**Documentation:**
- `unEE.md` - Technical documentation and stub reference
- `UNEE_MIGRATION_GUIDE.md` - Migration guide and feature comparison
- `README.md` - Project overview with unEE summary

**Key imports:**
```typescript
// Use stub paths instead of EE paths
import { X } from "@calcom/features/[feature]/lib/stubs/[module]";
```

See `unEE.md` for complete details.

### Spec-Driven Development

For complex features, use spec-driven development when explicitly requested:

**To enable**: Say "use spec-driven development" or "follow the spec workflow"

**Workflow**:
1. Check for design docs in `specs/{feature}/`
2. Read `design.md` → `implementation.md` → `decisions.md`
3. Implement in small pieces
4. Update `implementation.md` after each piece

See `SPEC-WORKFLOW.md` for full documentation.

### AI Agent Configuration

The `AGENTS.md` file (symlinked from `agents.md`) contains development rules for AI coding assistants:

- **Rules**: Modular engineering guidelines in `agents/rules/`
- **Commands**: Command reference in `agents/commands.md`
- **Knowledge Base**: Domain knowledge in `agents/knowledge-base.md`

Configuration is also available in `.claude/` and `.cursor/` as symlinks.

## Common Tasks

### Adding a New Feature

1. Create feature module in `packages/features/[feature]/`
2. Add database schema in `packages/prisma/schema.prisma`
3. Create migration: `yarn workspace @calcom/prisma db-migrate`
4. Add tRPC router endpoints in `packages/trpc/server/routers/`
5. Create UI components in `apps/web/app/` or `packages/features/[feature]/`
6. Add translations to `apps/web/public/static/locales/en/common.json`
7. Run tests and type checks before committing

### Adding an Integration

1. Create app in `packages/app-store/[integration]/`
2. Follow template in `packages/app-store/templates/`
3. Implement OAuth flow or API integration
4. Add static assets to `packages/app-store/[integration]/static/`
5. Test with `yarn app-store:build`

### Debugging

- Set `NEXT_PUBLIC_LOGGER_LEVEL=3` in `.env` for logging (0-6, higher = more verbose)
- Use Prisma Studio: `yarn db-studio`
- Check build cache: `yarn clean` then rebuild
- Increase Node memory: `export NODE_OPTIONS="--max-old-space-size=16384"`

## Resources

- **README.md**: Project overview and getting started
- **AGENTS.md**: AI agent development guide
- **SPEC-WORKFLOW.md**: Spec-driven development workflow
- **unEE.md**: Open-source migration status
- **PROJECT_STRUCTURE.md**: Detailed project structure
- **CONTRIBUTING.md**: Contribution guidelines
- **docs/**: User and developer documentation

## License

This project is licensed under AGPLv3. See `LICENSE` for details.

---

**Note to AI Agents**: This is a senior-level engineering environment. Prioritize type safety, security, and small reviewable diffs. Always run `yarn type-check:ci --force` before concluding CI failures are unrelated to your changes.
