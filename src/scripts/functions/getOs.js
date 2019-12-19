const { ipcRenderer } = window.require("electron");

export default function getOs() {
    const os = ipcRenderer.sendSync("getOs");
    if (os.includes("MACOS")) {
        return "MAC";
    } else if (os.includes("WIN")) {
        return "WIN";
    }
}
