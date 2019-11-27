import React from 'react'
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Computer } from "@material-ui/icons";

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

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: 'transparent',
        },
    },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        height: "58px",
        color: '#B2B2B2',
        width: "240px",
        minHeight: 0,
        fontSize: "18px",
        '&:focus': {
            backgroundColor: "#313131",
            color: "#62C0E9",
        },
        '& > span': {
            display: "inline-block",
        }
    },
}))(props => <Tab {...props} />);


function TabControl (props){
    const classes = props.classes;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position={"static"} className={classes.appBar}>
                <StyledTabs value={value} onChange={handleChange}>
                    <StyledTab label={"My Computer"} icon={<Computer className={classes.icon}/>}/>
                    <StyledTab label={"Test Two"}/>
                </StyledTabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                comp
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </div>
    )
}

const styles = theme => createStyles({
    appBar:{
        backgroundColor: "#3D3D3D",
        boxShadow: "none",
        height: "58px"
    },
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: 0,
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    },
    demo2: {
        backgroundColor: '#2e1534',
    },
    icon: {
        width: "36px",
        verticalAlign: "middle",
        marginRight: "12px"
    }
});

export default withStyles(styles)(TabControl);