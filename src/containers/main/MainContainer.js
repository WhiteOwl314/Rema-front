import React from 'react';
import MainHeader from "../../components/main/MainHeader";
import MainSide from "../../components/main/MainSide";
import styled from 'styled-components'

const MainContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
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
            {children}
        </MainContainerBlock>
    )
}

export default MainContainer;