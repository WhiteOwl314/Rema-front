import * as memberAPI from '../../api/member';
import {
    createPromoseThunk,
    reducerUtils,
    handleAsyncActions
} from "../../lib/asyncUtils";

//아이디 체크
const CHECK_ID = 'CHECK_ID';
const CHECK_ID_SUCCESS = 'CHECK_ID_SUCCESS';
const CHECK_ID_ERROR = 'CHECK_ID_ERROR';

//회원가입
const ADD_MEMBER = 'ADD_MEMBER';
const ADD_MEMBER_SUCCESS = 'ADD_MEMBER_SUCCESS';
const ADD_MEMBER_ERROR = 'ADD_MEMBER_ERROR';

export const CheckId =
    createPromoseThunk(CHECK_ID, memberAPI.checkId);

export const AddMember =
    createPromoseThunk(ADD_MEMBER, memberAPI.addMember);

const initialState = {
    checkId: reducerUtils.initial(),
    addMember: reducerUtils.initial()
};

export default function member (state = initialState, action) {
    switch (action.type) {
        case CHECK_ID:
        case CHECK_ID_SUCCESS:
        case CHECK_ID_ERROR:
            return handleAsyncActions(CHECK_ID, 'checkId')
                (state,action);
        case ADD_MEMBER:
        case ADD_MEMBER_SUCCESS:
        case ADD_MEMBER_ERROR:
            return handleAsyncActions(ADD_MEMBER, 'addMember')
                (state,action);
        default:
            return state;
    }
}