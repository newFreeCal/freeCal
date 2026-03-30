export {};

declare global {
  interface Window {
    Meticulous?: {
      isRunningAsTest: boolean;
    };
  }
}
