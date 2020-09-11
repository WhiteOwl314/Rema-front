import React from 'react';
import LoadingPage from "../../common/LoadingPage";
import ErrorPage from "../../common/ErrorPage";
import styled from "styled-components";
import Button from "../../../lib/css/Button";

const Form = styled.form`
    width: 100%;
    height: 320px;
    padding-top: 160px;
    box-sizing: border-box;
    overflow-y: auto;
`;

const InputBlock = styled.div`
    width: 100%;
    padding: 7px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
`;

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-size: 13px;
    padding-left: 15px;
    outline: none;
    border: 1px solid gray;
    border-radius: 3px;
    background-color: #f7f7f7;
    border: 1px solid #e2e2e2;
    
    &::placeholder{
        font-weight: bold;
        opacity: 0.6;
    }
`;

const SubmitBlock = styled.div`
    width: 100%;
    padding: 7px;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
`;


function LoginForm({
    onChange,
    onSubmit,
    formState,
    loginState,
    history
}) {
    let isLogOn = false;

    const {loading, error} = loginState;
    if(loginState.data){
        isLogOn = loginState.data.isLogOn;
    }

    if(loading) return <LoadingPage/>;
    if(error) return <ErrorPage/>;
    if(isLogOn) history.push('/')

    return(
        <Form
            onSubmit={onSubmit}
        >
            <InputBlock>
                <Input
                    name='id'
                    type='text'
                    onChange={onChange}
                    value={formState.id}
                    placeholder='아이디'
                >
                </Input>
            </InputBlock>
            <InputBlock>
                <Input
                    name="pw"
                    type="password"
                    onChange={onChange}
                    value={formState.pw}
                    placeholder='비밀번호'
                />
            </InputBlock>
            <SubmitBlock>
                <Button
                    type="submit"
                    fullWidth
                    backgroundColor='fourthC'
                    color='white'
                >
                    로그인
                </Button>
            </SubmitBlock>
        </Form>
    )
}

export default LoginForm;
