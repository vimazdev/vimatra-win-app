import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
import {name, version} from '../../package.json';

interface AppInfo {
  name: string;
  version: string;
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("appInfo", {
      name: name,
      version: version,
    } as AppInfo);
  } catch (error) {
    console.error("Error en preload:", error);
  }
} else {
  (window as any).electron = electronAPI;
}
