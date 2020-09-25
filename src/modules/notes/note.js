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

//노트 변경
const CHANGE_NOTE = 'note/CHANGE_NOTE';

export const ChangeNote = formState => ({type: CHANGE_NOTE, payload:formState.payload, meta: formState.id});


//노트 변경 저장
const UPDATE_NOTE = 'note/UPDATE_NOTE';
const UPDATE_NOTE_SUCCESS = 'note/UPDATE_NOTE_SUCCESS';
const UPDATE_NOTE_ERROR = 'note/UPDATE_NOTE_ERROR';

export const UpdateNote = param => async (dispatch, getState) => {
    const id = getState().notesList.currentClick.current;
    const formState = getState().note.getNote[id].data;
    console.log(formState);

    dispatch({type: UPDATE_NOTE});

    await noteAPI.updateNote(formState)
        .then(response => {
            const payload = response.data;
            dispatch({type: UPDATE_NOTE_SUCCESS, payload});
        })
        .catch(error => {
            const status = error.response.status;
            const payload = error.data;
            dispatch({type: UPDATE_NOTE_ERROR, payload: payload, error: true});
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
    getNote: {},
    updateNote: reducerUtils.initial()
};

export default function note (state = initialState, action) {
    switch (action.type) {
        case GET_NOTE:
        case GET_NOTE_SUCCESS:
        case GET_NOTE_ERROR:
            return handleAsyncActionById(GET_NOTE, 'getNote')
                (state, action);
        case CHANGE_NOTE:
            return {
                ...state,
                getNote: {
                    ...state.getNote,
                    [action.meta]: {
                        ...state.getNote[action.meta],
                        data:{
                            ...state.getNote[action.meta].data,
                            ...action.payload
                        }
                    }
                }
            };
        case UPDATE_NOTE:
        case UPDATE_NOTE_SUCCESS:
        case UPDATE_NOTE_ERROR:
            return handleAsyncActions(UPDATE_NOTE, 'updateNote',true)
            (state, action);
        default:
            return state;
    }
}
