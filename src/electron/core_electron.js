const { app, BrowserWindow } = require("electron");

module.exports.createWindow =  function (url) {
    new BrowserWindow({
        height: 600,
        width: 600,
        autoHideMenuBar: true,
        center: true,
        frame: false
    }).loadURL(url);
};