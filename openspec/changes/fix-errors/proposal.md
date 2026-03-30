## Why

The build process is failing with errors, preventing successful compilation and deployment. This blocks development, testing, and deployment workflows.

## What Changes

- Fix all TypeScript type errors across packages and apps
- Resolve Biome linting and formatting issues
- Address any runtime build failures
- Ensure `yarn build` completes successfully
- Ensure `yarn lint:fix` and `yarn type-check:ci --force` pass

## Capabilities

### New Capabilities

None - this is a maintenance fix to existing build infrastructure.

### Modified Capabilities

None - this change does not introduce or modify capabilities.

## Impact

- Build pipeline: `yarn build` must succeed
- Type checking: `yarn type-check` and `yarn type-check:ci --force` must pass
- Linting: `yarn lint` and `yarn lint:fix` must pass
- All packages must compile without errors
- Affected areas: packages, apps, and their dependencies