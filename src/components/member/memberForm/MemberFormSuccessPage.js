import React from 'react';
import styled from 'styled-components';
import {RiTaskLine} from "react-icons/ri";
import {IconContext} from "react-icons";

const MemberFormSuccessPageBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

const SuccessText = styled.div`
    margin-left: 10px;
    font-size: 16px;
`;


function MemberFormSuccessPage() {
    return(
        <MemberFormSuccessPageBlock>
            <IconContext.Provider
                value={{
                    color: 'green',
                    size: '20'
                }}
            >
                <RiTaskLine/>
            </IconContext.Provider>
            <SuccessText>
                성공했습니다 이메일 인증 후 로그인해주세요
            </SuccessText>
        </MemberFormSuccessPageBlock>
    )
}

export default MemberFormSuccessPage;