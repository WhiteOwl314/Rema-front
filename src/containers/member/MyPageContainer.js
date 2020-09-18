import React,{useEffect} from 'react';
import ContentTemplate from "../../components/common/ContentTemplate";
import MyPageForm from "../../components/member/mypage/MyPageForm";
import {useDispatch, useSelector} from "react-redux";
import {inputChange, updateButton, updateEmail, updateName, updatePw} from "../../modules/member/mypage";
import {getMember} from "../../modules/member/mypage";
import LoadingPage from "../../components/common/LoadingPage";

function MyPageContainer() {
    const getMemberState =
        useSelector(state => state.mypage.getMember);
    const inputChangeState =
        useSelector(state => state.mypage.inputChange);
    const updateButtonState =
        useSelector(state => state.mypage.updateButton);
    const updatePwState =
        useSelector(state => state.mypage.updatePw);
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

    const onUpdateButtonClick = (formState) => {
        dispatch(updateButton(formState));
    };

    const onSaveButtonClick = (kind) => {
        if(kind === 'pw'){
            console.log(kind);
            dispatch(updatePw());
        } else if (kind === 'email'){
            console.log(kind);
            dispatch(updateEmail());
        } else if (kind === 'name'){
            console.log(kind);
            dispatch(updateName());
        }
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
                onSaveButtonClick={onSaveButtonClick}
                updatePwState={updatePwState}
            />
        </ContentTemplate>
    )
}

export default MyPageContainer;