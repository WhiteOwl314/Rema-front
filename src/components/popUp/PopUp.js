import React from 'react';
import styled,{css} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import AddFolderPopUpWindow from "./AddFolderPopUpWindow";
import {
    ChangeAddFolderContent,
    ChangeAddNoteContent, ChangeReviewDateContent,
    ChangeUpdateNameContent,
    ClearContent,
    ClosePopUp
} from "../../modules/popUp";
import {AddFolder, AddNote, GetFolderOrderList, GetNotesList, UpdateName} from "../../modules/notes/notesList";
import AddNotePopUpWindow from "./AddNotePopUpWindow";
import UpdateNamePopUpWindow from "./UpdateNamePopUpWindow";
import UpdateReviewDatePopUpWindow from "./UpdateReviewDatePopUpWindow";
import {UpdateReviewDate} from "../../modules/review/review";


const Mask = styled.div`
    ${({isOpen}) => {
        return css`
            display: none;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 999;
            background-color: #000000;
            opacity: 0.1;
            
            ${
                isOpen &&
                css`
                    display: block;
                `
            }
        `;
    }}
`;

const LayerPopBlock = styled.div`
    ${({isOpen}) => {
        return css`
            display: none;
            position: absolute;
            width: 100%;
            height:100%;
            z-index: 1000;
            opacity: 1;
            ${
                isOpen &&
                css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                `
            }
        `;
        }}
`;

const LayerPopWindow = styled.div`
    width: 500px;
    height: 150px;
    background-color: white;
    color: 3B3B3B;
`;

function PopUp() {

    const dispatch = useDispatch();

    const popUpState = useSelector(state => state.popUp);
    const {isOpen} = popUpState.window;
    const content = popUpState.content;
    const {kind} = popUpState.kind;


    let _kind = '';

    if(kind){
        _kind = kind.kind;
    }

    const onClickCancle = () => {
        dispatch(ClosePopUp());
        dispatch(ClearContent());
    };

    const onChangeAddFolder = (e) => {
        const {name, value} = e.target;
        dispatch(ChangeAddFolderContent({[name]:value}));
    };

    const onChangeAddNote = (e) => {
        const {name, value} = e.target;
        dispatch(ChangeAddNoteContent({[name]:value}));
    };
    const onChangeUpdateName = (e) => {
        const {name, value} = e.target;
        dispatch(ChangeUpdateNameContent({[name]:value}));
    };

    const onChangeReviewDate = (e) => {
        const {name, value} = e.target;
        dispatch(ChangeReviewDateContent({[name]:value}));
    };

    const onClickAddFolder = async () => {
        await dispatch(AddFolder());
    };

    const onClickAddNote = async () => {
        await dispatch(AddNote());
    };

    const onClickUpdateName = async () => {
        await dispatch(UpdateName());
    };

    const onUpdateReviewDate = async () => {
        await dispatch(UpdateReviewDate());
    };

    return (
        <>
            <Mask isOpen={isOpen}/>
            <LayerPopBlock isOpen={isOpen}>
                {_kind === 'addNotesList'
                    && <AddFolderPopUpWindow
                            onClickCancle={onClickCancle}
                            onChange={onChangeAddFolder}
                            content={content}
                            onSave={onClickAddFolder}
                        />
                }
                {_kind === 'addNote'
                    && <AddNotePopUpWindow
                        onClickCancle={onClickCancle}
                        onChange={onChangeAddNote}
                        content={content}
                        onSave={onClickAddNote}
                    />
                }
                {_kind === 'updateName'
                    && <UpdateNamePopUpWindow
                        onClickCancle={onClickCancle}
                        onChange={onChangeUpdateName}
                        content={content}
                        onSave={onClickUpdateName}
                    />
                }
                {_kind === 'changeReviewDate'
                && <UpdateReviewDatePopUpWindow
                    onClickCancle={onClickCancle}
                    onChange={onChangeReviewDate}
                    content={content}
                    onSave={onUpdateReviewDate}
                />
                }
            </LayerPopBlock>
        </>
    )
}

export default PopUp;