import * as fs from "node:fs";
import * as path from "node:path";

/**
 * Generate custom-icons-manifest.ts from SVG files
 *
 * This script reads all SVG files from src/assets/icons/
 * and generates a TypeScript file with the icon data embedded.
 *
 * Run this script whenever you add, remove, or modify SVG files.
 */

const CUSTOM_ICONS_DIR = path.join(__dirname, "assets", "icons");
const OUTPUT_FILE = path.join(__dirname, "custom-icons-manifest.ts");

/**
 * Default icon size in pixels (standard size for UI icons)
 */
const DEFAULT_ICON_SIZE = 24;

/**
 * Convert a filename to an icon name (camelCase)
 */
function filenameToIconName(filename: string): string {
  return filename.replace(/\.svg$/i, "").replace(/[-_]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ""));
}

/**
 * Parse SVG content to Iconify icon body format
 * Applies auto-scaling if viewBox exceeds DEFAULT_ICON_SIZE
 */
function parseSvgToIconBody(svgContent: string, filename: string): string | null {
  try {
    const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
    if (!svgMatch) {
      console.warn(`Invalid SVG content`);
      return null;
    }

    // Extract full svg tag to parse attributes
    const fullSvgTag = svgContent.match(/<svg\s+([^>]*)>/);
    if (!fullSvgTag) {
      console.warn(`Cannot parse SVG tag`);
      return null;
    }

    const svgAttributes = fullSvgTag[1];

    // Preserve xmlns:xlink for gradients
    const xlinkMatch = svgAttributes.match(/xmlns:xlink="([^"]*)"/);
    const xlinkAttr = xlinkMatch ? ` xmlns:xlink="${xlinkMatch[1]}"` : "";

    // Extract viewBox
    const viewBoxMatch = svgAttributes.match(/viewBox="([^"]*)"/);
    if (!viewBoxMatch) {
      // No viewBox - skip scaling, just clean up
      let iconBody = svgMatch[1];
      iconBody = iconBody.replace(/xmlns="[^"]*"/g, "");
      iconBody = iconBody.replace(/<defs\s*\/>/g, "<defs></defs>");
      iconBody = iconBody.replace(/\s+/g, " ").trim();
      return iconBody || null;
    }

    const viewBoxParts = viewBoxMatch[1].trim().split(/\s+/).map(Number);
    if (viewBoxParts.length !== 4) {
      console.warn(`Invalid viewBox format: ${viewBoxMatch[1]}`);
      let iconBody = svgMatch[1];
      iconBody = iconBody.replace(/xmlns="[^"]*"/g, "");
      iconBody = iconBody.replace(/<defs\s*\/>/g, "<defs></defs>");
      iconBody = iconBody.replace(/\s+/g, " ").trim();
      return iconBody || null;
    }

    const [viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight] = viewBoxParts;
    const maxSize = Math.max(viewBoxWidth, viewBoxHeight);

    let iconBody = svgMatch[1];

    // Remove xmlns declarations
    iconBody = iconBody.replace(/xmlns="[^"]*"/g, "");

    // Replace self-closing defs with paired tags
    iconBody = iconBody.replace(/<defs\s*\/>/g, "<defs></defs>");

    // Apply scaling if viewBox exceeds DEFAULT_ICON_SIZE
    if (maxSize > DEFAULT_ICON_SIZE) {
      const scale = DEFAULT_ICON_SIZE / maxSize;
      const iconName = filenameToIconName(filename);

      // Build transform string
      let transform = `scale(${scale})`;
      if (viewBoxX !== 0 || viewBoxY !== 0) {
        // Translate to compensate for non-zero viewBox origin
        transform = `translate(${viewBoxX}, ${viewBoxY}) ${transform}`;
      }

      // Add stroke-width scaling attribute for proportional stroke rendering
      const strokeScalingAttr = ` vector-effect="non-scaling-stroke"`;

      // Wrap content in scaled group
      iconBody = `<g transform="${transform}"${strokeScalingAttr}>${iconBody}</g>`;

      console.log(
        `✓ Scaled: ${iconName} (${viewBoxWidth}x${viewBoxHeight} → ${DEFAULT_ICON_SIZE}x${DEFAULT_ICON_SIZE})`
      );
    }

    // Normalize whitespace
    iconBody = iconBody.replace(/\s+/g, " ").trim();

    if (!iconBody) {
      console.warn(`SVG body is empty after cleanup`);
      return null;
    }

    return iconBody;
  } catch (error) {
    console.warn(`Failed to parse SVG:`, error);
    return null;
  }
}

/**
 * Escape special characters for template literal
 */
function escapeForTemplateLiteral(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function main() {
  // Ensure the custom icons directory exists
  if (!fs.existsSync(CUSTOM_ICONS_DIR)) {
    console.log(`Creating custom icons directory: ${CUSTOM_ICONS_DIR}`);
    fs.mkdirSync(CUSTOM_ICONS_DIR, { recursive: true });
    console.log("No custom icons found. Add SVG files to generate the manifest.");

    // Generate empty manifest
    const emptyManifest = `// Auto-generated file - DO NOT EDIT
// Run 'yarn generate-icons-manifest' to regenerate

export const CUSTOM_ICONS_MANIFEST: Record<string, string> = {};
`;
    fs.writeFileSync(OUTPUT_FILE, emptyManifest);
    return;
  }

  // Read all SVG files
  const svgFiles = fs.readdirSync(CUSTOM_ICONS_DIR).filter((file) => file.endsWith(".svg"));

  if (svgFiles.length === 0) {
    console.log("No SVG files found in custom icons directory.");

    const emptyManifest = `// Auto-generated file - DO NOT EDIT
// Run 'yarn generate-icons-manifest' to regenerate

export const CUSTOM_ICONS_MANIFEST: Record<string, string> = {};
`;
    fs.writeFileSync(OUTPUT_FILE, emptyManifest);
    return;
  }

  const icons: Record<string, string> = {};

  for (const svgFile of svgFiles) {
    const svgPath = path.join(CUSTOM_ICONS_DIR, svgFile);
    const svgContent = fs.readFileSync(svgPath, "utf-8");
    const iconBody = parseSvgToIconBody(svgContent, svgFile);

    if (iconBody) {
      const iconName = filenameToIconName(svgFile);
      icons[iconName] = iconBody;
      console.log(`✓ Added icon: ${iconName}`);
    }
  }

  // Generate the manifest file
  const manifestContent = `// Auto-generated file - DO NOT EDIT
// Run 'yarn generate-icons-manifest' to regenerate
// Generated at: ${new Date().toISOString()}

export const CUSTOM_ICONS_MANIFEST: Record<string, string> = {
${Object.entries(icons)
  .map(([name, body]) => `  "${name}": \`${escapeForTemplateLiteral(body)}\`,`)
  .join("\n")}
};

export const CUSTOM_ICONS_COUNT = ${Object.keys(icons).length};
`;

  fs.writeFileSync(OUTPUT_FILE, manifestContent);
  console.log(`\nGenerated ${OUTPUT_FILE} with ${Object.keys(icons).length} icons`);
}

main();
