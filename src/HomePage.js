import React from "react";
import logo from "./images/logo.svg";
import { OAuth2, driveTest } from "./scripts/OAuth2";
import GoogleButton from "react-google-button";
import { googleContext } from "./Context/GoogleContext";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import SideBar from "./Components/SideBar";
import TabControl from "./Components/TabControl";

function HomePage() {
    const google = React.useContext(googleContext);
    const history = useHistory();

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
                {/*<Grid item>*/}
                {/*    <img*/}
                {/*        src={logo}*/}
                {/*        style={{*/}
                {/*            height: "234px",*/}
                {/*            marginLeft: "50%",*/}
                {/*            transform: "translateX(-50%)",*/}
                {/*            marginTop: "60px"*/}
                {/*        }}*/}
                {/*        className="App-logo"*/}
                {/*        alt="logo"*/}
                {/*    />*/}
                {/*    <GoogleButton*/}
                {/*        style={{*/}
                {/*            marginLeft: "50%",*/}
                {/*            transform: "translateX(-50%)",*/}
                {/*            marginTop: "50px"*/}
                {/*        }}*/}
                {/*        type={"light"}*/}
                {/*        onClick={() => {*/}
                {/*            OAuth2()*/}
                {/*                .then(authObj => (google.cl_auth = authObj))*/}
                {/*                .then(() => history.push("/main"));*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Grid>*/}
            </Grid>
        </div>
    );
}

export default HomePage;
