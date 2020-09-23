import React from 'react';
import styled from "styled-components";
import {TiFolderOpen, TiFolder, TiDocument} from "react-icons/ti";
import {IconContext} from "react-icons";

const ContainerBlock = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    position: relative;
    flex: 1, 1, auto;
`;

const Title = styled.div`
    font-size: 13px;
    padding-left: 5px;
    width: 100%;
`;

function NotesListItem({
    id, title, is_folder, is_review, onClickItem
                       }) {

    return (
        <ContainerBlock>
            <IconContext.Provider
                value={{
                    color: '#494949',
                    size: '16'
                }}
            >
                {
                    is_folder
                        ? <TiFolder/>
                        : <TiDocument/>
                }
                <Title
                    onClick={() => onClickItem(id)}
                >
                    {title}
                </Title>
            </IconContext.Provider>
        </ContainerBlock>
    )

}

export default NotesListItem;