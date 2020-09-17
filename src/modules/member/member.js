import * as memberAPI from '../../api/member';
import * as JwtAPI from '../../api/AuthenticationService';
import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions, createPromiseThunkWithFunction, createPromiseThunkForJwt, createPromiseThunkWithPromise
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

//로그인 초기화
const CLEAR_LOGIN = 'CLEAR_LOGIN';

//아이디 찾기
const FIND_ID = 'FIND_ID';
const FIND_ID_SUCCESS = 'FIND_ID_SUCCESS';
const FIND_ID_ERROR = 'FIND_ID_ERROR';

//아이디찾기 초기화
const CLEAR_FIND_ID = 'CLEAR_FIND_ID';

//비밀번호 찾기
const FIND_PW = 'FIND_PW';
const FIND_PW_SUCCESS = 'FIND_PW_SUCCESS';
const FIND_PW_ERROR = 'FIND_PW_ERROR';

//비밀번호찾기 초기화
const CLEAR_FIND_PW = 'CLEAR_FIND_PW';

//비밀번호 변경
const UPDATE_PW = 'UPDATE_PW';
const UPDATE_PW_SUCCESS = 'UPDATE_PW_SUCCESS';
const UPDATE_PW_ERROR = 'UPDATE_PW_ERROR';

//로그인 체크
const LOGIN_CHECK = 'LOGIN_CHECK';
const LOGIN_CHECK_SUCCESS = 'LOGIN_CHECK_SUCCESS';
const LOGIN_CHECK_ERROR = 'LOGIN_CHECK_ERROR';

//회원정보 가져오기
const GET_MEMBER = 'GET_MEMBER';
const GET_MEMBER_SUCCESS = 'GET_MEMBER_SUCCESS';
const GET_MEMBER_ERROR = 'GET_MEMBER_ERROR';

export const CheckId =
    createPromiseThunkWithPromise(CHECK_ID, memberAPI.checkId);
export const CheckEmail =
    createPromiseThunkWithPromise(CHECK_EMAIL, memberAPI.checkEmail);
export const AddMember =
    createPromiseThunk(ADD_MEMBER, memberAPI.addMember);
export const Login =
    createPromiseThunkForJwt(LOGIN, JwtAPI.executeJwtAuthenticationService, JwtAPI.registerSuccessfulLoginForJwt);
export const clearLogin = () => ({type: CLEAR_LOGIN});
export const FindId =
    createPromiseThunkWithFunction(FIND_ID, memberAPI.findId, memberAPI.findIdAlertFunction);
export const ClearFindId = () => ({type: CLEAR_FIND_ID});
export const FindPw =
    createPromiseThunkWithFunction(FIND_PW, memberAPI.findPw, memberAPI.findPwAlertFunction);
export const ClearFindPw = () => ({type: CLEAR_FIND_PW});
export const UpdatePw =
    createPromiseThunkWithFunction(UPDATE_PW, memberAPI.updatePw, memberAPI.updatePwAlertFunction);
export const LoginCheck =
    createPromiseThunkWithPromise(LOGIN_CHECK, JwtAPI.loginCheck);
export const GetMember =
    createPromiseThunkWithPromise(GET_MEMBER, memberAPI.getMember);

const initialState = {
    checkId: reducerUtils.initial(),
    checkEmail: reducerUtils.initial(),
    addMember: reducerUtils.initial(),
    login: reducerUtils.initial(),
    findId: reducerUtils.initial(),
    findPw: reducerUtils.initial(),
    updatePw: reducerUtils.initial(),
    loginCheck: reducerUtils.initial(),
    getMember: reducerUtils.initial()
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
        case CLEAR_LOGIN:
            return {
                ...state,
                login: reducerUtils.initial()
            };
        case FIND_ID:
        case FIND_ID_SUCCESS:
        case FIND_ID_ERROR:
            return handleAsyncActions(FIND_ID, 'findId')
            (state,action);
        case CLEAR_FIND_ID:
            return {
                ...state,
                findId: reducerUtils.initial()
            };
        case FIND_PW:
        case FIND_PW_SUCCESS:
        case FIND_PW_ERROR:
            return handleAsyncActions(FIND_PW, 'findPw')
            (state,action);
        case CLEAR_FIND_PW:
            return {
                ...state,
                findPw: reducerUtils.initial()
            };
        case UPDATE_PW:
        case UPDATE_PW_SUCCESS:
        case UPDATE_PW_ERROR:
            return handleAsyncActions(UPDATE_PW, 'updatePw')
            (state,action);
        case LOGIN_CHECK:
        case LOGIN_CHECK_SUCCESS:
        case LOGIN_CHECK_ERROR:
            return handleAsyncActions(LOGIN_CHECK, 'loginCheck')
            (state,action);
        case GET_MEMBER:
        case GET_MEMBER_SUCCESS:
        case GET_MEMBER_ERROR:
            return handleAsyncActions(GET_MEMBER, 'getMember')
            (state,action);
        default:
            return state;
    }
}