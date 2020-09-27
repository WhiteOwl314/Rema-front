import * as reveiwAPI from '../../api/review/review';
import {push} from "connected-react-router";
import {handleAsyncActions, reducerUtils} from "../../lib/asyncUtils";

//날짜 -> 노트리스트
const GET_REVIEW_DATE_LIST_BY_DATE = 'reviewDetail/GET_REVIEW_DATE_LIST_BY_DATE';
const GET_REVIEW_DATE_LIST_BY_DATE_SUCCESS = 'reviewDetail/GET_REVIEW_DATE_LIST_BY_DATE_SUCCESS';
const GET_REVIEW_DATE_LIST_BY_DATE_ERROR = 'reviewDetail/GET_REVIEW_DATE_LIST_BY_DATE_ERROR';

export const GetReviewDateListByDate = param => async (dispatch, getState) => {
    const date = param;
    dispatch({type: GET_REVIEW_DATE_LIST_BY_DATE});

    await reveiwAPI.getReviewDateListByDate(date)
        .then(response => {
            const payload = response.data;
            console.log(payload);
            dispatch({type: GET_REVIEW_DATE_LIST_BY_DATE_SUCCESS, payload});
        })
        .catch(error => {
            const status = error.response.status;
            const payload = error.data;
            dispatch({type: GET_REVIEW_DATE_LIST_BY_DATE_ERROR, payload: payload, error: true});
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

//현재 클릭
const CLICK_NOTES_LIST = 'reviewDetail/CLICK_NOTES_LIST';

export const ClickNotesList = formState => ({type: CLICK_NOTES_LIST, formState});

const initialState = {
    currentClick: {current: ''},
    notesListByDate: reducerUtils.initial()
};

export default function reviewDetail (state = initialState, action) {
    switch (action.type) {
        case GET_REVIEW_DATE_LIST_BY_DATE:
        case GET_REVIEW_DATE_LIST_BY_DATE_SUCCESS:
        case GET_REVIEW_DATE_LIST_BY_DATE_ERROR:
            return handleAsyncActions(GET_REVIEW_DATE_LIST_BY_DATE, 'notesListByDate')
            (state, action);
        case CLICK_NOTES_LIST:
            return {
                ...state,
                currentClick: {
                    ...state.currentClick,
                    ...action.formState
                }
            };
        default:
            return state;
    }
}
