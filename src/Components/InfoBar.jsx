import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import ImageSelector from "./ImageSelector";
import TextBox from "./TextBox";
import {createMuiTheme, Grid} from "@material-ui/core";

function InfoBar(props) {

    const classes = props.classes;
    return (
        <div className={classes.main}>
            <Grid container direction={"column"}>
                <Grid item style={{ height: "275px", width: "200px" }}>
                    <ImageSelector />
                </Grid>
                <form className={classes.root}>
                    <Grid item style={{marginTop: '75px'}}>
                        <TextBox
                            label={"Name: "}
                            height={"35px"}
                            width={"300px"}
                            backgroundColor={"#4D4D4D"}
                            color=""
                        />
                    </Grid>
                    <Grid item className={classes.textBox}>
                        <TextBox
                            disabled={true}
                            label={"Name: "}
                            height={"35px"}
                            width={"300px"}
                            backgroundColor={"#4D4D4D"}
                            color=""
                        />
                    </Grid>
                    <Grid item className={classes.textBox}>
                        <TextBox
                            disabled = {true}
                            label={"Name: "}
                            height={"35px"}
                            width={"300px"}
                            backgroundColor={"#4D4D4D"}
                            color=""
                        />
                    </Grid>
                    <Grid item className={classes.textBox}>
                        <TextBox
                            label={"Name: "}
                            height={"35px"}
                            width={"300px"}
                            backgroundColor={"#4D4D4D"}
                            color=""
                        />
                    </Grid>
                </form>
            </Grid>
        </div>
    );
}

const styles = theme =>
    createStyles({
        root: {
            "& label.Mui-focused": {
                color: "#B2B2B2"
            },

        },
        main: {
            height: "100%",
            backgroundColor: "#333333",
            paddingLeft: "30px",
            paddingTop: "55px"
        },
        textBox: {
            marginTop: "25px"
        }
    });

export default withStyles(styles)(InfoBar);
