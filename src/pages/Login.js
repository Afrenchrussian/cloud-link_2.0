import React, {useContext} from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import BottomBar from "../Components/BottomBar";
import logo from "../images/logo.svg";
import  oAuth2  from "../scripts/OAuth2";
import { useHistory } from "react-router-dom";
import  {googleContext}  from "../Context/GoogleContext";
import GoogleButton from "react-google-button";

function Login(props) {
    const context = useContext(googleContext);
    const history = useHistory();
    const classes = props.classes;
    return (
        <div className={classes.main}>
            <div className={classes.top}>
                <img
                    src={logo}
                    style={{
                        height: "234px",
                        marginLeft: "50%",
                        transform: "translateX(-50%)",
                        marginTop: "100px"
                    }}
                    className="App-logo"
                    alt="logo"
                />
                <GoogleButton
                    style={{
                        marginLeft: "50%",
                        transform: "translateX(-50%)",
                        marginTop: "50px"
                    }}
                    type={"light"}
                    onClick={() => {
                        oAuth2()
                            .then(authObj => context.cl_auth = authObj)
                            .then(()=> context.cl_loggedIn = true)
                            .then(() => history.push("/main"));
                    }}
                />
            </div>

            <BottomBar />
        </div>
    );
}

const styles = theme =>
    createStyles({
        main: {
            height: "100%"
        },
        top: {
            height: "calc(100% - 24px)"
        }
    });

export default withStyles(styles)(Login);
