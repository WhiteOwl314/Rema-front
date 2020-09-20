import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GetFolderList} from "../../modules/notes/folder";
import {GetNoteList} from "../../modules/notes/note";
import {GetFolderOrderList} from "../../modules/notes/folderOrder";
import LoadingPage from "../../components/common/LoadingPage";
import styled from "styled-components";
import NoteList from "../../components/notes/NoteList";


const ContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
`;

function NotesContainer() {

    const dispatch = useDispatch();

    const getFolderListState =
        useSelector(state => state.folder.getFolderList);
    const getNoteListState =
        useSelector(state => state.note.getNoteList);
    const getFolderOrderListState =
        useSelector(state => state.folderOrder.getFolderOrderList);

    useEffect(() => {
        dispatch(GetFolderList());
        dispatch(GetNoteList());
        dispatch(GetFolderOrderList());
    }, [dispatch]);

    if(getFolderListState.loading && !getFolderListState.data) return <LoadingPage/>;
    if(getNoteListState.loading && !getNoteListState.data) return <LoadingPage/>;
    if(getFolderOrderListState.loading && !getFolderOrderListState.data) return <LoadingPage/>;
    if(
        !getFolderListState.data
        || !getNoteListState.data
        || !getFolderOrderListState.data
    ){
        return null;
    }

    return(
        <ContainerBlock>
            <NoteList/>
        </ContainerBlock>
    )
}

export default NotesContainer;