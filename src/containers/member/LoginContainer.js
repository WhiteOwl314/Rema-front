import React,{useState, useCallback} from 'react';
import LoginForm from "../../components/member/login/LoginForm";
import LoginTemplate from "../../components/member/login/LoginTemplate";
import {useDispatch, useSelector} from "react-redux";
import {clearLogin, Login} from "../../modules/member/member";
import ErrorPage from "../../components/common/ErrorPage";

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

    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(Login(formState));

        setFormState({
            ...formState,
            id:'',
            pw:''
        });
    };

    const alertMessage = async (loginState) => {
        console.log('alertMessage 함수 실행');
        const {loading, error} = loginState;
        if(!loading && loginState.data){
            const {idIsExisted, pwIsCorrect, emailIsAllowed, isLogOn}
                = loginState.data;
            if(!idIsExisted){
                alert('아이디가 존재하지 않습니다.');
            } else if (!pwIsCorrect){
                alert('비밀번호가 다릅니다.');
            } else if (!emailIsAllowed){
                alert('이메일 인증이 필요합니다.');
            } else if (!isLogOn){
                alert('로그인 실패했습니다.');
            } else {
                history.push('/')
            }
        }
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