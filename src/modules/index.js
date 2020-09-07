import {combineReducers} from "redux";
import counter from './counter';
import posts from './posts';
import member from './member/member';

const  rootReducer = combineReducers({
    counter,
    posts,
    member
});

export default rootReducer;