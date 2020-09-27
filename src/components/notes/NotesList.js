import React from 'react';
import styled from "styled-components";
import NotesListItem from "./NotesListItem";
import {useSelector} from "react-redux";


const NotesListBlock = styled.div`
    width: 200px;
    height: 100%;
    box-sizing: border-box;
    background: #f7f7f7;
    border-right: 1px solid #e9ecef;
    position: relative;
    padding-bottom: 30px;
`;

const Item = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #e9ecef;
`;

const NotesListItemContainer= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const Background= styled.div`
    width: 100%;
    height: 100%;
`;

function NotesList({
                      children,
                      notesList,
                      folderOrder,
                       onClickBackground,
                       onClickItem
}) {

    const currentClick =
        useSelector(state => state.notesList.currentClick);

    return(
        <NotesListBlock>
            <NotesListItemContainer
            >
                {
                    notesList.data &&
                    notesList.data.filter(item => item.is_first === 1)
                        .map(item => {
                            return (
                                <NotesListItem
                                    item={item}
                                    key={item.id}
                                    onClickItem={onClickItem}
                                    folderOrder={folderOrder.data}
                                    notesList={notesList.data}
                                    isOpen={true}
                                    isActive={currentClick.current === item.id}
                                />
                            )
                        })
                }
                <Background
                    onClick={onClickBackground}
                />
            </NotesListItemContainer>
            {children}
        </NotesListBlock>
    )
}

export default NotesList;