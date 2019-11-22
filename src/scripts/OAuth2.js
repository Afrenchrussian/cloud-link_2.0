import { OAuth2Client } from 'google-auth-library';
import { info } from '../config/googleCredentials';
import url from 'url';
import destroyer from 'server-destroy';

const http = window.require("http");
const fp = window.require("find-free-port");
const { ipcRenderer } = window.require("electron");

export default function OAuth2 () {
    fp(4000,60000).then(port => {
        const oAuth2Client = new OAuth2Client(
            info.client_id,
            info.client_secret,
            info.redirect_uris.replace("PORT", port)
        );

        const server = http.createServer(async (req, res) => {
            ipcRenderer.sendSync("destroyFocusedWindow");
            console.log(
                await oAuth2Client.getToken(new url.URL(
                    req.url,
                    info.redirect_uris.replace("PORT", port[0])
                     ).get("code").tokens
                )
            );
            res.end();
            server.destroy();
        }).listen( port[0], () => {
            ipcRenderer.sendSync("createWindow", oAuth2Client.generateAuthUrl({
                    access_type: "offline",
                    scope: [
                        "https://www.googleapis.com/auth/userinfo.profile",
                        "https://www.googleapis.com/auth/drive.readonly",
                        "https://www.googleapis.com/auth/drive"
                    ]
                })
            )
        }).on("error", err => console.log(err));
        destroyer(server)
    })
}