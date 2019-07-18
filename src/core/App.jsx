import React, { Component } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from "../routes/index.jsx";
import createStore from './createStore';
import reducers from '../redux/reducer';

const store = createStore(reducers);

export default class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </Provider>
        );
    }
}
