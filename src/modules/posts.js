import * as postAPI from '../api/posts';
import {
    createPromoseThunk,
    reducerUtils,
    handleAsyncActions,
    createPromiseThunkById,
    handleAsyncActionById
} from "../lib/asyncUtils";

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts =
    createPromoseThunk(GET_POSTS, postAPI.getPosts);

export const getPost =
    createPromiseThunkById(GET_POST, postAPI.getPostById);

const initialState = {
    posts: reducerUtils.initial(),
    post: {}
};

export default function posts (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncActions(GET_POSTS, 'posts', true)
            (state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActionById(GET_POST, 'post')
            (state, action);
        default:
            return state;
    }
}
