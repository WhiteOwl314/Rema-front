import React, {useEffect} from 'react';
import MyPageContainer from "../../containers/member/MyPageContainer";

function MyPagePage() {

    useEffect(() => {
        document.title = "REMA | MYPAGE";
    }, []);


    return(
        <MyPageContainer/>
    )
}

export default MyPagePage;