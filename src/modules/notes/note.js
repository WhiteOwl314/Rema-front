import * as noteAPI from '../../api/notes/note';
import {push} from "connected-react-router";
import {handleAsyncActionById, handleAsyncActions, reducerUtils} from "../../lib/asyncUtils";

//노트 가져오기
const GET_NOTE = 'note/GET_NOTE';
const GET_NOTE_SUCCESS = 'note/GET_NOTE_SUCCESS';
const GET_NOTE_ERROR = 'note/GET_NOTE_ERROR';

export const GetNote = param => async (dispatch, getState) => {
    const id = param;
    dispatch({type: GET_NOTE, meta: id});

    await noteAPI.getNote(id)
        .then(response => {
            const payload = response.data;
            dispatch({type: GET_NOTE_SUCCESS, payload, meta: id});
        })
        .catch(error => {
            const status = error.response.status;
            const payload = error.data;
            dispatch({type: GET_NOTE_ERROR, payload: payload, error: true, meta: id});
            if (
                status === 403
                || status === 401
            ) {
                dispatch(push('/member/login'));
            }
            if (status === 404) {
                dispatch(push('/404'))
            }
        });
};

const initialState = {
    getNote: {}
};

export default function note (state = initialState, action) {
    switch (action.type) {
        case GET_NOTE:
        case GET_NOTE_SUCCESS:
        case GET_NOTE_ERROR:
            return handleAsyncActionById(GET_NOTE, 'getNote')
                (state, action);
        default:
            return state;
    }
}
