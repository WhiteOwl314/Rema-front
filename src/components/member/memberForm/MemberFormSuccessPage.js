import React from 'react';
import styled,{css} from 'styled-components';
import {RiTaskLine} from "react-icons/ri";
import {IconContext} from "react-icons";
import Button from "../../../lib/css/Button";

const MemberFormSuccessPageBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;
    
    .buttonMargin{
        margin-left: 20px;
    }
`;

const SuccessText = styled.div`
    margin-left: 10px;
    font-size: 16px;
`;

function MemberFormSuccessPage({history}) {

    return(
        <MemberFormSuccessPageBlock>
            <IconContext.Provider
                value={{
                    color: '#3B77AF',
                    size: '20'
                }}
            >
                <RiTaskLine/>
            </IconContext.Provider>
            <SuccessText>
                성공했습니다 이메일 인증 후 로그인해주세요
            </SuccessText>
            <div
                className={'buttonMargin'}
            >
                <Button
                    size='small'
                    backgroundColor='fourthC'
                    color='white'
                    onClick={() => history.push('/member/login')}
                >
                    로그인
                </Button>
            </div>
        </MemberFormSuccessPageBlock>
    )
}

export default MemberFormSuccessPage;