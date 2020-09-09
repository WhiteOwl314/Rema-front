//checkId
import axios from "axios";

export const checkId = async id => {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/member/checkId.do',
        data: {
            'id': id
        }
    });

    return response.data;
};

export const checkEmail = async email => {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/member/checkEmail.do',
        data: {
            'email': email
        }
    });

    return response.data;
};


export const addMember = async formData => {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/member/addMember.do',
        data: {
            id: formData.id,
            pw: formData.pw,
            level: formData.level,
            name: formData.name,
            email: formData.email
        }
    });

    return response.data;
}























