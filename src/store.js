import {createStore, applyMiddleware, combineReducers} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import member from './modules/member/member';
import mypage from './modules/member/mypage';
import notesList from './modules/notes/notesList';
import note from './modules/notes/note';
import review from './modules/review/review';
import reviewDetail from './modules/review/reviewDetail';
import popUp from './modules/popUp';
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

//리듀서

export function configureStore(history) {
    return createStore(
        combineReducers({
            member,
            mypage,
            notesList,
            note,
            review,
            reviewDetail,
            popUp,
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