import type { Dayjs, PluginFunc } from "dayjs";

export interface BusinessDaysPluginOptions {
  holidays?: string[];
  holidayFormat?: string;
  additionalWorkingDays?: string[];
  additionalWorkingDayFormat?: string;
  workingWeekdays?: number[];
}

declare module "dayjs" {
  interface Dayjs {
    isHoliday(): boolean;
    isBusinessDay(): boolean;
    isAdditionalWorkingDay(): boolean;
    businessDaysAdd(amount: number): Dayjs;
    businessDaysSubtract(amount: number): Dayjs;
    businessDiff(otherDate: Dayjs): number;
    nextBusinessDay(): Dayjs;
    prevBusinessDay(): Dayjs;
    businessDaysInMonth(): number;
    businessWeeksInMonth(): number;
    lastBusinessDayOfMonth(): Dayjs;
  }

  interface DayjsStatic {
    getWorkingWeekdays(): number[];
    setWorkingWeekdays(workingWeekdays: number[]): void;
    getHolidays(): string[];
    setHolidays(holidays: string[]): void;
    getHolidayFormat(): string | undefined;
    setHolidayFormat(holidayFormat: string): void;
    getAdditionalWorkingDays(): string[];
    setAdditionalWorkingDays(additionalWorkingDays: string[]): void;
    getAdditionalWorkingDayFormat(): string | undefined;
    setAdditionalWorkingDayFormat(additionalWorkingDayFormat: string): void;
  }
}
