import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Add, Remove, Settings, Edit } from "@material-ui/icons";

function SideBar(props) {
    const classes = props.classes;
    return (
        <div className={classes.main}>
            <Grid container direction={"column"}>
                <Grid item>
                    <IconButton className={classes.IconButtonStyle}>
                        <Add className={classes.Icon} />
                    </IconButton>
                </Grid>
                <Grid>
                    <IconButton className={classes.IconButtonStyle}>
                        <Edit className={classes.Icon} />
                    </IconButton>
                </Grid>
                <Grid>
                    <IconButton className={classes.IconButtonStyle}>
                        <Remove className={classes.Icon} />
                    </IconButton>
                </Grid>
                <Grid>
                    <IconButton className={classes.IconButtonStyle}>
                        <Settings className={classes.Icon} />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
}

const styles = theme =>
    createStyles({
        main: {
            width: "133px",
            height: "100%",
            backgroundColor: "#333333",
            paddingTop: "90px"
        },
        Icon: {
            margin: "auto",
            color: "#656262",
            height: "38px",
            width: "38px",

            "&:hover": {
                color: "#62C0E9",
                cursor: "pointer"
            }
        },
        IconButtonStyle:{
            marginLeft: "50%",
            transform: "translate(-50%)",
            padding: "0px",
            marginBottom: "70px",
        }
    });

export default withStyles(styles)(SideBar);
