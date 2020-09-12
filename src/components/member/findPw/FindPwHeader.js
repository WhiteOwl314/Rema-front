import React from 'react';
import styled,{css} from 'styled-components';
import {BiArrowBack} from "react-icons/bi";
import {IconContext} from "react-icons";

const FindPwHeaderBlock = styled.div`
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background: white;
    position: absolute;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    ${({theme})=>{
    const selected = theme.palette['border'];
    return css`
            border-bottom: 1px solid ${selected};
        `
}}
`;

const HeaderText = styled.div`
    margin-left: 10px;
`;



function FindPwHeader(
    {history}
) {
    return(
        <FindPwHeaderBlock>
            <IconContext.Provider
                value={{
                    style:{
                        cursor: 'pointer',
                        marginLeft: '15px'
                    }
                }}
            >
                <BiArrowBack
                    onClick={() => history.push('/member/login')}
                />
            </IconContext.Provider>
            <HeaderText>
                비밀번호 찾기
            </HeaderText>

        </FindPwHeaderBlock>
    )
}

export default FindPwHeader;