import React from 'react';
import styled from "styled-components";


const ContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: auto;
`;

function ReviewListContainer() {
    return (
        <ContainerBlock>
            <div>
                리스트1
            </div>
            <div>
                리스트2
            </div>
        </ContainerBlock>
    )
}

export default ReviewListContainer;