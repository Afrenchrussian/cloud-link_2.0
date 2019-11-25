import React from 'react'
const google = window.require("googleapis").google;
const { ipcRenderer } = window.require("electron");

export function OAuth2() {
    return new Promise(resolve => {
        const getPass = ipcRenderer.sendSync("getPassword", {
            service: "google-key",
            account: "google"
        });
        const oAuth2Client = new google.auth.OAuth2();
        if (getPass == null) {
            const oAuth2ClientTokenHolder = ipcRenderer.sendSync("googleAuth");
            oAuth2Client.setCredentials(oAuth2ClientTokenHolder);
            const result = ipcRenderer.sendSync("setPassword", {
                service: "google-key",
                account: "google",
                password: JSON.stringify(oAuth2ClientTokenHolder)
            });
            if (result !== "success") {
                console.log(result);
            }
        } else {
            oAuth2Client.setCredentials(JSON.parse(getPass));
        }

        resolve(oAuth2Client);
    });
}

// export function driveTest(auth){
//     const drive = google.drive({ version: "v3", auth });
//     drive.files.list({
//         pageSize: 10,
//         fields: 'nextPageToken, files(id, name)',
//     }, (err, res) => {
//         if (err) return console.log('The API returned an error: ' + err);
//         const files = res.data.files;
//         if (files.length) {
//             console.log('Files:');
//             console.log(files)
//         } else {
//             console.log('No files found.');
//         }
//     });
//
// }
