import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

export default (reducers) => {
    return createStore(
        combineReducers(reducers),
        compose(
            applyMiddleware(thunk, logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
        ),
    );
};
