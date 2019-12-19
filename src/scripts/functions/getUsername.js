const { ipcRenderer } = window.require("electron");

export default function getUsername(path){
    return ipcRenderer.sendSync("getUsername");
}