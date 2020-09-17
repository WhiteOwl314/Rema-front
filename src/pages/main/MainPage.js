import React,{useEffect} from 'react';
import MainContainer from "../../containers/main/MainContainer";
import {Route, Switch} from "react-router-dom";
import MyPagePage from "../member/MyPagePage";
import Page404 from "../../components/error/Page404";

function MainPage({match, history}) {

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