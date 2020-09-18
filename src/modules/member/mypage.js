import * as mypageAPI from '../../api/member/mypage';
import {handleAsyncActions, reducerUtils} from "../../lib/asyncUtils";
import {push} from "connected-react-router";

//인풋 변경
const INPUT_CHANGE = 'mypage/INPUT_CHANGE';

//회원정보 가져오기
const GET_MEMBER = 'mypage/GET_MEMBER';
const GET_MEMBER_SUCCESS = 'mypage/GET_MEMBER_SUCCESS';
const GET_MEMBER_ERROR = 'mypage/GET_MEMBER_ERROR';

//수정 버튼
const UPDATE_BUTTON = 'mypage/UPDATE_BUTTON';

//비밀번호 변경
const UPDATE_PW = 'mypage/UPDATE_PW';
const UPDATE_PW_SUCCESS = 'mypage/UPDATE_PW_SUCCESS';
const UPDATE_PW_ERROR = 'mypage/UPDATE_PW_ERROR';

//이메일 변경 요청 메일
const UPDATE_EMAIL = 'mypage/UPDATE_EMAIL';
const UPDATE_EMAIL_SUCCESS = 'mypage/UPDATE_EMAIL_SUCCESS';
const UPDATE_EMAIL_ERROR = 'mypage/UPDATE_EMAIL_ERROR';

//이름 변경
const UPDATE_NAME = 'mypage/UPDATE_NAME';
const UPDATE_NAME_SUCCESS = 'mypage/UPDATE_NAME_SUCCESS';
const UPDATE_NAME_ERROR = 'mypage/UPDATE_NAME_ERROR';

//폼 상태
export const inputChange = formState => ({type: INPUT_CHANGE, formState});
//회원정보 가져오기
export const getMember = param => async (dispatch, getState, {history}) => {
        dispatch({type:GET_MEMBER});

        await mypageAPI.getMember()
            .then(response =>{
                const payload = response.data;
                dispatch({type:GET_MEMBER_SUCCESS, payload});

                const memberInfo = {...payload[0]};

                dispatch(inputChange({
                    id: memberInfo.id,
                    name: memberInfo.name,
                    email: memberInfo.email
                }));
            })
            .catch(error => {
                const status = error.response.status;
                const payload = error.data;
                dispatch({type:GET_MEMBER_ERROR, payload: payload, error: true});
                if(
                    status === 403
                    || status === 401
                ){
                    dispatch(push('/member/login'));
                }
                if(status === 404){
                    dispatch(push('/404'))
                }
            })
    };
//수정버튼
export const updateButton = formState => ({type: UPDATE_BUTTON, formState});
export const updatePw = param => async (dispatch, getState) => {
    dispatch({type:UPDATE_PW});

    await mypageAPI.updatePw(
        {pw: getState().mypage.inputChange.pw})
        .then(response => {
            const payload = response.data;
            dispatch({type:UPDATE_PW_SUCCESS, payload});

            alert('변경되었습니다.');
            dispatch(inputChange({
                pw: '',
                pw2: ''
            }));
            dispatch(updateButton({canChangePw: false}));
        })
        .catch(error => {
            alert('실패했습니다.');
            const status = error.response.status;
            const payload = error.data;
            dispatch({type:UPDATE_PW_ERROR, payload: payload, error: true});
            if(
                status === 403
                || status === 401
            ){
                dispatch(push('/member/login'));
            }
            if(status === 404){
                dispatch(push('/404'))
            }
        })
};
export const updateEmail = param => async (dispatch, getState) => {
    dispatch({type:UPDATE_EMAIL});
    await mypageAPI.sendEmailForUpdateEmail(
        {email: getState().mypage.inputChange.email})
        .then(response => {
            const payload = response.data;
            dispatch({type:UPDATE_EMAIL_SUCCESS, payload});

            if(!response.data.emailNotExisted){
                alert('이메일이 이미 존재합니다.')
            } else if (response.data.sentEmail){
                alert('이메일 변경 인증메일을 보냈습니다.');
                dispatch(inputChange({
                    email: ''
                }));
                dispatch(updateButton({canChangeEmail: false}));
            }
        })
        .catch(error => {
            alert('실패했습니다.');
            const status = error.response.status;
            const payload = error.data;
            dispatch({type:UPDATE_EMAIL_ERROR, payload: payload, error: true});
            if(
                status === 403
                || status === 401
            ){
                dispatch(push('/member/login'));
            }
            if(status === 404){
                dispatch(push('/404'))
            }
        })
};
export const updateName = param => async (dispatch, getState) => {
    dispatch({type:UPDATE_NAME});

    await mypageAPI.updateName(
        {name: getState().mypage.inputChange.name})
        .then(response => {
            const payload = response.data;
            dispatch({type:UPDATE_NAME_SUCCESS, payload});

            alert('변경되었습니다.');
            dispatch(updateButton({canChangeName: false}));
        })
        .catch(error => {
            alert('실패했습니다.');
            const status = error.response.status;
            const payload = error.data;
            dispatch({type:UPDATE_NAME_ERROR, payload: payload, error: true});
            if(
                status === 403
                || status === 401
            ){
                dispatch(push('/member/login'));
            }
            if(status === 404){
                dispatch(push('/404'))
            }
        })
};

//초기상태
const initialState = {
    inputChange: {
        id: '',
        pw: '',
        pw2: '',
        name: '',
        email: ''
    },
    getMember: reducerUtils.initial(),
    updateButton: {
        canChangePw: false,
        canChangeName: false,
        canChangeEmail: false
    },
    updatePw: reducerUtils.initial(),
    updateEmail: reducerUtils.initial(),
    updateName: reducerUtils.initial()
};

//리듀서

export default function mypage(state=initialState, action) {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                inputChange: {
                    ...state.inputChange,
                    ...action.formState
                }
            };
        case GET_MEMBER:
        case GET_MEMBER_SUCCESS:
        case GET_MEMBER_ERROR:
            return handleAsyncActions(GET_MEMBER, 'getMember')
            (state,action);
        case UPDATE_BUTTON:
            return {
                ...state,
                updateButton: {
                    ...state.updateButton,
                    ...action.formState
                }
            };
        case UPDATE_PW:
        case UPDATE_PW_SUCCESS:
        case UPDATE_PW_ERROR:
            return handleAsyncActions(UPDATE_PW, 'updatePw')
            (state,action);
        case UPDATE_EMAIL:
        case UPDATE_EMAIL_SUCCESS:
        case UPDATE_EMAIL_ERROR:
            return handleAsyncActions(UPDATE_EMAIL, 'updateEmail')
            (state,action);
        case UPDATE_NAME:
        case UPDATE_NAME_SUCCESS:
        case UPDATE_NAME_ERROR:
            return handleAsyncActions(UPDATE_NAME, 'updateName')
            (state,action);
        default:
            return state;
    }

}

