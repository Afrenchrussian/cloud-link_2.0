import store from "../Redux/store";
import {setAuthToken, setAuthURL, toggleAuthWindow} from "../Redux/Actions";

const google = window.require("googleapis").google;
const { ipcRenderer } = window.require("electron");

export function googleOAuth2() {
    return new Promise(resolve => {
        const getPass = ipcRenderer.sendSync("getPassword", {
            service: "google-key",
            account: "google"
        });
        //const oAuth2Client = new google.auth.OAuth2();
        if (getPass == null) {
            store.dispatch(
                setAuthURL(
                    ipcRenderer.sendSync(
                        "generateAuthURL",
                        store.getState().main_reducer.cl_AuthPort
                    )
                )
            );

            store.dispatch(toggleAuthWindow());


            // store.dispatch(
            //     setAuthToken(
                    ipcRenderer.send("generateAuthToken", {
                        url: store.getState().main_reducer.cl_AuthUrl,
                        port: store.getState().main_reducer.cl_AuthPort
                    });
                    ipcRenderer.on("auth", (event, args) => {
                        console.log(args)
                    });
            //     )
            // );

            console.log(store.getState());
            // const oAuth2ClientTokenHolder = ipcRenderer.sendSync("googleAuth");
            // oAuth2Client.setCredentials(oAuth2ClientTokenHolder);
            // const result = ipcRenderer.sendSync("setPassword", {
            //     service: "google-key",
            //     account: "google",
            //     password: JSON.stringify(oAuth2ClientTokenHolder)
            // });
            // if (result !== "success") {
            //     console.log(result);
            // }
        } //else {
        //     oAuth2Client.setCredentials(JSON.parse(getPass));
        // }
        // resolve(oAuth2Client);
    });
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
