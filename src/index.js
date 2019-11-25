import HomePage from "./HomePage";
import Main from './pages/Main'
import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Switch, Route } from "react-router-dom";
import TitleBar from "react-electron-titlebar";

const MyContext = React.createContext({});

ReactDOM.render(

        <div style={{ height: "100%" }}>
            <TitleBar />
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/main" component={Main} />
                </Switch>
            </HashRouter>
        </div>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
