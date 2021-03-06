import React,{useEffect} from 'react';
import MainContainer from "../../containers/main/MainContainer";
import {Route, Switch} from "react-router-dom";
import MyPagePage from "../member/MyPagePage";
import Page404 from "../../components/error/Page404";
import {useDispatch, useSelector} from "react-redux";
import {LoginCheck} from "../../modules/member/member";
import LoadingPage from "../../components/common/LoadingPage";
import NotesPage from "../notes/NotesPage";
import ReviewListPage from "../review/ReviewListPage";
import ReviewPage from "../review/ReviewPage";

function MainPage({match, history}) {

    const loginCheckState =
        useSelector(state => state.member.loginCheck);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoginCheck());
        document.title = "REMA";
    },[dispatch]);

    const {loading, data} = loginCheckState;

    if(loading) return <LoadingPage/>;

    let login = null;

    if(data){
        login = data.login;
    }

    return(
        <>
            {
                login
                &&
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
                                path={`${match.path}notes`}
                                component={NotesPage}
                                exact
                            />
                            <Route
                                path={`${match.path}review`}
                                component={ReviewListPage}
                                exact
                            />
                            <Route
                                path={`${match.path}review/:date`}
                                component={ReviewPage}
                            />
                            <Route
                                comonent={Page404}
                            />
                        </Switch>
                    </MainContainer>
            }
        </>
    )
}

export default MainPage;