import React from 'react';
import Background from "../../lib/css/Background";
import {Route, Switch} from 'react-router-dom'
import LoginPage from "./LoginPage";
import MemberFormPage from "./MemberFormPage";
import FindIdPage from "./FindIdPage";
import FindPwPage from "./FindPwPage";
import Page404 from "../../components/error/Page404";

function MemberPage({match}) {

    return (
        <Background
            color='fourthC'
        >
            <Switch>
                <Route
                path={`${match.path}/login`}
                component={LoginPage}
                exact
                />
                <Route
                    path={`${match.path}/memberForm`}
                    component={MemberFormPage}
                    exact
                />
                <Route
                    path={`${match.path}/findId`}
                    component={FindIdPage}
                    exact
                />
                <Route
                    path={`${match.path}/findPw`}
                    component={FindPwPage}
                    exact
                />
                <Route
                    comonent={Page404}
                />
            </Switch>
        </Background>
    )
}

export default MemberPage;