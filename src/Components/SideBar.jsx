import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Add, Remove, Settings, Edit } from "@material-ui/icons";
import {connect} from "react-redux";
import {setMaxGridHeight} from "../Redux/Actions";


class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.main = React.createRef()
    }

    componentDidMount(){
        this.props.setMaxGridHeight(this.main.current.offsetHeight);
        console.log(this.main.current.offsetHeight)
    }

    render() {
        const classes = this.props.classes;
        return (
            <div ref={this.main} className={classes.main}>
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
        IconButtonStyle: {
            marginLeft: "50%",
            transform: "translate(-50%)",
            padding: "0px",
            marginBottom: "70px"
        }
    });

const mapStateToProps = state => {
    return {
        main: state.main_reducer
    };
};

const mapDispatchToProps = {
    setMaxGridHeight
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SideBar));
