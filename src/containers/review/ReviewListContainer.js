import React from 'react';
import styled from "styled-components";
import ReviewList from "../../components/review/ReviewList";


const ContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: auto;
    padding-top: 30px;
    box-sizing: border-box;
`;

function ReviewListContainer() {


    return (
        <ContainerBlock>
            <ReviewList/>
        </ContainerBlock>
    )
}

export default ReviewListContainer;