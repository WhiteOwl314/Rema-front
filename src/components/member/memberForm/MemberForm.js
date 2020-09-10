import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import LoadingIcon from "../../../lib/css/LoadingIcon";
import LoadingPage from "../../common/LoadingPage";
import ErrorPage from "../../common/ErrorPage";

function MemberForm({
                        onChange,
                        onSubmit,
                        formState,
                        checkIdState,
                        checkEmailState,
                        addMemberState
}) {

    let idIsExisted = false;
    let emailIsExisted = false;
    let addMemberToDb = false;
    let sentEmail = false;

    if(checkIdState.data){
        idIsExisted = checkIdState.data.idIsExisted;
    }
    if(checkEmailState.data){
        emailIsExisted = checkEmailState.data.emailIsExisted;
    }
    const {loading, error} = addMemberState;
    if(addMemberState.data){
        addMemberToDb = addMemberState.data.addMemberToDb;
        sentEmail = addMemberState.data.sentEmail;
    }

    if(loading) return <LoadingPage/>;
    if(error) return <ErrorPage/>;
    if(addMemberToDb && sentEmail){
        return (
            <>
                '성공했습니다. 이메일 인증 후 로그인해주세요.'
            </>
        )
    }

    return(
        <form
            onSubmit={onSubmit}
        >
            <LoadingIcon
                loadingSizeKind='12'
                width='100px'
            />
            <label>
                아이디:
                <input
                    name="id"
                    type="text"
                    onChange={onChange}
                    value={formState.id}
                />
            </label>
            <div>
                {
                    idIsExisted
                        ?'이미 존재하는 아이디입니다.'
                        :''
                }
            </div>
            <label>
                비밀번호:
                <input
                    name="pw"
                    type="password"
                    onChange={onChange}
                    value={formState.pw}
                />
            </label>
            <label>
                비밀번호 확인:
                <input
                    name="pw2"
                    type="password"
                    onChange={onChange}
                    value={formState.pw2}
                />
            </label>
            <div>
                {
                    formState.pw2 != ''
                    && formState.pw != ''
                    && formState.pw != formState.pw2
                        ? '비밀번호가 일치하지 않습니다.'
                        : ''
                }
            </div>
            <label>
                이름:
                <input
                    name="name"
                    type="text"
                    onChange={onChange}
                    value={formState.name}
                />
            </label>
            <label>
                이메일:
                <input
                    name="email"
                    type="email"
                    onChange={onChange}
                    value={formState.email}
                />
            </label>
            <div>
                {
                    emailIsExisted
                        ?'이미 존재하는 이메일입니다.'
                        :''
                }
            </div>
            <input
                name="level"
                type="hidden"
                onChange={onChange}
                value={formState.level}
            />
            {
                formState.id != ''
                && formState.pw != ''
                && formState.pw2 != ''
                && formState.name != ''
                && formState.email != ''
                && idIsExisted == false
                && emailIsExisted == false
                    ? <input type="submit" value="회원가입"/>
                    : <input type="submit" value="회원가입" disabled/>
            }
        </form>
    )

}

export default MemberForm;
