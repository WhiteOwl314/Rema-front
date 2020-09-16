import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import counter from './counter';
import posts from './posts';
import member from './member/member';

export function rootReducer(history) {
    combineReducers({
        router: connectRouter(history),
        counter,
        posts,
        member
    })
}

