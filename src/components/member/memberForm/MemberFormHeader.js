import React from 'react';
import styled,{css} from 'styled-components';
import {BiArrowBack} from "react-icons/bi";
import {IconContext} from "react-icons";

const MemberFormHeaderBlock = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    ${({theme})=>{
        const selected = theme.palette['gray'];
        return css`
            border-bottom: 1px solid ${selected};
        `
    }}
`;

const HeaderText = styled.div`
    margin-left: 10px;
`;



function MemberFormHeader(
    {history}
) {
    return(
        <MemberFormHeaderBlock>
            <IconContext.Provider
                value={{
                    style:{
                        cursor: 'pointer',
                        marginLeft: '10px'
                    }
                }}
            >
                <BiArrowBack
                    onClick={() => history.push('/member/login')}
                />
            </IconContext.Provider>
            <HeaderText>
                회원가입
            </HeaderText>

        </MemberFormHeaderBlock>
    )
}

export default MemberFormHeader;