import React from 'react';
import styled from "styled-components";
import {
    TiFolderAdd,
    TiFolderOpen,
    TiFolder,
    TiDocumentAdd
} from "react-icons/ti";
import {CgRename} from "react-icons/cg";
import {AiOutlineDelete} from "react-icons/ai";
import {IconContext} from "react-icons";
import {darken} from 'polished';

const NotesListMenuBlock = styled.div`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    background: white;
    position: absolute;
    bottom: 0px;
    border-top: 1px solid #e9ecef;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const IconContainer = styled.div`
    cursor: pointer;
    border-radius: 5px;
    width: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:hover{
        background: ${darken(0.1, 'white')};
    }
    &:active{
        background: ${darken(0.2, 'white')};
    }
`;

function NotesListMenu({onClickAddFolder}) {
    return (
        <NotesListMenuBlock>
            <IconContext.Provider
                value={{
                    color: '#494949',
                    size: '18'
                }}
            >
                <IconContainer
                    onClick={onClickAddFolder}
                >
                    <TiFolderAdd/>
                </IconContainer>
                <IconContainer>
                    <TiDocumentAdd/>
                </IconContainer>
                <IconContainer>
                    <CgRename/>
                </IconContainer>
                <IconContainer>
                    <AiOutlineDelete/>
                </IconContainer>
            </IconContext.Provider>
        </NotesListMenuBlock>
    )
}

export default NotesListMenu;
