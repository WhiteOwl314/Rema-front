import * as memberAPI from '../../api/member';
import {
    createPromoseThunk,
    reducerUtils,
    handleAsyncActions
} from "../../lib/asyncUtils";

const CHECK_MEMBER_ID = 'CHECK_MEMBER_ID';
const CHECK_MEMBER_ID_SUCCESS = 'CHECK_MEMBER_ID_SUCCESS';
const CHECK_MEMBER_ID_ERROR = 'CHECK_MEMBER_ID_ERROR';

export const CheckMemberId =
    createPromoseThunk(CHECK_MEMBER_ID, memberAPI.CheckMemberId);

const initialState = {
    checkMemberId: reducerUtils.initial()
};

export default function member (state = initialState, action) {
    switch (action.type) {
        case CHECK_MEMBER_ID:
        case CHECK_MEMBER_ID_SUCCESS:
        case CHECK_MEMBER_ID_ERROR:
            return handleAsyncActions(CHECK_MEMBER_ID, 'checkMemberId')
                (state,action);
        default:
            return state;
    }
}