import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
  interface Window {
    electron: ElectronAPI;
    appInfo: {
      name: string;
      version: string;
    };
  }
}
