import type { Dayjs, PluginFunc } from "dayjs";

declare const plugin: PluginFunc;
export as namespace plugin;
export = plugin;
declare namespace plugin {
  interface BusinessDaysPluginOptions {
    holidays?: string[];
    holidayFormat?: string;
    additionalWorkingDays?: string[];
    additionalWorkingDayFormat?: string;
    workingWeekdays?: number[];
  }

  interface BusinessDaysPlugin {
    isHoliday(): boolean;
    isBusinessDay(): boolean;
    isAdditionalWorkingDay(): boolean;
    businessDaysAdd(days: number): Dayjs;
    businessDaysSubtract(days: number): Dayjs;
    businessDiff(date: Dayjs): number;
    nextBusinessDay(): Dayjs;
    prevBusinessDay(): Dayjs;
    businessDaysInMonth(): Dayjs[];
    lastBusinessDayOfMonth(): Dayjs;
    businessWeeksInMonth(): Dayjs[][];
  }
}

declare module "dayjs" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, no-shadow
  interface Dayjs extends plugin.BusinessDaysPlugin {}
}

// Additional methods added to dayjsFactory in the plugin implementation
// These are declared here for type safety when calling them
declare module "dayjs" {
  export function getWorkingWeekdays(): number[];
  export function setWorkingWeekdays(workingWeekdays: number[]): void;
  export function getHolidays(): string[];
  export function setHolidays(holidays: string[]): void;
  export function getHolidayFormat(): string | undefined;
  export function setHolidayFormat(holidayFormat: string): void;
  export function getAdditionalWorkingDays(): string[];
  export function setAdditionalWorkingDays(additionalWorkingDays: string[]): void;
  export function getAdditionalWorkingDayFormat(): string | undefined;
  export function setAdditionalWorkingDayFormat(additionalWorkingDayFormat: string): void;
}
