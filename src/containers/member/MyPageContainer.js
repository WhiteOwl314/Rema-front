import React,{useEffect} from 'react';
import ContentTemplate from "../../components/common/ContentTemplate";
import MyPageForm from "../../components/member/mypage/MyPageForm";
import {useDispatch, useSelector} from "react-redux";
import {inputChange, updateButton} from "../../modules/member/mypage";
import {getMember} from "../../modules/member/mypage";
import LoadingPage from "../../components/common/LoadingPage";
import {AddMember} from "../../modules/member/member";

function MyPageContainer() {
    const updatePwState =
        useSelector(state => state.member.updatePw);
    const getMemberState =
        useSelector(state => state.mypage.getMember);
    const inputChangeState =
        useSelector(state => state.mypage.inputChange);
    const updateButtonState =
        useSelector(state => state.mypage.updateButton);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect 실행');
        dispatch(getMember());
    },[dispatch]);

    const {loading} = getMemberState;

    if(loading) return <LoadingPage/>;



    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(inputChange({[name]: value}));
    };

    const onUpdateButtonClick = (e) => {
        console.log(e.target.id);
        const targetButton = e.target.id;
        dispatch(updateButton(targetButton));
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <ContentTemplate
            title='회원정보'
        >
            <MyPageForm
                getMemberState={getMemberState}
                onChange={onChange}
                inputChangeState={inputChangeState}
                updateButtonState={updateButtonState}
                onSubmit={onSubmit}
                onUpdateButtonClick={onUpdateButtonClick}
            />
        </ContentTemplate>
    )
}

export default MyPageContainer;