# freeCal Development Guide for AI Agents

You are a senior freeCal engineer working in a Yarn/Turbo monorepo. You prioritize type safety, security, and small, reviewable diffs.

## Do

- Use `select` instead of `include` in Prisma queries
- Use `import type { X }` for TypeScript type imports
- Use early returns to reduce nesting
- Use `ErrorWithCode` for errors in non-tRPC files; use `TRPCError` only in tRPC routers
- Use conventional commits: `feat:`, `fix:`, `refactor:`
- Create PRs in draft mode by default
- Run `yarn type-check:ci --force` before concluding CI failures
- Import directly from source files, not barrel files
- Add translations to `apps/web/public/static/locales/en/common.json` for all UI strings
- Use `date-fns` or native `Date` instead of Day.js when timezone awareness isn't needed
- Put permission checks in `page.tsx`, never in `layout.tsx`
- Use `ast-grep` for searching; otherwise use `rg`, then `grep`
- Use Biome for formatting and linting
- Only add code comments that explain **why**, not **what**
- Use named imports for services (verify export name before importing)
- Use `Build[ServiceName]` naming convention for factory functions
- Use descriptive error messages with context
- Follow import organization rules
- Keep PRs under 500 lines and 10 files

## Don't

- Never use `as any` - use proper type-safe solutions
- Never expose `credential.key` in API responses or queries
- Never commit secrets or API keys
- Never modify `*.generated.ts` files directly - they're created by app-store-cli
- Never put business logic in repositories
- Never use barrel imports from index.ts files
- Never skip running type checks before pushing
- Never create large PRs (>500 lines or >10 files) - split them instead
- Never add comments that simply restate what the code does

## Build, Lint & Test Commands

```bash
# Development
yarn dev                              # Start web app dev server
yarn dev:all                          # Start web, website, and console
yarn dev:api                          # Start web with API proxy and API
yarn dx                               # Start dev with database setup

# Build & Clean
yarn build                            # Build all packages and apps
yarn build:ai                         # Build AI package only
yarn clean                            # Remove build artifacts

# Lint & Type Check
yarn lint                             # Run Biome across codebase
yarn lint:fix                         # Run Biome and apply safe fixes
yarn type-check                       # Run TypeScript type checking
yarn type-check:ci --force            # Type check (always run before pushing)
yarn format                           # Format code with Biome

# Testing
yarn test                             # Run all unit tests
yarn test <filename>                  # Run tests for specific file
yarn test <filename> -t "<testName>"  # Run specific test by name
VITEST_MODE=integration yarn test     # Run integration tests
yarn e2e                               # Run all E2E tests
yarn e2e <filename>                    # Run E2E test for specific file
yarn e2e <filename> --grep "<testName>" # Run specific E2E test by name
yarn prisma                            # Run Prisma CLI
yarn prisma generate                   # Regenerate types after schema changes

# Database
yarn db-seed                           # Seed database with test data
yarn db-deploy                         # Deploy database migrations
yarn db-studio                         # Open Prisma Studio
```

## PR Size Guidelines

Large PRs are difficult to review, prone to errors, and slow down development. Always aim for smaller, self-contained PRs.

### Size Limits
- **Lines changed**: Keep PRs under 500 lines of code (additions + deletions)
- **Files changed**: Keep PRs under 10 code files
- **Single responsibility**: Each PR should do one thing well

**Non-code files excluded**: Documentation (README.md, CHANGELOG.md), lock files (yarn.lock), auto-generated files

### How to Split Large Changes

1. **By layer**: Separate database/schema changes, backend logic, and frontend UI into different PRs
2. **By feature component**: Split a feature into its constituent parts
3. **By refactor vs feature**: Do preparatory refactoring in a separate PR before adding new functionality
4. **By dependency order**: Create PRs in the order they can be merged (base infrastructure first, then features that depend on it)

## Boundaries

### Always do
- Run type check on changed files before committing
- Run relevant tests before pushing
- Use `select` in Prisma queries
- Follow conventional commits for PR titles
- Run Biome before pushing

### Ask first
- Adding new dependencies
- Schema changes to `packages/prisma/schema.prisma`
- Changes affecting multiple packages
- Deleting files
- Running full build or E2E suites

### Never do
- Commit secrets, API keys, or `.env` files
- Expose `credential.key` in any query
- Use `as any` type casting
- Force push or rebase shared branches
- Modify generated files directly

## Project Structure

```
apps/web/                    # Main Next.js application
packages/prisma/             # Database schema (schema.prisma) and migrations
packages/trpc/               # tRPC API layer (routers in server/routers/)
packages/ui/                 # Shared UI components
packages/features/           # Feature-specific code
packages/app-store/          # Third-party integrations
packages/lib/                # Shared utilities
```

### Key files
- Routes: `apps/web/app/` (App Router)
- Database schema: `packages/prisma/schema.prisma`
- tRPC routers: `packages/trpc/server/routers/`
- Translations: `apps/web/public/static/locales/en/common.json`
- Workflow stubs: `packages/features/ee/workflows/lib/*.stub.ts` (no-op implementations)

> **Note:** The `/ee` folder now contains stub implementations for the open-source version (unEE project). See [unEE_todo.md](../../unEE_todo.md) for details.

## Tech Stack

- **Framework**: Next.js 13+ (App Router in some areas)
- **Language**: TypeScript (strict)
- **Database**: PostgreSQL with Prisma ORM
- **API**: tRPC for type-safe APIs
- **Auth**: NextAuth.js
- **Styling**: Tailwind CSS
- **Testing**: Vitest (unit), Playwright (E2E)
- **i18n**: next-i18next

## Code Style Guidelines

### Formatting (Biome)
- Line width: 110 characters, 2 spaces, double quotes, semicolons always, trailing commas ES5

### Naming
- Factory functions: `Build[ServiceName]`
- Services: Use actual export name from source file

### Error Handling
```typescript
// Non-tRPC files
import { ErrorWithCode } from "@calcom/lib/errors";
throw ErrorWithCode.Factory.Forbidden("You don't have permission");

// tRPC routers only
import { TRPCError } from "@trpc/server";
throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid input" });
```

### Imports
Type imports first, then workspace imports, then local imports (see [quality-imports.md](agents.md/rules/quality-imports.md))

### Code Comments
Only explain **why**, not **what**

### API v2 Imports
Import from `@calcom/platform-libraries` instead of direct imports

### Prisma Queries
Always use `select` for performance and security

## PR Checklist

- [ ] Type check: `yarn type-check:ci --force`
- [ ] Lint: `yarn lint:fix`
- [ ] Tests pass
- [ ] Diff <500 lines, <10 files
- [ ] No secrets committed
- [ ] UI strings translated
- [ ] Created as draft PR

## When Stuck

- Ask before large changes
- Open draft PR with notes if unsure
- Fix type errors before test failures
- Run `yarn prisma generate` for enum/type errors

See [agents.md/](agents.md/) for detailed rules and [SPEC-WORKFLOW.md](SPEC-WORKFLOW.md) for spec-driven development.