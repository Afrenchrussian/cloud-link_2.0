export default function(username) {
    return {
        WIN: {
            files: {
                path: `C:\\Users\\${username}\\AppData\\Roaming\\cloud-link\\Files`,
                type: "folder"
            },
            localArchives: {
                path: `C:\\Users\\${username}\\AppData\\Roaming\\cloud-link\\files\\localArchives`,
                type: 'folder'
            },
            driveArchives: {
                path: `C:\\Users\\${username}\\AppData\\Roaming\\cloud-link\\files\\driveArchives`,
                type: 'folder'
            },
            configPath: {
                path: `C:\\Users\\${username}\\AppData\\Roaming\\cloud-link\\config.json`,
                type: 'file'
            },
            image: {
                path: `C:\\Users\\${username}\\AppData\\Roaming\\cloud-link\\Images`,
                type: 'folder'
            }
        },
        MAC: {
            files: {
                path: `/Users/${username}/Library/Application Support/Cloud-link/files/`,
                type: 'folder'
            },
            driveConfig: {
                path: `/Users/${username}/Library/Application Support/Cloud-link/files/DefaultDriveConfig.json`,
                type: 'file'
            },
            gameDir: {
                path: `/Users/${username}/Library/Application Support/Cloud-link/files/GAMENAME`,
                type: 'folder'
            },
            configPath: {
                path: `/Users/${username}/Library/Application Support/Cloud-link/config.json`,
                type: 'file'
            },
            tempLoc: {
                path: `/Users/${username}/Library/Application Support/Cloud-link/files/temp`,
                type: 'folder'
            },
            image: {
                path: `/Users/${username}/Library/Application Support/Cloud-link/Images`,
                type: 'folder'
            }
        }
    };
}
