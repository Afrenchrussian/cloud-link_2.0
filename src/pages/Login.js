import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import BottomBar from "../Components/BottomBar";
import logo from "../images/logo.svg";
import { googleOAuth2, loadPastAuth } from "../scripts/OAuth2";
import GoogleButton from "react-google-button";
import main_reducer from "../Redux/Reducers/main_reducer";
import { login, setAuthToken } from "../Redux/Actions";
import { connect } from "react-redux";

function Login(props) {
    const classes = props.classes;

    loadPastAuth().then(response => {
        if (response != null) {
            props.setAuthToken(response);
            props.login();
        }
    });

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
                        googleOAuth2()
                            .then(token => props.setAuthToken(token))
                            .then(props.login());
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

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = {
    setAuthToken,
    login
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Login));
