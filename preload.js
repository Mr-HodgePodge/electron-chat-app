const { ipcRenderer } = require('electron');

window.sendNotification = (message) => {
  console.log('hello');
  ipcRenderer.send('notify', message);
}