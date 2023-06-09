const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html').then(r => {});
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

app.whenReady().then(createWindow);

ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notification', body: message}).show();
});