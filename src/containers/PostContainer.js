import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getPost, goToHome} from "../modules/posts";
import Post from '../components/Post';
import {useHistory} from 'react-router-dom'

function PostContainer({postId}) {

    const history = useHistory();

    const {data, loading, error} = useSelector(
        state => state.posts.post[postId]
    ) || {
        loading:false,
        data: null,
        error: null
    };

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPost(postId));
    }, [postId, dispatch]);

    if (loading && !data) return <div>로딩중...</div>;
    if (error) return <div>에러발생</div>;
    if (!data) return null;

    return (
        <>
            <button onClick={() => {history.push('/')}}>
                홈으로 이동
            </button>
            <Post post={data} />
        </>
    );
}

export default PostContainer;