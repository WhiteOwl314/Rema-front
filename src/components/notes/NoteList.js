import React from 'react';
import styled from "styled-components";


const NoteListBlock = styled.div`
    width: 200px;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    background: #f7f7f7;
    border-right: 1px solid #e9ecef;
    position: relative;
    padding-bottom: 30px;
`;

function NoteList({children}) {
    return(
        <NoteListBlock>
            {children}
        </NoteListBlock>
    )
}

export default NoteList;