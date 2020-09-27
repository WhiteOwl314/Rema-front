import React, {useEffect} from 'react';
import ReviewListContainer from "../../containers/review/ReviewListContainer";
import ReviewSearchContainer from "../../containers/review/ReviewSearchContainer";
import styled from "styled-components";

const ContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

function ReviewListPage() {

    useEffect(() => {
        document.title = "REMA | REVIEW";
    }, []);

    return(
        <ContainerBlock>
            <ReviewSearchContainer/>
            <ReviewListContainer/>
        </ContainerBlock>
    );
}

export default ReviewListPage;