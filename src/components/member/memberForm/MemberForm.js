import React from 'react';
import styled from 'styled-components'
import LoadingPage from "../../common/LoadingPage";
import ErrorPage from "../../common/ErrorPage";
import MemberFormSuccessPage from "./MemberFormSuccessPage";
import Button from "../../../lib/css/Button";

const Form = styled.form`
    width: 100%;
    height: 100%;
    padding-top: 70px;
    box-sizing: border-box;
    overflow-y: auto;
`;

const InputBlock = styled.div`
    width: 100%;
    padding: 6px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
`;

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
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

const InputErrorBlock = styled.div`
    font-size: 11px;
    color: #c13c38;
    padding-left: 10px; 
`;

const PasswordBlock = styled.div`
    &+&{
        margin-top: 12px;
    }
`;

const FormMain = styled.div`
    width: 100%;
    height: 240px;
`;

function MemberForm({
                        onChange,
                        onSubmit,
                        formState,
                        checkIdState,
                        checkEmailState,
                        addMemberState,
                        history
}) {

    let idIsExisted = false;
    let emailIsExisted = false;
    let addMemberToDb = false;
    let sentEmail = false;

    if(checkIdState.data){
        idIsExisted = checkIdState.data.idIsExisted;
    }
    if(checkEmailState.data){
        emailIsExisted = checkEmailState.data.emailIsExisted;
    }
    const {loading, error} = addMemberState;
    if(addMemberState.data){
        addMemberToDb = addMemberState.data.addMemberToDb;
        sentEmail = addMemberState.data.sentEmail;
    }

    if(loading) return <LoadingPage/>;
    if(error) return <ErrorPage/>;
    if(addMemberToDb && sentEmail) return <MemberFormSuccessPage history={history}/>;

    return(
        <Form
            onSubmit={onSubmit}
        >
            <FormMain>
                <InputBlock>
                    <Input
                        name="id"
                        type="text"
                        onChange={onChange}
                        value={formState.id}
                        placeholder='아이디'
                    />
                    <InputErrorBlock>
                        {
                            idIsExisted
                                ?'이미 존재하는 아이디입니다.'
                                :''
                        }
                    </InputErrorBlock>
                </InputBlock>
                <InputBlock>
                    <PasswordBlock>
                        <Input
                            name="pw"
                            type="password"
                            onChange={onChange}
                            value={formState.pw}
                            placeholder='비밀번호'
                        />
                    </PasswordBlock>
                    <PasswordBlock>
                        <Input
                            name="pw2"
                            type="password"
                            onChange={onChange}
                            value={formState.pw2}
                            placeholder='비밀번호 확인'
                        />
                    </PasswordBlock>
                    <InputErrorBlock>
                        {
                            formState.pw2 !== ''
                            && formState.pw !== ''
                            && formState.pw !== formState.pw2
                                ? '비밀번호가 일치하지 않습니다.'
                                : ''
                        }
                    </InputErrorBlock>
                </InputBlock>
                <InputBlock>
                    <Input
                        name="name"
                        type="text"
                        onChange={onChange}
                        value={formState.name}
                        placeholder='이름'
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
                    <InputErrorBlock>
                        {
                            emailIsExisted
                                ?'이미 존재하는 이메일입니다.'
                                :''
                        }
                    </InputErrorBlock>
                </InputBlock>
                <input
                    name="level"
                    type="hidden"
                    onChange={onChange}
                    value={formState.level}
                />
            </FormMain>
            <InputBlock>
                {
                    formState.id !== ''
                    && formState.pw !== ''
                    && formState.pw2 !== ''
                    && formState.name !== ''
                    && formState.email !== ''
                    && idIsExisted === false
                    && emailIsExisted === false
                        ? <Button
                            type="submit"
                            fullWidth
                            backgroundColor='fourthC'
                            color='white'
                            size='large'
                        >
                            회원가입
                        </Button>
                        : <Button
                            type="submit"
                            fullWidth
                            disabled
                            backgroundColor='gray'
                            color='white'
                            size='large'
                        >
                            회원가입
                        </Button>
                }
            </InputBlock>
        </Form>
    )

}

export default MemberForm;
