import * as noteAPI from '../../api/notes/note';
import {push} from "connected-react-router";
import {handleAsyncActions, reducerUtils} from "../../lib/asyncUtils";

//노트목록 가져오기
const GET_NOTE_LIST = 'GET_NOTE_LIST';
const GET_NOTE_LIST_SUCCESS = 'GET_NOTE_LIST_SUCCESS';
const GET_NOTE_LIST_ERROR = 'GET_NOTE_LIST_ERROR';

export const GetNoteList = param => async (dispatch, getState) => {
    dispatch({type:GET_NOTE_LIST});

    await noteAPI.getNoteList()
        .then(response => {
            const payload = response.data;
            dispatch({type:GET_NOTE_LIST_SUCCESS, payload});
        })
        .catch(error => {
            const status = error.response.status;
            const payload = error.data;
            dispatch({type:GET_NOTE_LIST_ERROR, payload: payload, error: true});
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

const initialState = {
    getNoteList: reducerUtils.initial()
};

export default function note (state = initialState, action) {
    switch (action.type) {
        case GET_NOTE_LIST:
        case GET_NOTE_LIST_SUCCESS:
        case GET_NOTE_LIST_ERROR:
            return handleAsyncActions(GET_NOTE_LIST, 'getNoteList', true)
                (state, action);
        default:
            return state;
    }
}
