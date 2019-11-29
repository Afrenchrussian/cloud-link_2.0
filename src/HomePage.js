import React from "react";
import { Grid } from "@material-ui/core";
import SideBar from "./Components/SideBar";
import TabControl from "./Components/TabControl";

function HomePage() {

    return (
        <div
            className="App"
            style={{ backgroundColor: "#4A4A4A", height: "100%" }}
        >
            <Grid container direction={"row"} style={{height: "100%"}}>
                <Grid item>
                    <SideBar />
                </Grid>
                <Grid style={{width: "calc(100% - 133px)"}}>
                    <TabControl/>
                </Grid>
            </Grid>
        </div>
    );
}

export default HomePage;
