import React,{useEffect} from 'react';
import MainContainer from "../../containers/main/MainContainer";
import {Route} from "react-router-dom";
import MyPagePage from "../member/MyPagePage";
import {useDispatch, useSelector} from "react-redux";
import {LoginCheck} from "../../modules/member/member";
import LoadingPage from "../../components/common/LoadingPage";

function MainPage({match, history}) {

    const loginCeckState =
        useSelector(state => state.member.loginCheck);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoginCheck());
        document.title = "REMA";
    }, []);

    const {loading, error} = loginCeckState;

    if(loginCeckState.data){
        const {idIsExisted, pwIsCorrect, isLogOn}
            = loginCeckState.data;
        if(
            !idIsExisted
            || !pwIsCorrect
            || !isLogOn
        ){
            history.push('/member/login');
        }
    }

    if(loading) return <LoadingPage/>;
    if(error) history.push('/member/login');

    return(
        <MainContainer
            history={history}
        >
            <Route
                path={`${match.path}mypage`}
                component={MyPagePage}
                exact
            />
        </MainContainer>
    )
}

export default MainPage;