import React from "react";
import {
    createStyles,
    withStyles,
    TextField,
    createMuiTheme
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

function TextBox(props) {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#B2B2B2'
            }
        }
    });

    const comp = (props.disabled)? (
        <TextField
            disabled
            id="filled-password-input"
            label={props.label}
            variant="filled"
            color="primary"
            style={{
                width: props.width,
                backgroundColor: props.backgroundColor
            }}
        />
    ):(
        <TextField
            id="filled-password-input"
            label={props.label}
            variant="filled"
            color="primary"
            style={{
                width: props.width,
                backgroundColor: props.backgroundColor
            }}
        />
    )

    return (
        <div>
            <ThemeProvider theme={theme}>
                {comp}
            </ThemeProvider>
        </div>
    );
}

const styles = theme =>
    createStyles({
        main: {
            height: "100%",
            backgroundColor: "#333333",
            paddingLeft: "30px",
            paddingTop: "55px"
        }
    });

export default withStyles(styles)(TextBox);
