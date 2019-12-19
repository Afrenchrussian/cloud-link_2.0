import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import BottomBar from "../Components/BottomBar";
import "../css/GameList.css";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";

const columns = [
    { id: "name", label: "Name", midWidth: 170 },
    { id: "path", label: "Path", midWidth: 170 },
    { id: "date_added", label: "Date Added", midWidth: 170 },
    { id: "last_modified", label: "Last Modified", midWidth: 170 }
];

function createData(name, path, date_added, last_modified) {
    return { name, path, date_added, last_modified };
}

const rows = [
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "prey",
        "C:\\Users\\kieran lewin\\Saved Games\\Arkane Studios\\Prey\\SaveGames",
        "16/02/2019 15:44:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    ),
    createData(
        "startup company",
        "C:\\Users\\kieran lewin\\Saved Games\\Startup Company",
        "16/02/2019 15:45:00",
        "17/12/2019 13:23:00"
    )
];

class GameList extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            pageSize: rows.length
        };
        this.body = React.createRef();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const pageSize = this.props.main.cl_gridMaxHeight;
        const pageLimit = Math.ceil((pageSize - 105) / 25);
        this.setState({ pageSize: pageLimit });
        const requiredPadding = pageLimit - rows.length;
        if (requiredPadding > 0) {
            for (let i = 0; i <= requiredPadding; i++) {
                rows.push(createData("", "", "", ""));
            }
        }
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.main}>
                <div ref={this.body} className={classes.mainBody}>
                    <Paper className={classes.root}>
                        <TableContainer
                            style={{
                                maxHeight: this.props.main.cl_gridMaxHeight - 210
                            }}
                        >
                            <Table stickyHeader>
                                <TableHead >
                                    <TableRow className={classes.head}>
                                        {columns.map(column => (
                                            <TableCell
                                                key={column.id}
                                                style={{
                                                    minWidth: column.minWidth,
                                                    padding: 0,
                                                    backgroundColor: 'inherit',
                                                    color: "inherit",
                                                    textAlign: 'center',
                                                    fontFamily: 'Arial'
                                                }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => {
                                        const isEven = index % 2 === 0;
                                        const classname =
                                            isEven === true ? "even" : "odd";
                                        return (
                                            <TableRow className={classes[classname]}>
                                                <TableCell>
                                                    {row.name}
                                                </TableCell>
                                                <TableCell>
                                                    {row.path}
                                                </TableCell>
                                                <TableCell>
                                                    {row.date_added}
                                                </TableCell>
                                                <TableCell>
                                                    {row.last_modified}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
                <BottomBar />
            </div>
        );
    }
}

const styles = theme =>
    createStyles({
        '@global': {
            '*::-webkit-scrollbar': {
                width: '16px',
                background: '#515151',
            },
            '*::-webkit-scrollbar-track': {
                background: '#515151',
                border: '4px solid transparent',
                backgroundClip: 'content-box'
            },
            '*::-webkit-scrollbar-thumb': {
                background: '#B9B9B9',
                border: '4px solid #515151',
                borderRadius: '25px',
            }
        },
        main: {
            height: "100%",
            padding: "0px"
        },
        mainBody: {
            height: "calc(100% - 30px)",

        },
        head:{
            height: "30px",
            backgroundColor: "#393737",
            fontFamily: "Arial",
            color: "#B2B2B2",
            fontSize: "18px",
            textAlign: "center",
            padding: 0,
            borderBottom: "1px solid white"
        },
        even: {
            backgroundColor: "#3D3D3D",
            color: "#B2B2B2",
            "& td": {
                padding: 0,
                height: "25px",
                textAlign: "center",
                color: "inherit",
                fontFamily: "Arial",
                textTransform: "capitalize"
            },
            "&:hover":{
                color: '#62C0E9',
                backgroundColor: "#333333",
                cursor: 'pointer'
            }
        },
        odd: {
            backgroundColor: "#4B4B4B",
            color: "#B2B2B2",
            "& td": {
                padding: 0,
                height: "25px",
                textAlign: "center",
                color: "inherit",
                fontFamily: "Arial",
                textTransform: "capitalize"
            },
            "&:hover":{
                color: '#62C0E9',
                backgroundColor: "#333333",
                cursor: 'pointer'
            }
        },

    });
const mapStateToProps = state => {
    return {
        main: state.main_reducer
    };
};

const mapDispatchToProps = {};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(GameList));
