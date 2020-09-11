import React, {useState, useCallback} from 'react';
import FindIdTemplate from "../../components/member/findId/FindIdTemplate";
import FindIdForm from "../../components/member/findId/FindIdForm";
import {useSelector, useDispatch} from "react-redux";
import {FindId} from "../../modules/member/member";
import FindIdHeader from "../../components/member/findId/FindIdHeader";

function FindIdContainer({history}) {

    const findIdState =
        useSelector(state => state.member.findId);
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({email:''});

    const onChange = useCallback((e) => {
        const value = e.target.value;
        setFormState({
            ...formState,
            email: value
        });

    },[formState]);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(FindId(formState));

        setFormState({email:''});
    };

    return(
        <FindIdTemplate>
            <FindIdHeader
                history={history}
            />
            <FindIdForm
                history={history}
                onChange={onChange}
                onSubmit={onSubmit}
                findIdState={findIdState}
                dispatch={dispatch}
                formState={formState}
            />
        </FindIdTemplate>
    )
}

export default FindIdContainer;