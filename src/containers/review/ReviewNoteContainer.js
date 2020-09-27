import React from 'react';
import styled from "styled-components";
import ReviewNote from "../../components/review/ReviewNote";


const ContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: auto;
    box-sizing: border-box;
`;

function ReviewNoteContainer() {


    return (
        <ContainerBlock>
            <ReviewNote/>
        </ContainerBlock>
    )
}

export default ReviewNoteContainer;