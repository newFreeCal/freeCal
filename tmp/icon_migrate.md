# Icon Migration Task

## Objective
Migrate all icons in the specified module to use `@iconify/react` as the primary icon library. **Do not use `@calcom/ui/components/icon`.**

## Instructions

### 1. Identify Current Icon Usage
- Search for all imports from `@calcom/ui/components/icon` in the target module
- Identify all icon components being used (e.g., `<Icon />`, `<Icons.* />`, etc.)
- Document the icon names/props being passed

### 2. Replace with Iconify
For each icon found:

**Before:**
```tsx
import { Icon } from "@calcom/ui/components/icon";
<Icon name="icon-name" className="..." />
```

**After:**
```tsx
import { Icon } from "@iconify/react";
<Icon icon="iconify-set:icon-name" className="..." />
```

### 3. Icon Mapping Guidelines
- Use the `iconify` search (https://icon-sets.iconify.design/) to find equivalent icons
- Prefer color icons from these sets when available:
  - `glyphs-poly`
  - `fluent-color`
  - `material-icon-theme`
- Maintain all existing `className` props for styling consistency
- Preserve all other props (onClick, title, etc.)

### 4. Update Imports
- Remove all imports from `@calcom/ui/components/icon`
- Add `@iconify/react` import at the top of each file
- Add `@packages/coss-ui/src/icons` imports only when fallback icons are needed
- Clean up any unused imports

### 5. Verification
After migration, ensure:
- [ ] No imports from `@calcom/ui/components/icon` remain in the module
- [ ] All icons render correctly (no broken/broken icons)
- [ ] All `className` styles are preserved
- [ ] TypeScript types are correct (Icon from @iconify/react accepts `icon` prop)
- [ ] Run linting: `yarn lint` or project's lint command
- [ ] Run tests if available: `yarn test` for the affected module

### 6. Example Migration

**File: `example-component.tsx`**

**Before:**
```tsx
import { Icon } from "@calcom/ui/components/icon";

export function ExampleComponent() {
  return (
    <div>
      <Icon name="calendar" className="h-4 w-4" />
      <Icon name="user" className="h-5 w-5 text-gray-500" />
      <Icon name="settings" className="h-4 w-4" onClick={handleClick} />
    </div>
  );
}
```

**After:**
```tsx
import { Icon } from "@iconify/react";

export function ExampleComponent() {
  return (
    <div>
      <Icon icon="glyphs-poly:calendar" className="h-4 w-4" />
      <Icon icon="glyphs-poly:user" className="h-5 w-5 text-gray-500" />
      <Icon icon="glyphs-poly:settings" className="h-4 w-4" onClick={handleClick} />
    </div>
  );
}
```

## Notes
- If you encounter a custom icon that doesn't exist in Iconify or @packages/coss-ui, flag it for manual review
- Keep icon naming consistent (use kebab-case for Iconify icon names)
- Preserve accessibility attributes (aria-label, title, etc.)
