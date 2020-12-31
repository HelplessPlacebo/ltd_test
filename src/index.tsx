import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import store from "./data/redux-store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <HashRouter  basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
                <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
