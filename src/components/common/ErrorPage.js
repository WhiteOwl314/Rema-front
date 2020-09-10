import React from 'react';
import styled from 'styled-components';
import {BiErrorCircle} from "react-icons/bi";
import {IconContext} from "react-icons";

const ErrorPageBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

const ErrorText = styled.div`
    margin-left: 10px;
    font-size: 16px;
`;


function ErrorPage() {
    return(
        <ErrorPageBlock>
            <IconContext.Provider
                value={{
                    color: 'red',
                    size: '18'
                }}
            >
                <BiErrorCircle/>
            </IconContext.Provider>
            <ErrorText>
                실패했습니다 다시 시도해주세요
            </ErrorText>
        </ErrorPageBlock>
    )
}

export default ErrorPage;