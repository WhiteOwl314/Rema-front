import React, {useState} from 'react';
import MemberForm from '../../components/member/memberForm/MemberForm';
import {useSelector, useDispatch} from "react-redux";
import {AddMember, CheckEmail, CheckId} from "../../modules/member/member";
import MemberFormTemplate from "../../components/member/memberForm/MemberFormTemplate";
import MemberFormHeader from "../../components/member/memberForm/MemberFormHeader";

function MemberFormContainer({history}) {

    const checkIdState =
        useSelector(state => state.member.checkId);
    const checkEmailState =
        useSelector(state => state.member.checkEmail);
    const addMemberState =
        useSelector(state => state.member.addMember);
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        // 필요: id, pw, level, name, email
        id: '',
        pw: '',
        pw2: '',
        level: '1',
        name: '',
        email: ''
    });

    const onChange = (e) => {
        const{name, value} = e.target;
        if(name === "id"){
            dispatch(CheckId(value));
        }
        if(name === "email") {
            dispatch(CheckEmail(value));
        }
        setFormState({
            ...formState,
            [name]: value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(AddMember(formState));
    };

    return (
        <>
            <MemberFormTemplate
                history={history}
            >
                <MemberFormHeader
                    history={history}
                />
                <MemberForm
                    onChange={onChange}
                    onSubmit={onSubmit}
                    formState={formState}
                    checkIdState ={checkIdState}
                    checkEmailState ={checkEmailState}
                    addMemberState ={addMemberState}
                    history={history}
                />
            </MemberFormTemplate>
        </>
    )
}

export default MemberFormContainer;