import * as folderAPI from '../../api/notes/folder';
import {push} from "connected-react-router";
import {handleAsyncActions, reducerUtils} from "../../lib/asyncUtils";

//폴더목록 가져오기
const GET_FOLDER_LIST = 'GET_FOLDER_LIST';
const GET_FOLDER_LIST_SUCCESS = 'GET_FOLDER_LIST_SUCCESS';
const GET_FOLDER_LIST_ERROR = 'GET_FOLDER_LIST_ERROR';

export const GetFolderList = param => async (dispatch, getState) => {
    dispatch({type:GET_FOLDER_LIST});

    await folderAPI.getFolderList()
        .then(response => {
            const payload = response.data;
            dispatch({type:GET_FOLDER_LIST_SUCCESS, payload});
        })
        .catch(error => {
            const status = error.response.status;
            const payload = error.data;
            dispatch({type:GET_FOLDER_LIST_ERROR, payload: payload, error: true});
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
    getFolderList: reducerUtils.initial()
};

export default function folder (state = initialState, action) {
    switch (action.type) {
        case GET_FOLDER_LIST:
        case GET_FOLDER_LIST_SUCCESS:
        case GET_FOLDER_LIST_ERROR:
            return handleAsyncActions(GET_FOLDER_LIST, 'getFolderList')
                (state, action);
        default:
            return state;
    }
}