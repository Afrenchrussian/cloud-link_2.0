const { ipcRenderer } = window.require("electron");

export default function checkFileExistence(path){
    const value = ipcRenderer.sendSync("checkLocationExists", path);
    return (value === "exists")? "exists" : "not_exists";
}