import React from 'react';
import {Route} from 'react-router-dom';

function RouteIf({role, component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props => {
                //로그인 체크
                if()

                //권한 체크
            }}
        />
    )
}

export default RouteIf;