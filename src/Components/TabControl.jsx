import React from "react";
import { AppBar, Tabs, Tab, Typography, Box, Grid } from "@material-ui/core";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Computer } from "@material-ui/icons";
import GameList from "../pages/GameList";
import InfoBar from "./InfoBar";
import Login from "../pages/Login";
import { connect } from "react-redux";
import { login, logout } from "../Redux/Actions";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        "aria-controls": `nav-tabpanel-${index}`
    };
}

const StyledTabs = withStyles({
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        "& > div": {
            maxWidth: 40,
            width: "100%",
            backgroundColor: "transparent"
        }
    }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: "none",
        height: "58px",
        color: "#B2B2B2",
        width: "240px",
        minHeight: 0,
        fontSize: "18px",
        "&:focus": {
            backgroundColor: "#313131",
            color: "#62C0E9"
        },
        "&:hover": {
            color: "#62C0E9"
        },
        "& > span": {
            display: "inline-block"
        }
    }
}))(props => <Tab {...props} disableRipple={false} />);

const SelectedStyledTab = withStyles(theme => ({
    root: {
        textTransform: "none",
        height: "58px",
        width: "240px",
        minHeight: 0,
        fontSize: "18px",

        backgroundColor: "#313131",
        color: "#62C0E9",

        "& > span": {
            display: "inline-block"
        }
    }
}))(props => <Tab disableRipple={false} {...props} />);

const RenderTab = props => {
    return props.selected ? (
        <SelectedStyledTab {...props} />
    ) : (
        <StyledTab {...props} />
    );
};

function TabControl(props) {
    const classes = props.classes;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const LoggedIn = () => {
        return props.main.cl_loggedIn ? <GameList /> : <Login />;
    };

    return (
        <div>
            <AppBar position={"static"} className={classes.appBar}>
                <StyledTabs value={value} onChange={handleChange}>
                    <RenderTab
                        label={"My Computer"}
                        icon={<Computer className={classes.icon} />}
                        {...a11yProps(0)}
                    />
                    <RenderTab label={"Test Two"} {...a11yProps(1)} />
                </StyledTabs>
            </AppBar>
            <Grid container direction={"row"} className={classes.entireGrid}>
                <Grid
                    style={
                        props.main.cl_loggedIn
                            ? { width: "70%" }
                            : { width: "calc(100% - 266px)" }
                    }
                >
                    <TabPanel
                        value={value}
                        index={0}
                        className={classes.newTab}
                    >
                        {LoggedIn}
                    </TabPanel>
                    <TabPanel
                        value={value}
                        index={1}
                        className={classes.newTab}
                    >
                        <GameList />
                    </TabPanel>
                </Grid>

                <Grid
                    style={
                        props.main.cl_loggedIn
                            ? { width: "30%" }
                            : { width: "133px" }
                    }
                >
                    <InfoBar />
                </Grid>
            </Grid>
        </div>
    );
}

const styles = theme =>
    createStyles({
        appBar: {
            backgroundColor: '#3D3D3D',
            boxShadow: 'none',
            height: '58px'
        },
        root: {
            flexGrow: 1
        },
        padding: {
            padding: 0
        },
        demo1: {
            backgroundColor: theme.palette.background.paper
        },
        demo2: {
            backgroundColor: '#2e1534'
        },
        icon: {
            width: '36px',
            verticalAlign: 'middle',
            marginRight: '12px'
        },
        entireGrid: {
            height: 'calc(100% - 82px)',
            position: 'absolute'
        },
        newTab: {
            height: '100%',
            '& div': {
                padding: '0px'
            },
            '& .MuiBox-root': {
                height: '100%'
            }
        }
    });

const mapStateToProps = state => {
    return {
        main: state.main_reducer
    };
};

const mapDispatchToProps = {
    login,
    logout
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(TabControl));
