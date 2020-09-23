import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import LoadingPage from "../../components/common/LoadingPage";
import styled from "styled-components";
import NotesList from "../../components/notes/NotesList";
import NotesListMenu from "../../components/notes/NotesListMenu";
import {ClickItem, GetFolderOrderList, GetNotesList} from "../../modules/notes/notesList";
import {ChangeAddFolderContent, OpenPopUp} from "../../modules/popUp";


const ContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
`;

function NotesContainer() {

    const dispatch = useDispatch();

    const notesList =
        useSelector(state => state.notesList.notesList);
    const folderOrder =
        useSelector(state => state.notesList.folderOrder);
    const currentClick =
        useSelector(state => state.notesList.currentClick);

    useEffect(() => {
        dispatch(GetNotesList());
        dispatch(GetFolderOrderList());
    }, [dispatch]);

    if(notesList.loading && !notesList.data) return <LoadingPage/>;
    if(folderOrder.loading && !folderOrder.data) return <LoadingPage/>;
    if(
        !notesList.data
        || !folderOrder.data
    ){
        return null;
    }

    const onClickBackground = () => {
        dispatch(ClickItem({current:'background'}));
    };

    const onClickItem = (id) => {
        console.log(id);
        dispatch(ClickItem({current:id}));
    };

    const openAddFolder = () => {
        if(currentClick.current === 'background'){
            dispatch(ChangeAddFolderContent({is_first:1}));
        }
        dispatch(OpenPopUp());
    };

    return(
        <ContainerBlock>
            <NotesList
                notesList={notesList}
                folderOrder={folderOrder}
                onClickBackground={onClickBackground}
                onClickItem={onClickItem}
            >
                <NotesListMenu
                    onClickAddFolder={openAddFolder}
                />
            </NotesList>
        </ContainerBlock>
    )
}

export default NotesContainer;