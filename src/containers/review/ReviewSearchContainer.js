import React from 'react';
import styled from "styled-components";
import Button from "../../lib/css/Button";
import {useDispatch} from "react-redux";
import {ChangeKind, OpenPopUp} from "../../modules/popUp";


const ContainerBlock = styled.div`
    position: absolute;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background:white;
    z-index: 800;
`;

const HeaderMenu = styled.div`
    width: 100px;
    height: 100%;
    margin-right: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

function ReviewSearchContainer() {

    const dispatch = useDispatch();

    const onClick= () => {
        dispatch(ChangeKind('SearchReviewDate'));
        dispatch(OpenPopUp());
    };

    return (
        <ContainerBlock>
            <HeaderMenu>
                <Button
                    size='medium'
                    backgroundColor='fourthC'
                    style={{
                        width: '50px',
                        height: '23px',
                        fontSize: '13px'
                    }}
                    onClick={onClick}
                >
                    검색
                </Button>
            </HeaderMenu>
        </ContainerBlock>
    )
}

export default ReviewSearchContainer;