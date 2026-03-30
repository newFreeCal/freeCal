import { addCollection } from "@iconify/react";
import type { IconifyIcon, IconifyJSON } from "@iconify/types";
import { CUSTOM_ICONS_MANIFEST } from "./custom-icons-manifest";

/**
 * Custom Icons Collection
 *
 * Registers a local Iconify collection with prefix 'custom'.
 * Icons are loaded from the auto-generated custom-icons-manifest.ts file.
 *
 * To add a new custom icon:
 * 1. Create an SVG file in src/assets/icons/ (e.g., my-icon.svg)
 * 2. Run: yarn generate-icons-manifest
 * 3. Use in components: createIcon("custom:myIcon", "test-id")
 *
 * File naming: kebab-case files → camelCase icons (arrow-up.svg → custom:arrowUp)
 */

/**
 * Default icon dimensions
 */
const DEFAULT_ICON_SIZE = 24;

/**
 * Track if icons have been registered to avoid duplicate registration
 */
let iconsRegistered = false;

/**
 * Load all custom icons from the generated manifest
 */
export function loadCustomIcons(): IconifyJSON | null {
  const iconEntries = Object.entries(CUSTOM_ICONS_MANIFEST);

  if (iconEntries.length === 0) {
    return null;
  }

  const icons: Record<string, IconifyIcon> = Object.fromEntries(
    iconEntries.map(([name, body]) => [name, { body, width: DEFAULT_ICON_SIZE, height: DEFAULT_ICON_SIZE }])
  );

  return {
    prefix: "custom",
    icons,
  };
}

/**
 * Create a custom icon reference string
 *
 * @param iconName - Icon name without 'custom:' prefix
 * @returns Icon reference in format 'custom:iconName'
 */
export function customIcon(iconName: string): string {
  return `custom:${iconName}`;
}

/**
 * Register custom icons with Iconify
 * Call once at application startup (client-side only)
 */
export function registerCustomIcons(): void {
  // Only register on client-side
  if (typeof window === "undefined" || iconsRegistered) {
    return;
  }

  iconsRegistered = true;
  const collection = loadCustomIcons();

  if (collection) {
    addCollection(collection);
    console.log(`[custom-icons] Registered ${Object.keys(collection.icons).length} custom icons`);
  } else {
    console.warn(
      "[custom-icons] No custom icons found. Add SVG files to src/assets/icons/ and run: yarn generate-icons-manifest"
    );
  }
}
