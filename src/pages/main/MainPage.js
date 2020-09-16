import React,{useEffect} from 'react';
import MainContainer from "../../containers/main/MainContainer";
import {Route, Switch} from "react-router-dom";
import MyPagePage from "../member/MyPagePage";
import {useDispatch, useSelector} from "react-redux";
import Background from "../../lib/css/Background";
import Page404 from "../../components/error/Page404";

function MainPage({match, history}) {

    const loginState =
        useSelector(state => state.member.loginCheck);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "REMA";
    }, []);

    return(
        <MainContainer
            history={history}
        >
            <Switch>
                <Route
                    path={`${match.path}mypage`}
                    component={MyPagePage}
                    exact
                />
                <Route
                    comonent={Page404}
                />
            </Switch>
        </MainContainer>
    )
}

export default MainPage;