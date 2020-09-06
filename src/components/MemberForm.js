import React from 'react';
import axios from 'axios';

function MemberForm({onChange, idIsExisted}) {

    axios.post(
        'http://localhost:8080/member/checkId.do',
        {
            'id': 'skstjdwn914'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    return(
        <div>
            memberForm
        </div>
    )

}

export default MemberForm;
