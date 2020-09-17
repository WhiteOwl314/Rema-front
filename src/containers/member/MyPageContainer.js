import React,{useState, useEffect} from 'react';
import ContentTemplate from "../../components/common/ContentTemplate";
import MyPageForm from "../../components/member/mypage/MyPageForm";
import {useDispatch, useSelector} from "react-redux";
import {GetMember} from "../../modules/member/member";
import {inputChange} from "../../modules/member/mypage";

function MyPageContainer() {
    const updatePwState =
        useSelector(state => state.member.updatePw);
    const getMemberState =
        useSelector(state => state.member.getMember);
    const inputChangeState =
        useSelector(state => state.mypage.inputChange);
    const dispatch = useDispatch();


    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(inputChange({[name]: value}));
    };

    return(
        <ContentTemplate
            title='회원정보'
        >
            <MyPageForm
                getMemberState={getMemberState}
                onChange={onChange}
                inputChangeState={inputChangeState}
            />
        </ContentTemplate>
    )
}

export default MyPageContainer;