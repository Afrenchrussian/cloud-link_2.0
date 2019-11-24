const google = window.require("googleapis").google;
const { ipcRenderer } = window.require("electron");

export function OAuth2() {
    const oAuth2ClientTokenHolder = ipcRenderer.sendSync("googleAuth");
    const oAuth2Client = new google.auth.OAuth2();
    oAuth2Client.setCredentials(oAuth2ClientTokenHolder);
    return oAuth2Client;
}

export function driveTest(oAuth2Client){
    console.log(oAuth2Client);
    const drive = google.drive({ version: "v3", oAuth2Client });
    drive.files.create({
        requestBody: {
            name: 'Test',
            mimeType: 'text/plain'
        },
        media: {
            mimeType: 'text/plain',
            body: 'Hello World'
        }
    })
}
