import { BrowserWindow, ipcMain } from "electron";

export const windowsIpc = (mainWindow: BrowserWindow) => {
  ipcMain.on("window:minimize", () => mainWindow?.minimize());

  ipcMain.on("window:maximize", () => {
    if (mainWindow?.isMaximized()) mainWindow?.unmaximize();
    else mainWindow?.maximize();
  });

  ipcMain.on("window:close", () => mainWindow?.close());

  ipcMain.on("window:devtools", () => mainWindow?.webContents.openDevTools());
};
