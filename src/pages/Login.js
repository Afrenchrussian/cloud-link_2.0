import React from 'react'
import { withStyles, createStyles } from "@material-ui/core/styles";
import BottomBar from "../Components/BottomBar";

function Login(props){
    const classes = props.classes;
    return(
        <div className={classes.main}>

            <BottomBar/>
        </div>
    )
}

const styles = theme => createStyles({

});

export default withStyles(styles)(GameList)