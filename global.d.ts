export {};

declare global {
  interface Window {
    appInfo: {
      name: string;
      version: string;
    };
  }
}
