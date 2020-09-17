import React, {useEffect} from 'react';
import styled,{css} from "styled-components";
import LoadingPage from "../../common/LoadingPage";
import Button from "../../../lib/css/Button";

const MyPageFormBlock = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 50px;
    box-sizing: border-box;
    overflow-y: auto;
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
`;

const FormItem = styled.div`
    ${({theme}) => {
    const borderBottomColor = theme.palette['border'];
    return css`
            border-bottom: 1px solid ${borderBottomColor};
        `;
    }}
    width: 100%;
    height: 30px;
    display: flex;
    position: relative;
    
    &.lastChild{
        border: none;
    }
`;

const FormItemTitle = styled.div`
    width: 100px;
    height: 100%;
    padding-top: 7px;
    padding-bottom: 7px;
    box-sizing: border-box;
    flex: 0 0 auto;
`;

const TitlePadding = styled.div`
    width: 100%;
    height:100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 12px;
    border-right: 1px solid gray;
`;

const FormItemBody = styled.div`
    width:100%;
    height: 100%;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
`;

const PasswordItem = styled.div`
    display: flex;
    width: 50%;
`;

const PasswordBody = styled.div`
    height: 100%;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
`;

const PasswordButtonBlock = styled.div`
    position: absolute;
    right: 0;
    margin-top: 5px;
`;

const Input = styled.input`
    width: 150px;
    box-sizing: border-box;
    font-size: 13px;
    outline: none;
    border-radius: 3px;
    background-color: #f7f7f7;
    border: 1px solid #e2e2e2;
    
    &::placeholder{
        font-weight: bold;
        opacity: 0.6;
    }
`;

function MyPageForm({
                        getMemberState,
    onChange,
                        inputChangeState

}) {

    const {id, oldPw, pw, name, email} = inputChangeState;
    const {loading} = getMemberState;


    if(loading) return <LoadingPage/>;

    return(
        <MyPageFormBlock>
            <Form>
                <FormItem>
                    <FormItemTitle>
                        <TitlePadding>
                            아이디
                        </TitlePadding>
                    </FormItemTitle>
                    <FormItemBody>
                        {id}
                    </FormItemBody>
                </FormItem>
                <FormItem>
                    <PasswordItem>
                        <FormItemTitle>
                            <TitlePadding>
                                비밀번호
                            </TitlePadding>
                        </FormItemTitle>
                        <PasswordBody>
                            <Input/>
                        </PasswordBody>
                    </PasswordItem>
                    <PasswordItem>
                        <FormItemTitle>
                            <TitlePadding>
                                비밀번호 확인
                            </TitlePadding>
                        </FormItemTitle>
                        <PasswordBody>
                            <Input/>
                        </PasswordBody>
                    </PasswordItem>
                    <PasswordButtonBlock>
                        <Button
                            style={{
                                width: '40px',
                                height: '20px',
                                fontSize: '12px',
                                borderRadius: '2px'
                            }}
                            backgroundColor='fourthC'
                        >
                            수정
                        </Button>
                    </PasswordButtonBlock>
                </FormItem>
                <FormItem>
                    <FormItemTitle>
                        <TitlePadding>
                            이름
                        </TitlePadding>
                    </FormItemTitle>
                    <FormItemBody>
                        <Input
                            name='name'
                            onChange={onChange}
                            value={name}
                        />
                        <Button
                            style={{
                                width: '40px',
                                height: '20px',
                                fontSize: '12px',
                                borderRadius: '2px'
                            }}
                            backgroundColor='fourthC'
                        >
                            수정
                        </Button>
                    </FormItemBody>
                </FormItem>
                <FormItem
                    className='lastChild'
                >
                    <FormItemTitle>
                        <TitlePadding>
                            이메일
                        </TitlePadding>
                    </FormItemTitle>
                    <FormItemBody>
                        <Input
                            name='email'
                            value={email}
                            onChange={onChange}
                        />
                        <Button
                            style={{
                                width: '40px',
                                height: '20px',
                                fontSize: '12px',
                                borderRadius: '2px'
                            }}
                            backgroundColor='fourthC'
                        >
                            수정
                        </Button>
                    </FormItemBody>
                </FormItem>
            </Form>
        </MyPageFormBlock>
    )
}

export default MyPageForm;