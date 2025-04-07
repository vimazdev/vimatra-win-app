export const ipc = {
    minimize: () => {window.electron.ipcRenderer.send("window:minimize");},
    maximize: () => {window.electron.ipcRenderer.send("window:maximize");},
    close: () => {window.electron.ipcRenderer.send("window:close");},
};
  