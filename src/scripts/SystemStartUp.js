import Locations from "../config/Locations";
import checkFileExistence from "./functions/FileExists";
import getUsername from "./functions/getUsername";
import getOs from "./functions/getOs";
import store from "../Redux/store";
import {setSysInfo} from'../Redux/Actions'
const { ipcRenderer } = window.require('electron');

export function main () {
    const os = getOs();
    const username = getUsername();
    const locations = Locations(username)[os];

    Object.keys(
        locations
    ).forEach(
        (index) => {
            if (checkFileExistence(locations[index].path) !== "exists")  {
                if (locations[index].type === 'folder'){
                    ipcRenderer.sendSync("createFolder", locations[index].path)
                } else if (locations[index].type === 'file') {
                    ipcRenderer.sendSync("createFile", locations[index].path)
                } else {
                    alert(`Error: on loop ${index}`)
                }
            }
        }
    )

    store.dispatch(setSysInfo({
        cl_os: os,
        cl_username: username,
        cl_paths: locations
    }))
}