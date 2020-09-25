import * as reveiwAPI from '../../api/review/review';
import {handleAsyncActionById, handleAsyncActions, reducerUtils} from "../../lib/asyncUtils";
import {push} from "connected-react-router";


//리스트 가져오기
const GET_REVIEW_DATE_LIST = 'review/GET_REVIEW_DATE_LIST';
const GET_REVIEW_DATE_LIST_SUCCESS = 'review/GET_REVIEW_DATE_LIST_SUCCESS';
const GET_REVIEW_DATE_LIST_ERROR = 'review/GET_REVIEW_DATE_LIST_ERROR';

export const GetReviewDateList = param => async (dispatch, getState) => {
    const id = param;
    dispatch({type: GET_REVIEW_DATE_LIST, meta: id});

    await reveiwAPI.getReviewDateList(id)
        .then(response => {
            const payload = response.data;
            dispatch({type: GET_REVIEW_DATE_LIST_SUCCESS, payload, meta: id});
        })
        .catch(error => {
            const status = error.response.status;
            const payload = error.data;
            dispatch({type: GET_REVIEW_DATE_LIST_ERROR, payload: payload, error: true, meta: id});
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


//추가
const ADD_REVIEW_DATE = 'review/ADD_REVIEW_DATE';
const ADD_REVIEW_DATE_SUCCESS = 'review/ADD_REVIEW_DATE_SUCCESS';
const ADD_REVIEW_DATE_ERROR = 'review/ADD_REVIEW_DATE_ERROR';

export const AddReviewDate = param => async (dispatch, getState) => {
    const note_id = getState().notesList.currentClick.current;

    dispatch({type: ADD_REVIEW_DATE});

    await reveiwAPI.addReviewDate(note_id)
        .then(response => {
            const payload = response.data;
            dispatch({type: ADD_REVIEW_DATE_SUCCESS, payload});
            dispatch(GetReviewDateList(note_id));
        })
        .catch(error => {
            const status = error.response.status;
            const payload = error.data;
            dispatch({type: ADD_REVIEW_DATE_ERROR, payload: payload, error: true});
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
    reviewDateList: {},
    addReviewDate: reducerUtils.initial(),
};

export default function review (state = initialState, action) {
    switch (action.type) {
        case GET_REVIEW_DATE_LIST:
        case GET_REVIEW_DATE_LIST_SUCCESS:
        case GET_REVIEW_DATE_LIST_ERROR:
            return handleAsyncActionById(GET_REVIEW_DATE_LIST, 'reviewDateList')
            (state, action);
        case ADD_REVIEW_DATE:
        case ADD_REVIEW_DATE_SUCCESS:
        case ADD_REVIEW_DATE_ERROR:
            return handleAsyncActions(ADD_REVIEW_DATE, 'addReviewDate')
            (state, action);
        default:
            return state;
    }
}
