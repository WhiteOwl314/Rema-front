import React from 'react';
import axios from 'axios';
import {CheckMemberId} from "../../api/member";

function MemberForm({onChange, idIsExisted}) {

    return(
        <div>
            <input onChange={onChange}/>
            memberForm
        </div>
    )

}

export default MemberForm;
