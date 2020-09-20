import * as folderOrderAPI from '../../api/notes/folderOrder';
import {push} from "connected-react-router";
import {handleAsyncActions, reducerUtils} from "../../lib/asyncUtils";

//폴더오더목록 가져오기
const GET_FOLDER_ORDER_LIST = 'GET_FOLDER_ORDER_LIST';
const GET_FOLDER_ORDER_LIST_SUCCESS = 'GET_FOLDER_ORDER_LIST_SUCCESS';
const GET_FOLDER_ORDER_LIST_ERROR = 'GET_FOLDER_ORDER_LIST_ERROR';

export const GetFolderOrderList = param => async (dispatch, getState) => {
    dispatch({type:GET_FOLDER_ORDER_LIST});

    await folderOrderAPI.getFolderOrderList()
        .then(response => {
            const payload = response.data;
            dispatch({type:GET_FOLDER_ORDER_LIST_SUCCESS, payload});
        })
        .catch(error => {
            const status = error.response.status;
            const payload = error.data;
            dispatch({type:GET_FOLDER_ORDER_LIST_ERROR, payload: payload, error: true});
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
    getFolderOrderList: reducerUtils.initial()
};

export default function folderOrder (state = initialState, action) {
    switch (action.type) {
        case GET_FOLDER_ORDER_LIST:
        case GET_FOLDER_ORDER_LIST_SUCCESS:
        case GET_FOLDER_ORDER_LIST_ERROR:
            return handleAsyncActions(GET_FOLDER_ORDER_LIST, 'getFolderOrderList',true)
            (state, action);
        default:
            return state;
    }
}
