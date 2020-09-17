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

export const inputChange = formState => ({type: INPUT_CHANGE, formState});
//회원정보 가져오기
export const getMember = param => async (dispatch, getState, {history}) => {
        dispatch({type:GET_MEMBER});

        await mypageAPI.getMember()
            .then(response =>{
                const payload = response.data;
                const memberInfo = {...payload[0]};
                console.log(memberInfo);

                dispatch(inputChange({
                    id: memberInfo.id,
                    name: memberInfo.name,
                    email: memberInfo.email
                }));
                dispatch({type:GET_MEMBER_SUCCESS, payload});
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
export const updateButton = targetButton => ({type: UPDATE_BUTTON, targetButton});

//초기상태
const initialState = {
    inputChange: {
        id: '',
        oldPw: '',
        pw: '',
        name: '',
        email: ''
    },
    getMember: reducerUtils.initial(),
    updateButton: {
        canChangePw: false,
        canChangeName: false,
        canChangeEmail: false
    }
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
                    [action.targetButton]: !state.updateButton.targetButton
                }
            };
        default:
            return state;
    }

}

