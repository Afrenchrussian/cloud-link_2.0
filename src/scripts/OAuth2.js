import store from "../Redux/store";
import { setAuthToken, setAuthURL, toggleAuthWindow } from "../Redux/Actions";
import { OAuth2Client } from "google-auth-library";

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

        new Promise((resolve1, reject) => {
            console.log("Xx")
            ipcRenderer.send("generateAuthToken", {
                port: store.getState().main_reducer.cl_AuthPort
            });
            ipcRenderer.on("auth", (event, args) => {
                resolve(args);
            });
        }).then(token => {
            console.log("resolved")
            const oAuth2Client = new google.auth.OAuth2().setCredentials(JSON.parse(token));
            store.dispatch(setAuthToken(oAuth2Client));
            const result = ipcRenderer.sendSync("setPassword", {
                service: "google-key",
                account: "google",
                password: JSON.stringify(oAuth2Client)
            });
            if (result !== "success") {
                console.log(result);
            }
        });
    }).then(() => console.log(store.getState().main_reducer));
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
