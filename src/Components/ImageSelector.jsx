import React from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { CameraAlt } from "@material-ui/icons";
import { Fab, Tooltip, IconButton } from "@material-ui/core";
import getAspectRation from '../scripts/functions/GetAspectRation'
const { ipcRenderer } = window.require("electron");

class ImageSelector extends React.Component {
    constructor(props) {
        super(props);
        const classes = this.props.classes;
        this.state = {
            imageComponent: <div className={classes.imageBox}>No Image Set</div>
        }
    }

    render() {
        const classes = this.props.classes;
        const component =
            this.props.info.cl_info_image === "" ? (
                <div>
                    {this.state.imageComponent}
                    <Tooltip title={"Select Image"}>
                        <Fab
                            aria-label={"Select Image"}
                            className={classes.iconButton}
                            onClick={() => {
                                console.log(this.props.main.cl_system_info);
                                ipcRenderer.send(
                                    "getImage",
                                    this.props.main.cl_system_info.cl_paths.image
                                        .path
                                );
                                ipcRenderer.on("returnImage", (event, args) => {
                                    const aspectRation = getAspectRation(args.height,args.width)
                                    if (aspectRation[0] !== 11 || aspectRation[1] !== 8){
                                        this.setState({
                                            imageComponent: <div className={classes.imageBox}>Invalid Image Size [11x8]</div>
                                        });
                                    } else {
                                        this.setState({
                                            imageComponent: <div className={classes.imageBox} id={"modify-image"}></div>
                                        });
                                        const output = '<img id="image" src="data:image/png;base64,' + args.file + '" />';
                                        if (document.getElementById('image') !== null){
                                            document.getElementById('image').remove();
                                        }
                                        const target = document.getElementById("modify-image");
                                        target.insertAdjacentHTML("beforeend", output);
                                    }
                                });
                            }}
                        >
                            <CameraAlt />
                        </Fab>
                    </Tooltip>
                </div>
            ) : (
                <div>xy</div>
            );
        return <div>{component}</div>;
    }
}

const styles = theme =>
    createStyles({
        main: {
            height: "100%",
            backgroundColor: "#333333"
        },
        imageBox: {
            height: "275px",
            width: "200px",
            backgroundColor: "#CCCCCC",
            position: "absolute",
            zIndex: 100,
            fontFamily: "Arial",
            textAlign: "center",
            lineHeight: "275px"
        },
        iconButton: {
            position: "absolute",
            marginLeft: "174px",
            paddingTop: "7px",
            display: "block",
            marginTop: "30px",
            zIndex: 1000
        }
    });

const mapStateToProps = state => {
    return {
        main: state.main_reducer,
        info: state.infoTab_reducer
    };
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ImageSelector));
