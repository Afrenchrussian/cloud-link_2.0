const { BrowserWindow, dialog } = require("electron");
const { copyFile, readFileSync } = require("fs");
const path = require("path");
const sizeOf = require("image-size");

module.exports.createWindow = function({ url, height, width }) {
    new BrowserWindow({
        height: 600,
        width: 600,
        autoHideMenuBar: true,
        center: true
    }).loadURL(url);
};

module.exports.error = function(message) {
    new BrowserWindow({
        height: 300,
        width: 500,
        autoHideMenuBar: true,
        center: true,
        backgroundColor: "#2e2c29"
    });
};

module.exports.getImage = function(event, imageLocation) {
    dialog
        .showOpenDialog(null, {
            title: "Select Image",
            filters: [{ name: "images", extensions: ["jpg", "png", "gif"] }],
            properties: ["openFile"]
        })
        .then(file => {
            copyFile(
                file.filePaths[0],
                path.join(imageLocation, path.basename(file.filePaths[0])),
                function(err) {
                    if (err) throw err
                }
            );
            const {width, height} = sizeOf(file.filePaths[0]);
            event.sender.send("returnImage", {
                file: readFileSync(file.filePaths[0]).toString("base64"),
                location: path.join(imageLocation, path.basename(file.filePaths[0])),
                width: width,
                height: height
            })
        });
};
