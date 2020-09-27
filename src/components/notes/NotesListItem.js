import React from 'react';
import styled from "styled-components";
import {TiFolderOpen, TiFolder, TiDocument} from "react-icons/ti";
import {IconContext} from "react-icons";
import {useDispatch, useSelector} from "react-redux";
import {CloseFolder, OpenFolder} from "../../modules/notes/notesList";

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
    cursor: pointer;
`;

const IconContainer = styled.div`
    cursor: pointer;
`;

const InContentContainer = styled.div`
    width: 100%;
    padding-left: 15px;
    box-sizing: border-box;
`;



function NotesListItem({
    item, onClickItem, folderOrder, notesList
                       }) {
    const dispatch = useDispatch();

    const id = item.id;
    const title = item.title;
    const is_folder = item.is_folder;
    let isOpen = false;

    const isOpenState = useSelector(state => state.notesList.openFolder);

    if(isOpenState[id]){
        isOpen = isOpenState[id].open;
    }

    const inNotsList = [];

    if(isOpen){
        //이 폴더에 속한 notesList.id 가져오기
        const inIdList = folderOrder
            .filter(folderOrder => folderOrder.folder_id === id)
            .map(folderOrder => folderOrder.in_id);
        for(let i in inIdList){
            const inNotesItem = notesList.filter(item => item.id === inIdList[i])[0];
            inNotsList.push(inNotesItem);
        }
    }

    const currentClick =
        useSelector(state => state.notesList.currentClick);

    const isActive = currentClick.current === id;

    console.log(isActive);

    return (
        <>
            <ContainerBlock
            >
                <IconContext.Provider
                    value={{
                        color: '#494949',
                        size: '16',
                        cursor: 'pointer'
                    }}
                >
                    {
                        is_folder
                            ? isOpen
                                ? <IconContainer onClick={() => dispatch(CloseFolder(id))}
                                ><TiFolderOpen/></IconContainer>
                                : <IconContainer onClick={() => dispatch(OpenFolder(id))}
                                ><TiFolder/></IconContainer>
                            : <IconContainer><TiDocument/></IconContainer>
                    }
                    <Title
                        onClick={() => onClickItem(id)}
                        style={
                            {color: isActive? '#3B77AF' : 'black'}
                        }
                    >
                        {title}
                    </Title>
                </IconContext.Provider>
            </ContainerBlock>
            {
                isOpen
                && inNotsList.map(item => {
                    return (
                        <InContentContainer
                            key={item.id}
                        >
                            <NotesListItem
                                item={item}
                                onClickItem={onClickItem}
                                folderOrder={folderOrder}
                                notesList={notesList}
                                isOpen={false}
                            />
                        </InContentContainer>
                    )
                })
            }
        </>
    )

}

export default NotesListItem;