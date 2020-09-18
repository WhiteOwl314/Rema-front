import React,{useRef}  from 'react';
import styled,{css} from "styled-components";
import LoadingPage from "../../common/LoadingPage";
import Button from "../../../lib/css/Button";
import {useSelector} from "react-redux";

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

const ButtonBlock = styled.div`
    position: absolute;
    right: 0;
    margin-top: 5px;
`;

const Input = styled.input`
    width: 150px;
    box-sizing: border-box;
    font-size: 11px;
    outline: none;
    border-radius: 3px;
    background-color: #f7f7f7;
    border: 1px solid #e2e2e2;
    padding: 2px 0px 2px 5px;
    
    &::placeholder{
        font-weight: bold;
        opacity: 0.6;
    }
`;

function MyPageForm({
                        getMemberState,
    onChange,
                        inputChangeState,
                        updateButtonState,
                        onUpdateButtonClick,
                        onSubmit,
                        onSaveButtonClick
}) {

    const pwInput = useRef();
    const pw2Input = useRef();

    const updatePwState =
        useSelector(state => state.mypage.updatePw);
    const updateEmailState =
        useSelector(state => state.mypage.updateEmail);
    const updateNameState =
        useSelector(state => state.mypage.updateName);
    const {id, pw, pw2, name, email} = inputChangeState;
    const {canChangePw, canChangeName, canChangeEmail} = updateButtonState;

    if(getMemberState.loading) return <LoadingPage/>;
    if(updatePwState.loading) return <LoadingPage/>;
    if(updateEmailState.loading) return <LoadingPage/>;
    if(updateNameState.loading) return <LoadingPage/>;

    return(
        <MyPageFormBlock>
            <Form
                onSubmit={onSubmit}
            >
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
                    {
                        canChangePw
                            ? (
                                <FormItem>
                                    <PasswordItem>
                                        <FormItemTitle>
                                            <TitlePadding>
                                                새 비밀번호
                                            </TitlePadding>
                                        </FormItemTitle>
                                        <PasswordBody>
                                            <Input
                                                name="pw"
                                                type="password"
                                                onChange={onChange}
                                                value={pw}
                                            />
                                        </PasswordBody>
                                    </PasswordItem>
                                    <PasswordItem>
                                        <FormItemTitle>
                                            <TitlePadding>
                                                비밀번호 확인
                                            </TitlePadding>
                                        </FormItemTitle>
                                        <PasswordBody>
                                            <Input
                                                name="pw2"
                                                type="password"
                                                onChange={onChange}
                                                value={pw2}
                                                ref={pw2Input}
                                            />
                                        </PasswordBody>
                                    </PasswordItem>
                                    <ButtonBlock>
                                        <Button
                                            style={{
                                                width: '40px',
                                                height: '20px',
                                                fontSize: '12px',
                                                borderRadius: '2px'
                                            }}
                                            backgroundColor='fourthC'
                                            onClick={() => onUpdateButtonClick({canChangePw: false})}
                                        >
                                            취소
                                        </Button>
                                    </ButtonBlock>
                                    <ButtonBlock
                                        style={{
                                            right: '50px'
                                        }}
                                    >
                                        {
                                            pw2 !== ''
                                            && pw !== ''
                                            && pw !== pw2
                                                ? (

                                                    <Button
                                                        style={{
                                                            width: '40px',
                                                            height: '20px',
                                                            fontSize: '12px',
                                                            borderRadius: '2px',
                                                        }}
                                                        backgroundColor='fourthC'
                                                        onClick={
                                                            () => {
                                                                alert('비밀번호가 일치하지 않습니다.');
                                                                pw2Input.current.focus();
                                                            }
                                                        }
                                                    >
                                                        저장
                                                    </Button>
                                                )
                                                : (

                                                    <Button
                                                        style={{
                                                            width: '40px',
                                                            height: '20px',
                                                            fontSize: '12px',
                                                            borderRadius: '2px',
                                                        }}
                                                        backgroundColor='fourthC'
                                                        onClick={
                                                            () => onSaveButtonClick('pw')
                                                        }
                                                    >
                                                        저장
                                                    </Button>
                                                )
                                        }
                                    </ButtonBlock>
                                </FormItem>

                            )
                            : (
                                <FormItem>
                                    <PasswordItem>
                                        <FormItemTitle>
                                            <TitlePadding>
                                                비밀번호
                                            </TitlePadding>
                                        </FormItemTitle>
                                        <PasswordBody>
                                            ****
                                        </PasswordBody>
                                    </PasswordItem>
                                    <ButtonBlock>
                                        <Button
                                            style={{
                                                width: '40px',
                                                height: '20px',
                                                fontSize: '12px',
                                                borderRadius: '2px'
                                            }}
                                            backgroundColor='fourthC'
                                            onClick={() => onUpdateButtonClick({canChangePw: true})}
                                        >
                                            수정
                                        </Button>
                                    </ButtonBlock>
                                </FormItem>
                            )
                    }
                <FormItem>
                    <FormItemTitle>
                        <TitlePadding>
                            이름
                        </TitlePadding>
                    </FormItemTitle>
                    {
                        canChangeName
                            ?(
                                <FormItemBody>
                                    <Input
                                        name='name'
                                        onChange={onChange}
                                        value={name}
                                    />
                                    <ButtonBlock
                                        style={{
                                            right: '50px'
                                        }}
                                    >
                                        <Button
                                            style={{
                                                width: '40px',
                                                height: '20px',
                                                fontSize: '12px',
                                                borderRadius: '2px',
                                            }}
                                            backgroundColor='fourthC'
                                            onClick={() => onSaveButtonClick('name')}
                                        >
                                            저장
                                        </Button>
                                    </ButtonBlock>
                                    <ButtonBlock>
                                        <Button
                                            style={{
                                                width: '40px',
                                                height: '20px',
                                                fontSize: '12px',
                                                borderRadius: '2px'
                                            }}
                                            backgroundColor='fourthC'
                                            onClick={() => onUpdateButtonClick({canChangeName: false})}
                                        >
                                            취소
                                        </Button>
                                    </ButtonBlock>
                                </FormItemBody>
                            )
                            :(
                                <FormItemBody>
                                    <Input
                                        name='name'
                                        onChange={onChange}
                                        value={name}
                                        disabled
                                    />
                                    <Button
                                        style={{
                                            width: '40px',
                                            height: '20px',
                                            fontSize: '12px',
                                            borderRadius: '2px'
                                        }}
                                        backgroundColor='fourthC'
                                        onClick={() => onUpdateButtonClick({canChangeName: true})}
                                    >
                                        수정
                                    </Button>
                                </FormItemBody>
                            )
                    }
                </FormItem>
                <FormItem
                    className='lastChild'
                >
                    <FormItemTitle>
                        <TitlePadding>
                            이메일
                        </TitlePadding>
                    </FormItemTitle>
                    {
                        canChangeEmail
                            ?(

                                <FormItemBody>
                                    <Input
                                        name='email'
                                        value={email}
                                        onChange={onChange}
                                    />
                                    <ButtonBlock
                                        style={{
                                            right: '50px'
                                        }}
                                    >
                                        <Button
                                            style={{
                                                width: '40px',
                                                height: '20px',
                                                fontSize: '12px',
                                                borderRadius: '2px',
                                            }}
                                            backgroundColor='fourthC'
                                            onClick={() => onSaveButtonClick('email')}
                                        >
                                            저장
                                        </Button>
                                    </ButtonBlock>
                                    <ButtonBlock>
                                        <Button
                                            style={{
                                                width: '40px',
                                                height: '20px',
                                                fontSize: '12px',
                                                borderRadius: '2px'
                                            }}
                                            backgroundColor='fourthC'
                                            onClick={() => onUpdateButtonClick({canChangeEmail: false})}
                                        >
                                            취소
                                        </Button>
                                    </ButtonBlock>
                                </FormItemBody>
                            )
                            :(
                                <FormItemBody>
                                    <Input
                                        name='email'
                                        value={email}
                                        onChange={onChange}
                                        disabled
                                    />
                                    <Button
                                        style={{
                                            width: '40px',
                                            height: '20px',
                                            fontSize: '12px',
                                            borderRadius: '2px'
                                        }}
                                        backgroundColor='fourthC'
                                        onClick={() => onUpdateButtonClick({canChangeEmail: true})}
                                    >
                                        수정
                                    </Button>
                                </FormItemBody>
                            )
                    }
                </FormItem>
            </Form>
        </MyPageFormBlock>
    )
}

export default MyPageForm;