import React,{useState, useCallback} from 'react';
import LoginForm from "../../components/member/login/LoginForm";
import LoginTemplate from "../../components/member/login/LoginTemplate";
import {useDispatch, useSelector} from "react-redux";
import {Login} from "../../modules/member/member";

function LoginContainer({history}) {

    const loginState =
        useSelector(state => state.member.login);
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        id: '',
        pw: ''
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
            id:'',
            pw:''
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