import React,{useEffect} from 'react';
import styled from "styled-components";
import {ClearFindPw} from "../../../modules/member/member";
import LoadingPage from "../../common/LoadingPage";
import ErrorPage from "../../common/ErrorPage";
import Button from "../../../lib/css/Button";
import FindPwSuccess from "./FindPwSuccess";

const Form = styled.form`
    width: 100%;
    height: 250px;
    padding-top: 70px;
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


function FindPwForm({
                        history,
                        onChange,
                        onSubmit,
                        findPwState,
                        dispatch,
                        formState
}) {
    useEffect(() => {
        dispatch(ClearFindPw());
    },[dispatch]);

    let sentEmail = false;

    if(findPwState.data){
        sentEmail = findPwState.data.sentEmail;
    }

    const {loading, error} = findPwState;

    if(loading) return <LoadingPage/>;
    if(error) return <ErrorPage/>;
    if(sentEmail) return <FindPwSuccess history={history}/>;

    return(
        <Form
            onSubmit={onSubmit}
        >
            <InputBlock>
                <Input
                    name="id"
                    type="text"
                    onChange={onChange}
                    value={formState.id}
                    placeholder='아이디'
                />
            </InputBlock>
            <InputBlock>
                <Input
                    name="email"
                    type="email"
                    onChange={onChange}
                    value={formState.email}
                    placeholder='이메일'
                />
            </InputBlock>
            <SubmitBlock>
                <Button
                    type="submit"
                    fullWidth
                    backgroundColor='fourthC'
                    color='white'
                    size='large'
                >
                    비밀번호 검색
                </Button>
            </SubmitBlock>
        </Form>
    )
}

export default FindPwForm;