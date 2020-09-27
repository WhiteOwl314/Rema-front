import React, {useEffect} from 'react';
import styled from "styled-components";
import ReviewDetailListContainer from "../../containers/review/ReviewDetailListContainer";
import ReviewNoteContainer from "../../containers/review/ReviewNoteContainer";

const ContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
`;

function ReviewPage({match}) {

    useEffect(() => {
        document.title = "REMA | REVIEW";
    }, []);

    const {date}  = match.params;

    return(
        <ContainerBlock>
            <ReviewDetailListContainer
                date={date}
            />
            <ReviewNoteContainer/>
        </ContainerBlock>
    );
}

export default ReviewPage;