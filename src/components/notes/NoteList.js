import React from 'react';
import styled from "styled-components";


const NoteListBlock = styled.div`
    width: 100px;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    background: blue;
`;

function NoteList() {
    return(
        <NoteListBlock>
        </NoteListBlock>
    )
}

export default NoteList;