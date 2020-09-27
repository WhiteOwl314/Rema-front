import React from 'react';
import styled, {css} from "styled-components";
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
`;

const NoteHeader = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
`;

const NoteHeaderTitle = styled.div.attrs({
})`
    width: 100%;
    font-size: 27px;
    font-weight: bold;
    outline: none;
    border: none;
`;

function ReviewNote() {

    const noteInfo = useSelector(state => state.note.getNote);
    const currentClick = useSelector(state => state.reviewDetail.currentClick.current);

    let currentNoteInfo = null;

    if(currentClick === '') return null;
    if(noteInfo[currentClick]){
        if(noteInfo[currentClick].data){
            currentNoteInfo = noteInfo[currentClick].data;
            console.log(currentNoteInfo);
        }
    }

    return(
        <>
            {
                currentNoteInfo === null
                    ? null
                    :(

                        <NoteViewBlock>
                            <Body>
                                <NoteTemplate>
                                    <NoteHeader>
                                        <NoteHeaderTitle>
                                            {currentNoteInfo.title}
                                        </NoteHeaderTitle>
                                    </NoteHeader>
                                    <div>
                                        {currentNoteInfo.content}
                                    </div>
                                </NoteTemplate>
                            </Body>
                        </NoteViewBlock>
                    )
            }
        </>
    )
}

export default ReviewNote;