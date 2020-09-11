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

//이메일 체크
const CHECK_EMAIL = 'CHECK_EMAIL';
const CHECK_EMAIL_SUCCESS = 'CHECK_EMAIL_SUCCESS';
const CHECK_EMAIL_ERROR = 'CHECK_EMAIL_ERROR';

//회원가입
const ADD_MEMBER = 'ADD_MEMBER';
const ADD_MEMBER_SUCCESS = 'ADD_MEMBER_SUCCESS';
const ADD_MEMBER_ERROR = 'ADD_MEMBER_ERROR';

//로그인
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';


export const CheckId =
    createPromoseThunk(CHECK_ID, memberAPI.checkId);
export const CheckEmail =
    createPromoseThunk(CHECK_EMAIL, memberAPI.checkEmail);
export const AddMember =
    createPromoseThunk(ADD_MEMBER, memberAPI.addMember);
export const Login =
    createPromoseThunk(LOGIN, memberAPI.login)

const initialState = {
    checkId: reducerUtils.initial(),
    checkEmail: reducerUtils.initial(),
    addMember: reducerUtils.initial(),
    login: reducerUtils.initial()
};

export default function member (state = initialState, action) {
    switch (action.type) {
        case CHECK_ID:
        case CHECK_ID_SUCCESS:
        case CHECK_ID_ERROR:
            return handleAsyncActions(CHECK_ID, 'checkId')
                (state,action);
        case CHECK_EMAIL:
        case CHECK_EMAIL_SUCCESS:
        case CHECK_EMAIL_ERROR:
            return handleAsyncActions(CHECK_EMAIL, 'checkEmail')
            (state,action);
        case ADD_MEMBER:
        case ADD_MEMBER_SUCCESS:
        case ADD_MEMBER_ERROR:
            return handleAsyncActions(ADD_MEMBER, 'addMember')
                (state,action);
        case LOGIN:
        case LOGIN_SUCCESS:
        case LOGIN_ERROR:
            return handleAsyncActions(LOGIN, 'login')
            (state,action);
        default:
            return state;
    }
}