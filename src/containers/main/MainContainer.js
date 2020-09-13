import React from 'react';
import MainHeader from "../../components/main/MainHeader";
import MainSide from "../../components/main/MainSide";
import styled from 'styled-components'

const MainContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const MainContent = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    padding-top: 50px;
    padding-left: 50px;
    box-sizing: border-box;
`;


function MainContainer({history,children}) {

    return(
        <MainContainerBlock>
            <MainHeader
                history={history}
            />
            <MainSide
                history={history}
            />
            <MainContent>
                {children}
            </MainContent>
        </MainContainerBlock>
    )
}

export default MainContainer;