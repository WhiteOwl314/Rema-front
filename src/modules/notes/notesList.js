import * as notesListAPI from '../../api/notes/notesList';
import {push} from "connected-react-router";
import * as folderOrderAPI from "../../api/notes/folderOrder";
import {handleAsyncActions, reducerUtils} from "../../lib/asyncUtils";
import {ClosePopUp} from "../popUp";

//목록 가져오기
const GET_NOTES_LIST = 'notesList/GET_NOTES_LIST';
const GET_NOTES_LIST_SUCCESS = 'notesList/GET_NOTES_LIST_SUCCESS';
const GET_NOTES_LIST_ERROR = 'notesList/GET_NOTES_LIST_ERROR';

export const GetNotesList = param => async (dispatch, getState) => {
    dispatch({type:GET_NOTES_LIST});

    await notesListAPI.getNotesList()
        .then(response => {
            const payload = response.data;
            dispatch({type:GET_NOTES_LIST_SUCCESS, payload});
        })
        .catch(error => {
            const payload = error.data;
            dispatch({type:GET_NOTES_LIST_ERROR, payload: payload, error: true});

            let status = null;
            if(error.response){
                status = error.response.status;

                if(
                    status === 403
                    || status === 401
                ){
                    dispatch(push('/member/login'));
                } else if (status === 404){
                    dispatch(push('/404'))
                }
            }
        })
};

//폴더오더목록 가져오기
const GET_FOLDER_ORDER_LIST = 'notesList/GET_FOLDER_ORDER_LIST';
const GET_FOLDER_ORDER_LIST_SUCCESS = 'notesList/GET_FOLDER_ORDER_LIST_SUCCESS';
const GET_FOLDER_ORDER_LIST_ERROR = 'notesList/GET_FOLDER_ORDER_LIST_ERROR';

export const GetFolderOrderList = param => async (dispatch, getState) => {
    dispatch({type:GET_FOLDER_ORDER_LIST});

    await folderOrderAPI.getFolderOrderList()
        .then(response => {
            const payload = response.data;
            dispatch({type:GET_FOLDER_ORDER_LIST_SUCCESS, payload});
        })
        .catch(error => {
            const payload = error.data;
            dispatch({type:GET_FOLDER_ORDER_LIST_ERROR, payload: payload, error: true});

            let status = null;
            if(error.response){
                status = error.response.status;

                if(
                    status === 403
                    || status === 401
                ){
                    dispatch(push('/member/login'));
                } else if (status === 404){
                    dispatch(push('/404'))
                }
            }
        })
};

//현재 클릭
const CLICK_ITEM = 'notesList/CLICK_ITEM';

export const ClickItem = formState => ({type: CLICK_ITEM, formState});


//폴더 추가
const ADD_FOLDER = 'notesList/ADD_FOLDER';
const ADD_FOLDER_SUCCESS = 'notesList/ADD_FOLDER_SUCCESS';
const ADD_FOLDER_ERROR = 'notesList/ADD_FOLDER_ERROR';

export const AddFolder = param => async (dispatch, getState) => {
    dispatch({type:ADD_FOLDER});
    const _formData = getState().popUp.content.addFolder;
    const formData = {
        ..._formData,
        current: String(getState().notesList.currentClick.current),
        is_folder: 1
    };

    await notesListAPI.addNotesList(formData)
        .then(async response => {
            const payload = response.data;
            dispatch({type:ADD_FOLDER_SUCCESS, payload});
            dispatch(ClosePopUp());
            await dispatch(GetNotesList());
            dispatch(GetFolderOrderList());
        })
        .catch(error => {
            const payload = error.data;
            dispatch({type:ADD_FOLDER_ERROR, payload: payload, error: true});

            let status = null;
            if(error.response){
                status = error.response.status;

                if(
                    status === 403
                    || status === 401
                ){
                    dispatch(push('/member/login'));
                } else if (status === 404){
                    dispatch(push('/404'))
                }
            }
        })
};

//폴더 오픈
const OPEN_FOLDER = 'notesList/OPEN_FOLDER';

export const OpenFolder = id => ({type: OPEN_FOLDER, id});


//폴더 닫기
const CLOSE_FOLDER = 'notesList/CLOSE_FOLDER';

export const CloseFolder = id => ({type: CLOSE_FOLDER, id});


//노트 추가
const ADD_NOTE = 'notesList/ADD_NOTE';
const ADD_NOTE_SUCCESS = 'notesList/ADD_NOTE_SUCCESS';
const ADD_NOTE_ERROR = 'notesList/ADD_NOTE_ERROR';

export const AddNote = param => async (dispatch, getState) => {
    dispatch({type:ADD_NOTE});
    const _formData = getState().popUp.content.addNote;
    const formData = {
        ..._formData,
        current: String(getState().notesList.currentClick.current),
        is_folder: 0
    };

    await notesListAPI.addNotesList(formData)
        .then(async response => {
            const payload = response.data;
            dispatch({type:ADD_NOTE_SUCCESS, payload});
            dispatch(ClosePopUp());
            await dispatch(GetNotesList());
            dispatch(GetFolderOrderList());
        })
        .catch(error => {
            const payload = error.data;
            dispatch({type:ADD_NOTE_ERROR, payload: payload, error: true});

            let status = null;
            if(error.response){
                status = error.response.status;

                if(
                    status === 403
                    || status === 401
                ){
                    dispatch(push('/member/login'));
                } else if (status === 404){
                    dispatch(push('/404'))
                }
            }
        })
};


//이름 변경
const UPDATE_NAME = 'notesList/UPDATE_NAME';
const UPDATE_NAME_SUCCESS = 'notesList/UPDATE_NAME_SUCCESS';
const UPDATE_NAME_ERROR = 'notesList/UPDATE_NAME_ERROR';

export const UpdateName = param => async (dispatch, getState) => {
    dispatch({type:UPDATE_NAME});
    const _formData = getState().popUp.content.updateName;
    const formData = {
        ..._formData,
        id : getState().notesList.currentClick.current
    };

    console.log(formData);

    await notesListAPI.updateName(formData)
        .then(async response => {
            const payload = response.data;
            dispatch({type:UPDATE_NAME_SUCCESS, payload});
            dispatch(ClosePopUp());
            dispatch(GetNotesList());
        })
        .catch(error => {
            const payload = error.data;
            dispatch({type:UPDATE_NAME_ERROR, payload: payload, error: true});

            let status = null;
            if(error.response){
                status = error.response.status;

                if(
                    status === 403
                    || status === 401
                ){
                    dispatch(push('/member/login'));
                } else if (status === 404){
                    dispatch(push('/404'))
                }
            }
        })
};


const initialState = {
    currentClick: {current: 'background'},
    notesList: reducerUtils.initial(),
    folderOrder: reducerUtils.initial(),
    addFolder: reducerUtils.initial(),
    addNote: reducerUtils.initial(),
    updateName: reducerUtils.initial(),
    openFolder: {}
};

export default function notesList(state = initialState, action) {
    switch (action.type) {
        case GET_NOTES_LIST:
        case GET_NOTES_LIST_SUCCESS:
        case GET_NOTES_LIST_ERROR:
            return handleAsyncActions(GET_NOTES_LIST, 'notesList',true)
            (state, action);
        case GET_FOLDER_ORDER_LIST:
        case GET_FOLDER_ORDER_LIST_SUCCESS:
        case GET_FOLDER_ORDER_LIST_ERROR:
            return handleAsyncActions(GET_FOLDER_ORDER_LIST, 'folderOrder',true)
            (state, action);
        case CLICK_ITEM:
            return {
                ...state,
                currentClick: {
                    ...state.currentClick,
                    ...action.formState
                }
            };
        case ADD_FOLDER:
        case ADD_FOLDER_SUCCESS:
        case ADD_FOLDER_ERROR:
            return handleAsyncActions(ADD_FOLDER, 'addFolder')
            (state, action);
        case OPEN_FOLDER:
            return {
                ...state,
                openFolder: {
                    ...state.openFolder,
                    [action.id] : {open: true}
                }
            };
        case CLOSE_FOLDER:
            return {
                ...state,
                openFolder: {
                    ...state.openFolder,
                    [action.id] : {open: false}
                }
            };
        case ADD_NOTE:
        case ADD_NOTE_SUCCESS:
        case ADD_NOTE_ERROR:
            return handleAsyncActions(ADD_NOTE, 'addNote')
            (state, action);
        case UPDATE_NAME:
        case UPDATE_NAME_SUCCESS:
        case UPDATE_NAME_ERROR:
            return handleAsyncActions(ADD_NOTE, 'updateName')
            (state, action);
        default:
            return state;
    }
}
