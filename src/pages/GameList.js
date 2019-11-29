import React from 'react'
import { withStyles, createStyles } from "@material-ui/core/styles";
import BottomBar from "../Components/BottomBar";

function GameList(props){
    const classes = props.classes;
    return(
        <div className={classes.main}>
            <div className={classes.mainBody}>x</div>
            <BottomBar/>
        </div>
    )
}

const styles = theme => createStyles({
    main:{
        height: "100%",
        padding: "0px"
    },
    mainBody:{
        height: "calc(100% - 30px)"
    }
});

export default withStyles(styles)(GameList)