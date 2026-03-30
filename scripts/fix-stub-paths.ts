#!/usr/bin/env npx tsx

import * as fs from "node:fs";
import * as path from "node:path";

const projectRoot = "/mnt/hdd/Projects/freeCal";

// Path corrections: what the imports should be corrected to
const pathCorrections: Record<string, string> = {
  // workflows
  "@calcom/features/workflows/lib/stubs/WorkflowService":
    "@calcom/features/workflows/lib/stubs/WorkflowService",
  "@calcom/features/workflows/lib/stubs/getAllWorkflowsFromEventType":
    "@calcom/features/workflows/lib/stubs/getAllWorkflowsFromEventType",
  "@calcom/features/workflows/lib/stubs/getAllWorkflowsFromEventType":
    "@calcom/features/workflows/lib/stubs/getAllWorkflowsFromEventType",
  "@calcom/features/workflows/lib/stubs/getAllWorkflows":
    "@calcom/features/workflows/lib/stubs/getAllWorkflows",
  "@calcom/features/workflows/lib/stubs/types": "@calcom/features/workflows/lib/stubs/types",
  "@calcom/features/workflows/lib/stubs/StubWorkflowService":
    "@calcom/features/workflows/lib/stubs/StubWorkflowService",
  "@calcom/features/workflows/lib/stubs/WorkflowRepository":
    "@calcom/features/workflows/lib/stubs/WorkflowRepository",
  "@calcom/features/workflows/lib/stubs/scheduleWorkflowReminders":
    "@calcom/features/workflows/lib/stubs/scheduleWorkflowReminders",
  "@calcom/features/workflows/lib/stubs/allowDisablingStandardEmails":
    "@calcom/features/workflows/lib/stubs/allowDisablingStandardEmails",
  "@calcom/features/workflows/lib/stubs/actionHelperFunctions":
    "@calcom/features/workflows/lib/stubs/actionHelperFunctions",
  "@calcom/features/workflows/lib/stubs/compareReminderBodyToTemplate":
    "@calcom/features/workflows/lib/stubs/compareReminderBodyToTemplate",
  "@calcom/features/workflows/lib/stubs/scheduleWorkflowNotifications":
    "@calcom/features/workflows/lib/stubs/scheduleWorkflowNotifications",
  "@calcom/features/workflows/lib/stubs/customTemplate":
    "@calcom/features/workflows/lib/stubs/customTemplate",
  "@calcom/features/workflows/lib/stubs/WorkflowReminderRepository":
    "@calcom/features/workflows/lib/stubs/WorkflowReminderRepository",
  "@calcom/features/workflows/lib/stubs/StubWorkflowRepository":
    "@calcom/features/workflows/lib/stubs/StubWorkflowRepository",
  "@calcom/features/workflows/lib/stubs/constants": "@calcom/features/workflows/lib/stubs/constants",
  "@calcom/features/workflows/lib/stubs/EmailWorkflowService":
    "@calcom/features/workflows/lib/stubs/EmailWorkflowService",
  "@calcom/features/workflows/lib/stubs/WorkflowReminderRepository":
    "@calcom/features/workflows/lib/stubs/WorkflowReminderRepository",
  "@calcom/features/workflows/lib/stubs/verifyPhoneNumber":
    "@calcom/features/workflows/lib/stubs/verifyPhoneNumber",

  // organizations
  "@calcom/features/organizations/lib/stubs/orgDomains":
    "@calcom/features/organizations/lib/stubs/orgDomains",
  "@calcom/features/organizations/lib/stubs/getBookerUrlServer":
    "@calcom/features/organizations/lib/stubs/getBookerUrlServer",
  "@calcom/features/organizations/lib/stubs/getBookerBaseUrlSync":
    "@calcom/features/organizations/lib/stubs/getBookerBaseUrlSync",
  "@calcom/features/organizations/lib/stubs/OrganizationRepository":
    "@calcom/features/organizations/lib/stubs/OrganizationRepository",
  "@calcom/features/organizations/lib/stubs/OrganizationRepository":
    "@calcom/features/organizations/lib/stubs/OrganizationRepository",
  "@calcom/features/organizations/lib/stubs/tokens": "@calcom/features/organizations/lib/stubs/tokens",

  // teams
  "@calcom/features/teams/lib/stubs/TeamRepository": "@calcom/features/teams/lib/stubs/TeamRepository",
  "@calcom/features/teams/lib/stubs/getTeamMemberEmailFromCrm":
    "@calcom/features/teams/lib/stubs/getTeamMemberEmailFromCrm",
  "@calcom/features/teams/lib/stubs/getParsedTeam": "@calcom/features/teams/lib/stubs/getParsedTeam",
  "@calcom/features/teams/lib/stubs/queries": "@calcom/features/teams/lib/stubs/queries",
  "@calcom/features/teams/lib/stubs/StubTeamService": "@calcom/features/teams/lib/stubs/StubTeamService",

  // api-keys
  "@calcom/features/api-keys/lib/stubs/findValidApiKey":
    "@calcom/features/api-keys/lib/stubs/findValidApiKey",
  "@calcom/features/api-keys/lib/stubs/autoLock": "@calcom/features/api-keys/lib/stubs/autoLock",
  "@calcom/features/api-keys/lib/stubs/PrismaApiKeyRepository":
    "@calcom/features/api-keys/lib/stubs/PrismaApiKeyRepository",

  // payments
  "@calcom/features/payments/lib/stubs/stripe": "@calcom/features/payments/lib/stubs/stripe",
  "@calcom/features/payments/lib/stubs/getClientSecretFromPayment":
    "@calcom/features/payments/lib/stubs/getClientSecretFromPayment",

  // impersonation
  "@calcom/features/impersonation/lib/stubs/ImpersonationProvider":
    "@calcom/features/impersonation/lib/stubs/ImpersonationProvider",

  // round-robin
  "@calcom/features/round-robin/roundRobinManualReassignment":
    "@calcom/features/round-robin/roundRobinManualReassignment",
  "@calcom/features/round-robin/roundRobinReassignment":
    "@calcom/features/round-robin/roundRobinReassignment",
  "@calcom/features/round-robin/utils/validateRoundRobinSlotAvailability":
    "@calcom/features/round-robin/utils/validateRoundRobinSlotAvailability",

  // common
  "@calcom/features/common/lib/stubs/LicenseKeyService":
    "@calcom/features/common/lib/stubs/LicenseKeyService",
};

function replacePathInFile(filePath: string): boolean {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    for (const [oldPath, newPath] of Object.entries(pathCorrections)) {
      // Check for both single and double quotes
      const regex1 = new RegExp(`from ['"]${oldPath.replace(/\//g, "\\/")}([^'"]*)['"]`, "g");
      const regex2 = new RegExp(`['"]${oldPath.replace(/\//g, "\\/")}([^'"]*)['"]`, "g");

      if (regex1.test(content) || regex2.test(content)) {
        content = content.replace(regex1, `from '${newPath}$1'`);
        content = content.replace(regex2, `'${newPath}$1'`);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

function findAndFixFiles(dir: string, results: { count: number; files: string[] }) {
  try {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (
          item === "node_modules" ||
          item === ".git" ||
          item === "dist" ||
          item === "build" ||
          item === ".next"
        ) {
          continue;
        }
        findAndFixFiles(fullPath, results);
      } else if (item.endsWith(".ts") || item.endsWith(".tsx")) {
        if (replacePathInFile(fullPath)) {
          results.count++;
          results.files.push(path.relative(projectRoot, fullPath));
          console.log(`✓ Fixed: ${path.relative(projectRoot, fullPath)}`);
        }
      }
    }
  } catch (e) {
    // Skip directories that can't be read
  }
}

console.log("Fixing stub import paths...\n");

const results = { count: 0, files: [] as string[] };
findAndFixFiles(projectRoot, results);

console.log(`\n=== Summary ===`);
console.log(`Total files fixed: ${results.count}`);

if (results.files.length > 0) {
  console.log("\nFiles modified:");
  results.files.forEach((f) => console.log(`  - ${f}`));
}
