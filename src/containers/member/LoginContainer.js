import React, {useState, useCallback, useEffect} from 'react';
import LoginForm from "../../components/member/login/LoginForm";
import LoginTemplate from "../../components/member/login/LoginTemplate";
import {useDispatch, useSelector} from "react-redux";
import {clearLogin, Login} from "../../modules/member/member";
import {executeJwtAuthenticationService, registerSuccessfulLoginForJwt} from "../../api/AuthenticationService";

function LoginContainer({history}) {


    const loginState =
        useSelector(state => state.member.login);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearLogin());
        return()=>{
        }
    },[dispatch]);

    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });

    const onChange = useCallback((e) =>{
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    },[formState]);

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(Login(formState));

        setFormState({
            ...formState,
            username:'',
            password:''
        });
    };

    return(
        <>
            <LoginTemplate>
                <LoginForm
                    onChange={onChange}
                    onSubmit={onSubmit}
                    formState={formState}
                    loginState={loginState}
                    history={history}
                    dispatch={dispatch}
                />
            </LoginTemplate>
        </>
    )

}

export default LoginContainer;