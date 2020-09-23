import React from 'react';
import MainHeader from "../../components/main/MainHeader";
import MainSide from "../../components/main/MainSide";
import styled from 'styled-components'
import {Logout} from "../../modules/member/member";
import {useDispatch} from "react-redux";
import PopUp from "../../components/popUp/PopUp";

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

    const dispatch = useDispatch();

    const onClickLogout = () => {
        dispatch(Logout());
    }

    return(
        <MainContainerBlock>
            <PopUp/>
            <MainHeader
                history={history}
                onClickLogout={onClickLogout}
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