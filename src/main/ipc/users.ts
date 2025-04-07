import { ipcMain } from "electron";

export const users = async () => {
    ipcMain.handle('ping', async () => {
        console.log('pong')
        return 'Pong desde el proceso principal'; // Puedes retornar cualquier dato
    });
}