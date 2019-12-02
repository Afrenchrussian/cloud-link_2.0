import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import BottomBar from "../Components/BottomBar";
import logo from "../images/logo.svg";
import { googleOAuth2, loadPastAuth } from "../scripts/OAuth2";
import GoogleButton from "react-google-button";
import { login, setAuthPort, setAuthToken, setAuthURL } from "../Redux/Actions";
import { connect } from "react-redux";
const { ipcRenderer } = window.require("electron");

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.loadAuth = this.loadAuth.bind(this);
        this.setPort = this.setPort.bind(this);
        this.loadAuth();
        this.setPort()
    }

    loadAuth() {
        loadPastAuth().then(response => {
            if (response != null) {
                this.props.setAuthToken(response);
                this.props.login();
            }
        });
    }

    setPort() {
        this.props.setAuthPort(ipcRenderer.sendSync("generateAuthPort"));
    }

    render() {
        const classes = this.props.classes;

        console.log(this.props.main)

        const state = this.props.main.cl_AuthWindow ? (
            <webview className={classes.top} src={this.props.main.cl_AuthUrl} />
        ) : (
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
                        googleOAuth2();
                        //.then(token => props.setAuthToken(token))
                        //.then(props.login());
                    }}
                />
            </div>
        );

        return (
            <div className={classes.main}>
                {state}
                <BottomBar />
            </div>
        );
    }
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
    return {
        main: state.main_reducer
    };
};

const mapDispatchToProps = {
    setAuthToken,
    login,
    setAuthPort,
    setAuthURL
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Login));
