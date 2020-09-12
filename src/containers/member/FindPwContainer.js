import React, {useState, useCallback} from 'react';
import FindPwTemplate from "../../components/member/findPw/FindPwTemplate";
import FindPwHeader from "../../components/member/findPw/FindPwHeader";
import FindPwForm from "../../components/member/findPw/FindPwForm";
import {useDispatch, useSelector} from "react-redux";
import {FindPw} from "../../modules/member/member";

function FindPwContainer({history}) {

    const findPwState =
        useSelector(state => state.member.findPw);
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        id: '',
        email: ''
    });

    const onChange = useCallback((e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    },[formState]);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(FindPw(formState));
    };

    return(
        <FindPwTemplate>
            <FindPwHeader
                history={history}
            />
            <FindPwForm
                history={history}
                onChange={onChange}
                onSubmit={onSubmit}
                findPwState={findPwState}
                dispatch={dispatch}
                formState={formState}
            />
        </FindPwTemplate>
    )
}

export default FindPwContainer;