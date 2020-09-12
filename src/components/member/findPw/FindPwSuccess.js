import React from 'react';
import styled from 'styled-components';
import {RiTaskLine} from "react-icons/ri";
import {IconContext} from "react-icons";
import Button from "../../../lib/css/Button";

const FIndPwSuccessBlock = styled.div`
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

function FindPwSuccess({history}) {

    console.log(history);

    return(
        <FIndPwSuccessBlock>
            <IconContext.Provider
                value={{
                    color: '#3B77AF',
                    size: '20'
                }}
            >
                <RiTaskLine/>
            </IconContext.Provider>
            <SuccessText>
                이메일로 임시 비밀번호를 보냈습니다.
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
        </FIndPwSuccessBlock>
    )
}

export default FindPwSuccess;