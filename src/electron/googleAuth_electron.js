const url = require("url");
const http = require("http");
const fp = require("find-free-port");
const destroyer = require("server-destroy");
const { BrowserWindow } = require("electron");
const info = require("../config/googleCredentials").info;
const google = require("googleapis").google;

module.exports.choosePort = function(event) {
    fp(4000, 60000).then(freePort => {
        event.returnValue = freePort[0];
    });
};

module.exports.googleGenUrl = function(event, port) {
    const oAuth2Client = new google.auth.OAuth2(
        info.client_id,
        info.client_secret,
        info.redirect_uris.replace("PORT", port)
    );
    event.returnValue = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/drive.readonly",
            "https://www.googleapis.com/auth/drive",
            "https://www.googleapis.com/auth/drive.metadata.readonly"
        ]
    });
};

module.exports.googleAuth = function(event ,  port) {
    new Promise((resolve, reject) => {
        const oAuth2Client = new google.auth.OAuth2(
            info.client_id,
            info.client_secret,
            info.redirect_uris.replace("PORT", port)
        );
        const server = http
            .createServer(async (req, res) => {
                const qs = new url.URL(
                    req.url,
                    info.redirect_uris.replace("PORT", port)
                ).searchParams;
                const { tokens } = await oAuth2Client.getToken(qs.get("code"));
                res.end();
                server.destroy();
                oAuth2Client.setCredentials(tokens);
                resolve(oAuth2Client)
            })
            .listen(port)
            .on("error", err => console.log(err));
        destroyer(server);
    }).then(token => event.sender.send("auth", token))
};
