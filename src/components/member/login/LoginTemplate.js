import React from 'react';
import styled,{css} from "styled-components";
import {Link} from "react-router-dom";

const LoginTemplateBlock = styled.div`
    width: 500px;
    height: 370px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
    position: relative;
`;

const LoginHeader = styled.div`
    background: white;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    position: absolute;
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${({theme}) => {
    const selected = theme.palette['border'];
    return css`
            border-bottom: 1px solid ${selected};
        `
    }}
`;

const HeaderMainText = styled.div`
    font-size: 70px;
    ${({theme}) => {
    const textColor = theme.palette['fourthC'];
    return css`
            color: ${textColor};
        `
    }}
`;

const HeaderSubText = styled.div`
    font-size 15px;
    ${({theme}) => {
    const textColor = theme.palette['gray'];
    return css`
            color: ${textColor};
        `
    }}
`;

const LoginMenu = styled.div`
    display: flex;
    justify-content: center;
    
    .firstChild{
        text-decoration: none;
        color: gray;
    }
    
    .secondChild{
        margin-left: 20px;
        text-decoration: none;
        color: gray;
    }
    
    .lastChild{
        margin-left: 20px;
        text-decoration: none;
        color: gray;
    }
`;

function LoginTemplate({children}) {
    return(
        <LoginTemplateBlock>
            <LoginHeader>
                <HeaderMainText>
                    REMA
                </HeaderMainText>
                <HeaderSubText>
                    Review Machine
                </HeaderSubText>
            </LoginHeader>
            {children}
            <LoginMenu>
                <Link
                    to="/"
                    className='firstChild'
                >
                    아이디 찾기
                </Link>
                <Link
                    to="/"
                    className='secondChild'

                >
                    비밀번호 찾기
                </Link>
                <Link
                    to='/member/memberForm'
                    className='lastChild'
                >
                    회원가입
                </Link>
            </LoginMenu>
        </LoginTemplateBlock>
    )
}

export default LoginTemplate;
