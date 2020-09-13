import React,{useState} from 'react';
import ContentTemplate from "../../components/common/ContentTemplate";
import MyPageForm from "../../components/member/mypage/MyPageForm";
import {useDispatch, useSelector} from "react-redux";

function MyPageContainer() {

    const updatePwState =
        useSelector(state => state.member.updatePw);
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({

    });

    const onChange = (e) => {
        const {name, value} = e.target;
    };

    return(
        <ContentTemplate
            title='회원정보'
        >
            <MyPageForm/>
        </ContentTemplate>
    )
}

export default MyPageContainer;