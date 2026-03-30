## Context

The freeCal monorepo has build-stage errors preventing successful compilation and deployment. These errors block development workflows and must be resolved to allow continuous integration and deployment.

Current build and validation commands are failing:
- `yarn build` fails with errors
- `yarn type-check` and `yarn type-check:ci --force` have failures
- `yarn lint` and `yarn lint:fix` have issues

The project uses Turbo for monorepo management, TypeScript for type safety, Biome for linting, and Prisma for database operations. All packages must compile successfully for the build to pass.

## Goals / Non-Goals

**Goals:**
- Ensure `yarn build` completes successfully without errors
- Pass all TypeScript type checks with strict mode enabled
- Pass all Biome linting rules
- Maintain existing functionality and architecture
- Keep changes minimal and focused on fixing errors

**Non-Goals:**
- Adding new features or capabilities
- Refactoring code for performance improvements
- Changing project structure or dependencies
- Modifying database schema or migrations
- Introducing new development workflows

## Decisions

### 1. Fix Errors in Order of Priority

**Decision:** Address build errors in this order:
1. TypeScript type errors (type-check)
2. Biome linting issues (lint)
3. Runtime build failures (build)

**Rationale:** Type errors are the most fundamental - they indicate type safety violations that can lead to bugs. Linting issues are important for code quality. Runtime build errors are the final check before deployment.

**Alternatives Considered:**
- Fix all errors simultaneously: Would require analyzing multiple systems at once, increasing risk
- Prioritize by error count: Less reliable than fixing type errors first, as some type errors may be symptoms of root causes

### 2. Use Type-Check First to Identify Root Causes

**Decision:** Run `yarn type-check:ci --force` to get a comprehensive list of all type errors before making changes.

**Rationale:** This provides a complete picture of the type system issues and ensures we don't fix symptoms without addressing root causes. The `--force` flag ensures all checks run even with failures.

**Alternatives Considered:**
- Fix errors as they appear during development: Would miss systemic issues and create an unmanageable patchwork
- Use IDE type checking only: IDEs may miss some errors, and type-check is the authoritative source

### 3. Apply Biome Auto-Fixes When Possible

**Decision:** Use `yarn lint:fix` to automatically resolve formatting and style issues, then manually review and fix remaining linting issues.

**Rationale:** Biome's auto-fix can resolve most formatting issues (line length, spacing, quotes, etc.) efficiently. Manual intervention is needed for more complex style decisions.

**Alternatives Considered:**
- Manually fix all linting issues: Too time-consuming and error-prone
- Disable specific linting rules: Would reduce code quality and consistency

### 4. Run Build After Each Fix Category

**Decision:** After addressing type errors, run `yarn type-check:ci --force` to verify no new errors were introduced. Then run `yarn lint:fix` and `yarn lint`. Finally, run `yarn build` to check for runtime build failures.

**Rationale:** This incremental approach ensures each fix category is resolved before moving to the next, reducing the risk of cascading issues.

**Alternatives Considered:**
- Fix all errors in one pass: Would require understanding relationships between different error types
- Focus on build only: Would miss type and linting issues that may affect build success

## Risks / Trade-offs

**Risk: Fixing type errors may introduce runtime bugs**
→ **Mitigation:** Run comprehensive test suites after each fix category to verify no regressions

**Risk: Biome auto-fixes may not resolve all linting issues**
→ **Mitigation:** Manually review and fix remaining linting issues; ensure all Biome rules are appropriate for the project

**Risk: Build may fail due to dependencies that need updating**
→ **Mitigation:** Check package.json for outdated dependencies; update only if necessary and test thoroughly

**Trade-off:** Minimal changes vs. comprehensive fixes
→ **Decision:** Focus on fixing current errors rather than proactively preventing future errors, to minimize scope and risk

**Trade-off:** Speed vs. thoroughness
→ **Decision:** Prioritize correctness over speed - ensure all errors are fixed rather than rushing to a partial solution