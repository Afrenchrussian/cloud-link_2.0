const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
const core = require("./core_electron");
const google = require("./googleAuth_electron.js");
const { setPassword, getPassword } = require("./keytar_electron");
const version = require('../../package.json').version;

const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
        pathname: path.join(__dirname, "../build/index.html"),
        protocol: "file:",
        slashes: true
    });

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1820,
        height: 980,
        webPreferences: {
            //preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            webSecurity: false,
            webviewTag: true
        },
        autoHideMenuBar: true,
        center: true,
        frame: false,
        icon: path.join(__dirname, "/src/images/logoPlc.png"),
    });

    mainWindow.loadURL(startUrl);
    mainWindow.webContents.openDevTools();
    mainWindow.maximize();
};

app.on("ready", createWindow);

ipcMain.on("createWindow", (event, args) => event.returnValue = core.createWindow(args));
ipcMain.on("destroyFocusedWindow", () => BrowserWindow.getFocusedWindow().destroy());
ipcMain.on("setPassword", (event, { service, account, password }) => { setPassword(service, account, password, event); });
ipcMain.on("getPassword", (event, { service, account }) => { getPassword(service, account, event); });
ipcMain.on("getVersion", event => event.returnValue = version);
ipcMain.on("maximize", event =>   { BrowserWindow.getFocusedWindow().maximize(); event.returnValue="success"});
ipcMain.on("generateAuthPort", event => { google.choosePort(event); console.log("xx") });
ipcMain.on("generateAuthURL", (event,port) => { google.googleGenUrl(event,port) });
ipcMain.on("generateAuthToken", (event,{port}) =>{ google.googleAuth(event,port); console.log(port) });