import React from 'react';
import { withStyles, createStyles } from "@material-ui/core/styles";

function InfoBar (props){
    const classes = props.classes;
    return(
        <div className={classes.main}>

        </div>
    )
}

const styles = theme => createStyles({
    main:{
        height: "100%",
        backgroundColor: "#333333"
    }
});

export default withStyles(styles)(InfoBar)