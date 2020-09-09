import React from 'react';

function MemberForm({onChange, idIsExisted}) {

    if(idIsExisted) return <div>아이디가 이미 존재합니다.</div>;

    return(
        <div>
            <input onChange={onChange}/>
            memberForm
        </div>
    )

}

export default MemberForm;