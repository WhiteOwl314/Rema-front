import React from 'react';
import MemberForm from '../../components/member/MemberForm';
import {useSelector, useDispatch} from "react-redux";
import {CheckMemberId} from "../../modules/member/member";

function MemberFormContainer() {
    const {data, loading, error } =
        useSelector(state => state.member.checkMemberId);
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(CheckMemberId(e.target.value));
    };

    console.log(data);

    return (
        <>
            <MemberForm
                onChange={onChange}
            />
        </>
    )
}

export default MemberFormContainer;