const { existsSync, appendFile, mkdir } = require("fs");
const username = require("os").userInfo().username;
const osName = require("os-name");

module.exports.checkFileExists = (event, path) => {
    if (existsSync(path)) {
        event.returnValue = "exists";
    } else {
        event.returnValue = "not exists";
    }
};

module.exports.getUsername = event => {
    event.returnValue = username;
};

module.exports.getOs = event => {
    event.returnValue = osName().toUpperCase();
};

module.exports.createFile = (event, path, contents) => {
    appendFile(path, contents, function(err) {
        if (err) {
            event.return = "ERROR";
            throw err;
        } else {
            event.returnValue = "success";
        }
    });
};

module.exports.createFolder = (event,path) => {
    mkdir(path, function(err) {
        if (err) {
            event.return = "ERROR";
            throw err;
        } else {
            event.returnValue = "success";
        }
    });
};
