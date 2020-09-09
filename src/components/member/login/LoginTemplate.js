import React from 'react';
import styled, {css} from "styled-components";

const LoginTemplateBlock = styled.div`
`;

const LoginHeader = styled.div`
`;

const LoginMenu = styled.div`
`;

function LoginTemplate({children}) {
    return(
        <LoginTemplateBlock>
            <LoginHeader>
                REMA
            </LoginHeader>
            {children}
            <LoginMenu>
                아이디 찾기
                비밀번호 찾기
            </LoginMenu>
        </LoginTemplateBlock>
    )
}

export default LoginTemplate;
