import React, {useState} from 'react';
import MemberForm from '../../components/member/MemberForm';
import {useSelector, useDispatch} from "react-redux";
import {CheckId} from "../../modules/member/member";

function MemberFormContainer() {
    // let idIsExisted = false;
    // let emailIsExisted = false;
    // let addMemberToDb = false;
    // let setEmail = false;

    const checkIdState =
        useSelector(state => state.member.checkId);
    const addMemberState =
        useSelector(state => state.member.addMember);
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        // 필요: id, pw, level, name, email
        id: '',
        pw: '',
        level: '',
        name: '',
        email: ''
    });

    const onChange = (e) => {
        const{name, value} = e.target;
        if(name == "id"){
            dispatch(CheckId(e.target.value));
        }
        setFormState({
            ...formState,
            [name]: value
        })
    };

    return (
        <>
            <MemberForm
                onChange={onChange}
                checkId={checkIdState.data}
                addMember={addMemberState.data}
                formState={formState}
            />
        </>
    )
}

export default MemberFormContainer;