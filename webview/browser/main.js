const {
  app,
  BrowserWindow
} = require('electron');

let mainWindow;

app.on('window-all-closed', function () {
  app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      allowEval: false // This is the key!
    }
  });
  mainWindow.loadURL('file://' + __dirname + '/browser.html');
  mainWindow.openDevTools();
});