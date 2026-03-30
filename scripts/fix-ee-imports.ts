#!/usr/bin/env npx tsx

import * as fs from "node:fs";
import * as path from "node:path";

const projectRoot = path.resolve(__dirname, "..");

// Import mappings from @calcom/ee/* to @calcom/features/*/lib/stubs/*
const importMappings: Record<string, string> = {
  "@calcom/ee/workflows": "@calcom/features/workflows/lib/stubs",
  "@calcom/features/ee/workflows": "@calcom/features/workflows/lib/stubs",
  "@calcom/ee/organizations": "@calcom/features/organizations/lib/stubs",
  "@calcom/features/ee/organizations": "@calcom/features/organizations/lib/stubs",
  "@calcom/ee/teams": "@calcom/features/teams/lib/stubs",
  "@calcom/features/ee/teams": "@calcom/features/teams/lib/stubs",
  "@calcom/ee/api-keys": "@calcom/features/api-keys/lib/stubs",
  "@calcom/features/ee/api-keys": "@calcom/features/api-keys/lib/stubs",
  "@calcom/ee/deployment": "@calcom/features/deployment/lib/stubs",
  "@calcom/features/ee/deployment": "@calcom/features/deployment/lib/stubs",
  "@calcom/ee/common": "@calcom/features/common/lib/stubs",
  "@calcom/features/ee/common": "@calcom/features/common/lib/stubs",
  "@calcom/ee/payments": "@calcom/features/payments/lib/stubs",
  "@calcom/features/ee/payments": "@calcom/features/payments/lib/stubs",
  "@calcom/ee/sso": "@calcom/features/sso/lib/stubs",
  "@calcom/features/ee/sso": "@calcom/features/sso/lib/stubs",
  "@calcom/ee/dsync": "@calcom/features/dsync/lib/stubs",
  "@calcom/features/ee/dsync": "@calcom/features/dsync/lib/stubs",
  "@calcom/ee/managed-event-types": "@calcom/features/managed-event-types/lib/stubs",
  "@calcom/features/ee/managed-event-types": "@calcom/features/managed-event-types/lib/stubs",
  "@calcom/ee/integration-attribute-sync": "@calcom/features/integration-attribute-sync/lib/stubs",
  "@calcom/features/ee/integration-attribute-sync": "@calcom/features/integration-attribute-sync/lib/stubs",
};

const eeImports = new Map<string, Set<string>>();

function findFilesWithEeImports(dir: string): string[] {
  const files: string[] = [];
  let items: string[];

  try {
    items = fs.readdirSync(dir);
  } catch (e) {
    return files;
  }

  for (const item of items) {
    const fullPath = path.join(dir, item);

    try {
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (item === "node_modules" || item === ".git" || item === "dist" || item === "build") {
          continue;
        }
        files.push(...findFilesWithEeImports(fullPath));
      } else if (item.endsWith(".ts") || item.endsWith(".tsx")) {
        const content = fs.readFileSync(fullPath, "utf8");
        if (content.includes("@calcom/ee/") || content.includes("@calcom/features/ee/")) {
          files.push(fullPath);
          eeImports.set(fullPath, new Set());

          const eeImportMatches = content.matchAll(/from ['"](@calcom\/(?:ee|features\/ee)\/[^'"]*)['"]/g);
          for (const match of eeImportMatches) {
            const importPath = match[1];
            if (eeImports.get(fullPath)) {
              eeImports.get(fullPath)?.add(importPath);
            }
          }
        }
      }
    } catch (e) {}
  }

  return files;
}

function replaceEEImports(content: string): { newContent: string; replacedCount: number } {
  let newContent = content;
  let replacedCount = 0;

  for (const [eePath, stubPath] of Object.entries(importMappings)) {
    const regex = new RegExp(`from ['"]${eePath.replace(/\//g, "\\/")}([^'"]*)['"]`, "g");
    if (regex.test(newContent)) {
      const matches = newContent.match(regex);
      if (matches) {
        replacedCount += matches.length;
      }
      newContent = newContent.replace(regex, `from '${stubPath}$1'`);
    }
  }

  return { newContent, replacedCount };
}

function processFiles() {
  console.log("Scanning for files with @calcom/ee or @calcom/features/ee imports...");

  const allFiles = findFilesWithEeImports(projectRoot);
  console.log(`Found ${allFiles.length} files with EE imports`);

  const modifiedFiles: string[] = [];
  let totalReplacements = 0;

  for (const filePath of allFiles) {
    const content = fs.readFileSync(filePath, "utf8");
    const { newContent, replacedCount } = replaceEEImports(content);

    if (replacedCount > 0) {
      fs.writeFileSync(filePath, newContent, "utf8");
      modifiedFiles.push(filePath);
      totalReplacements += replacedCount;
      console.log(`✓ Modified: ${path.relative(projectRoot, filePath)} (${replacedCount} imports)`);
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Total files modified: ${modifiedFiles.length}`);
  console.log(`Total imports replaced: ${totalReplacements}`);
}

processFiles();
