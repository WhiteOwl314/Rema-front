import React from 'react';

function MemberForm({onSubmit, onChange, checkId, addMember, formState}) {

    console.log('checkId: ' + checkId);
    console.log('addMember: ' + addMember);
    console.log(formState);

    return(
        <form
            onSubmit={onSubmit}
        >
            <label>
                아이디:
                <input
                    name="id"
                    type="text"
                    onChange={onChange}
                    value={formState.id}
                />
            </label>
            <label>
                비밀번호:
                <input
                    name="pw"
                    type="text"
                    onChange={onChange}
                    value={formState.pw}
                />
            </label>
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
                    type="text"
                    onChange={onChange}
                    value={formState.email}
                />
            </label>
            <input
                name="level"
                type="hidden"
                onChange={onChange}
                value={formState.level}
            />
            <input
                type="submit"
                value="회원가입"
            />
        </form>
    )

}

export default MemberForm;
