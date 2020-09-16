import {createStore, applyMiddleware, combineReducers} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import member from './modules/member/member';
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";

//리듀서

export function configureStore(history) {
    return createStore(
        combineReducers({
            member,
            router: connectRouter(history)
        }),
        applyMiddleware(
            ReduxThunk.withExtraArgument({history: history}),
            routerMiddleware(history),
            logger
        )
    )
}