import React,{useEffect} from 'react';
import MainContainer from "../../containers/main/MainContainer";
import {Route} from "react-router-dom";
import MyPagePage from "../member/MyPagePage";

function MainPage({match, history}) {

    useEffect(() => {
        document.title = "REMA";
        return()=>{
            document.title = "REMA";
        }

    }, []);

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