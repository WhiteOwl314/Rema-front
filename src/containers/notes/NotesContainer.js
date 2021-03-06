import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import LoadingPage from "../../components/common/LoadingPage";
import styled from "styled-components";
import NotesList from "../../components/notes/NotesList";
import NotesListMenu from "../../components/notes/NotesListMenu";
import {ClickItem, Delete, GetFolderOrderList, GetNotesList} from "../../modules/notes/notesList";
import {ChangeAddFolderContent, ChangeAddNoteContent, ChangeKind, OpenPopUp} from "../../modules/popUp";
import NoteView from "../../components/notes/NoteView";
import {ChangeNote, GetNote, UpdateNote} from "../../modules/notes/note";
import {AddReviewDate, ClickReviewDate, DeleteReviewDate, GetReviewDateList} from "../../modules/review/review";


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
        dispatch(GetNote(id));
        dispatch(GetReviewDateList(id));
    };

    const openAddFolder = () => {
        if(currentClick.current === 'background'){
            dispatch(ChangeAddFolderContent({is_first:1}));
        }
        dispatch(ChangeKind('addNotesList'));
        dispatch(OpenPopUp());
    };

    const openAddNote = () => {
        if(currentClick.current === 'background'){
            dispatch(ChangeAddNoteContent({is_first:1}));
        }
        dispatch(ChangeKind('addNote'));
        dispatch(OpenPopUp());
    };

    const openUpdateName = () => {
        if(currentClick.current !== 'background'){
            dispatch(ChangeKind('updateName'));
            dispatch(OpenPopUp());
        }
    };

    const onClickDelete = () => {
        if(currentClick.current !== 'background'){
            dispatch(Delete());
        }
    };

    const onChangeNote = (e) => {
        const{name, value} = e.target;
        const formState = {
            id: currentClick.current,
            payload: {[name]:value}
        };
        dispatch(ChangeNote(formState));
    };

    const updateNote = () => {
        dispatch(UpdateNote());
    };

    const onAddReviewDate = (note_id) => {
        dispatch(AddReviewDate(note_id));
    };

    const openUpdateReviewDate = (id) => {
        dispatch(ClickReviewDate({current:id}));
        dispatch(ChangeKind('changeReviewDate'));
        dispatch(OpenPopUp());
    };


    const onDeleteReviewDate = async (id) => {
        await dispatch(ClickReviewDate({current:id}));
        await dispatch(DeleteReviewDate());
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
                    onClickAddNote={openAddNote}
                    onClickUpdateName={openUpdateName}
                    onClickDelete={onClickDelete}
                />
            </NotesList>
            <NoteView
                onChangeNote={onChangeNote}
                updateNote={updateNote}
                onAddReviewDate={onAddReviewDate}
                openUpdateReviewDate={openUpdateReviewDate}
                onDeleteReviewDate={onDeleteReviewDate}
            />
        </ContainerBlock>
    )
}

export default NotesContainer;