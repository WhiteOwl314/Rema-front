import React from 'react';
import styled from "styled-components";
import {IconContext} from "react-icons";
import {BiErrorCircle} from "react-icons/bi";

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


function Page404() {
    return (
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
                페이지가 존재하지 않습니다.
            </ErrorText>
        </ErrorPageBlock>
    )
}

export default Page404;