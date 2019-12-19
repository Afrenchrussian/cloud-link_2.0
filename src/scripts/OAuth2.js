import store from "../Redux/store";
import { setAuthToken, setAuthURL, toggleAuthWindow } from "../Redux/Actions";
const google = window.require("googleapis").google;
const { ipcRenderer } = window.require("electron");

export function newGoogleOAuth2() {
    return new Promise(resolve => {
        //const oAuth2Client = new google.auth.OAuth2();
        store.dispatch(
            setAuthURL(
                ipcRenderer.sendSync(
                    "generateAuthURL",
                    store.getState().main_reducer.cl_AuthPort
                )
            )
        );
        store.dispatch(toggleAuthWindow());
        resolve();
    }).then(() =>{
        new Promise((resolve1, reject) => {
            ipcRenderer.send("generateAuthToken", {
                port: store.getState().main_reducer.cl_AuthPort
            });
            ipcRenderer.on("auth", (event, args) => {
                resolve1(args);
            });
        }).then(oAuthObject => {
            console.log(oAuthObject);
            store.dispatch(setAuthToken(oAuthObject));
            const result = ipcRenderer.sendSync("setPassword", {
                service: "google-key",
                account: "google",
                password: JSON.stringify(oAuthObject)
            });
            if (result === "success") {
                console.log("Password Saved");
            } else {
                alert("Error: Password saving issue")
            }
        });
    })
}

export function loadPastAuth() {
    return new Promise(resolve => {
        const getPass = ipcRenderer.sendSync("getPassword", {
            service: "google-key",
            account: "google"
        });
        const oAuth2Client = new google.auth.OAuth2();
        if (getPass != null) {
            oAuth2Client.setCredentials(JSON.parse(getPass));
            resolve(oAuth2Client);
        } else {
            resolve(null);
        }
    });
}
