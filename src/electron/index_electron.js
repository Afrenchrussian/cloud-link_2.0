const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
const core = require('./core_electron');

const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
        pathname: path.join(__dirname, "../build/index.html"),
        protocol: "file:",
        slashes: true
    });

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 470,
        height: 626,
        webPreferences: {
            //preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            webSecurity: false
        },
        autoHideMenuBar: true,
        center: true,
        frame: false,
        icon: path.join(__dirname, "/src/images/logoPlc.png")
    });

    mainWindow.loadURL(startUrl);
    mainWindow.webContents.openDevTools();
};

app.on("ready", createWindow);

ipcMain.on("createWindow", (event, args) => core.createWindow(args));
ipcMain.on("destroyFocusedWindow", () => BrowserWindow.getFocusedWindow().destroy());


