import React from 'react'
import { withStyles, createStyles } from "@material-ui/core/styles";
const { ipcRenderer } = window.require("electron");


function BottomBar(props){
    const classes = props.classes;

    return(
        <div className={classes.main}>
            <div onClick={() => {
                ipcRenderer.sendSync("createWindow",{url: "https://github.com/Afrenchrussian/cloud-link_2.0/releases", height: 900, width: 1600})
                ipcRenderer.sendSync("maximize")
            }}>
                Version: {ipcRenderer.sendSync("getVersion")}
            </div>
        </div>
    )
}

const styles = theme => createStyles({
    main:{
        height: "30px",
        width: "calc(70% - 20px)",
        backgroundColor: "#393939",
        position: "fixed",
        color:"#62C0E9",
        fontSize: "13px",
        textDecoration: "underline",
        fontWeight: "bold",
        paddingLeft: "20px !important",
        paddingTop: "2px !important",
        bottom: 0,
        '&:hover':{
            cursor: "pointer"
        }
    }
})




export default withStyles(styles)(BottomBar)