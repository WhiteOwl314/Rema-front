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

    let idIsExisted = false;

    console.log(data);

    if(data){
        idIsExisted = data.idIsExisted;
        console.log(idIsExisted);
    }

    return (
        <>
            <MemberForm
                onChange={onChange}
                idIsExisted={idIsExisted}
            />
        </>
    )
}

export default MemberFormContainer;