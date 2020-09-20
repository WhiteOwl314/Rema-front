import {createStore, applyMiddleware, combineReducers} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import member from './modules/member/member';
import mypage from './modules/member/mypage';
import folder from './modules/notes/folder';
import folderOrder from './modules/notes/folderOrder';
import note from './modules/notes/note';
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

//리듀서

export function configureStore(history) {
    return createStore(
        combineReducers({
            member,
            mypage,
            folder,
            note,
            folderOrder,
            router: connectRouter(history)
        }),
        composeWithDevTools(
            applyMiddleware(
                ReduxThunk.withExtraArgument({history: history}),
                routerMiddleware(history),
                logger
            )
        )
    )
}