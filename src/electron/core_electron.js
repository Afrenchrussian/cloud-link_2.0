const { app, BrowserWindow } = require("electron");

module.exports.createWindow =  function ({url,height,width}) {
    new BrowserWindow({
        height: 600,
        width: 600,
        autoHideMenuBar: true,
        center: true,
    }).loadURL(url);
};

module.exports.error = function (message) {
    new BrowserWindow( {
            height: 300,
            width: 500,
            autoHideMenuBar: true,
            center: true,
            backgroundColor: '#2e2c29'
        }
    )
}