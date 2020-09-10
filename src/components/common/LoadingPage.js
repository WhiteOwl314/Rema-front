import React from 'react';
import styled from 'styled-components';
import LoadingIcon from "../../lib/css/LoadingIcon";

const LoadingPageBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

const LoadingText = styled.div`
    margin-left: 10px;
    font-size: 16px;
`;


function LoadingPage() {
    return(
        <LoadingPageBlock>
            <LoadingIcon
                width='17px'
            />
            <LoadingText>
                처리중입니다 잠시만기다려주세요
            </LoadingText>
        </LoadingPageBlock>
    )
}

export default LoadingPage;