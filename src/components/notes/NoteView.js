import React from 'react';
import styled,{css} from "styled-components";
import Button from "../../lib/css/Button";
import NoteReviewDate from "./NoteReviewDate";
import NoteTextArea from "./NoteTextArea";
import {useSelector} from "react-redux";

const NoteViewBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Header = styled.div`
    ${({theme}) => {
    const borderBottomColor = theme.palette['border'];
    return css`
            border-bottom: 1px solid ${borderBottomColor};
        `;
    }}
    position: absolute;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background:white;
`;

const HeaderMenu = styled.div`
    width: 100px;
    height: 100%;
    margin-right: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Body = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    overflow: auto;
`;

const NoteTemplate = styled.div`
    width: 100%;
    padding-top: 30px;
`;

const NoteHeader = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
`;

const NoteHeaderTitle = styled.input.attrs({
    placeholder: '제목'
})`
    width: 100%;
    font-size: 27px;
    font-weight: bold;
    outline: none;
    border: none;
`;

function NoteView({
                      onChangeNote,updateNote,onAddReviewDate,openUpdateReviewDate,onDeleteReviewDate
}) {

    const noteInfo = useSelector(state => state.note.getNote);
    const currentClick = useSelector(state => state.notesList.currentClick.current);

    let is_folder = 1;
    let currentNoteInfo = null;

    if(currentClick === 'background') return null;
    if(noteInfo[currentClick]){
        if(noteInfo[currentClick].data){
            if(noteInfo[currentClick].data.is_folder===0){
                is_folder = 0;
                currentNoteInfo = noteInfo[currentClick].data;
                console.log(currentNoteInfo);
            }
        }
    }

    return (
        <>
            {
                is_folder === 1
                    ? null
                    :(
                        <NoteViewBlock>
                            <Header>
                                <HeaderMenu>
                                    <Button
                                        size='medium'
                                        backgroundColor='fourthC'
                                        style={{
                                            width: '50px',
                                            height: '23px',
                                            fontSize: '13px'
                                        }}
                                        onClick={updateNote}
                                    >
                                        저장
                                    </Button>
                                </HeaderMenu>
                            </Header>
                            <Body>
                                <NoteTemplate>
                                    <NoteHeader>
                                        <NoteHeaderTitle
                                            name={'title'}
                                            value={currentNoteInfo.title}
                                            onChange={onChangeNote}
                                        />
                                    </NoteHeader>
                                    <NoteReviewDate
                                        currentClick={currentClick}
                                        onAddReviewDate={onAddReviewDate}
                                        openUpdateReviewDate={openUpdateReviewDate}
                                        onDeleteReviewDate={onDeleteReviewDate}
                                    />
                                    <NoteTextArea
                                        noteContent={currentNoteInfo.content}
                                        onChangeNote={onChangeNote}
                                    />
                                </NoteTemplate>
                            </Body>
                        </NoteViewBlock>
                    )
            }
        </>
    )
}

export default NoteView;
