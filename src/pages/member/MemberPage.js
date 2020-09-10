import React from 'react';
import Background from "../../lib/css/Background";
import {Route} from 'react-router-dom'
import LoginPage from "./LoginPage";
import MemberFormPage from "./MemberFormPage";

function MemberPage({match, history}) {

    return (
        <Background
            color='fourthC'
        >
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
        </Background>
    )
}

export default MemberPage;