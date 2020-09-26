import React, {useEffect} from 'react';
import ReviewListContainer from "../../containers/review/ReviewListContainer";
import ReviewSearchContainer from "../../containers/review/ReviewSearchContainer";

function ReviewListPage() {

    useEffect(() => {
        document.title = "REMA | REVIEW";
    }, []);

    return(
        <>
            <ReviewSearchContainer/>
            <ReviewListContainer/>
        </>
    );
}

export default ReviewListPage;