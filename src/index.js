import HomePage from "./HomePage";
import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Switch, Route } from "react-router-dom";
import TitleBar from "react-electron-titlebar";
import {Provider} from "react-redux";
import store from './Redux/store'

ReactDOM.render(
    <Provider store={store}>
        <div style={{ height: "100%" }}>
            <TitleBar />
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </HashRouter>
        </div>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
