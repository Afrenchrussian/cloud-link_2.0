import React from "react";
import { Grid } from "@material-ui/core";
import SideBar from "./Components/SideBar";
import TabControl from "./Components/TabControl";
import {main as SystemStartUp} from './scripts/SystemStartUp'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        SystemStartUp()
    }
    render() {
        return (
            <div
                className="App"
                style={{ backgroundColor: "#4A4A4A", height: "100%" }}
            >
                <Grid container direction={"row"} style={{ height: "100%" }}>
                    <Grid item>
                        <SideBar />
                    </Grid>
                    <Grid style={{ width: "calc(100% - 133px)" }}>
                        <TabControl />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default HomePage;
