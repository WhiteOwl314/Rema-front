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
        // data: { id, pw, level, name, email }
        data: formData
    });

    return response.data;
};

export const login = async formData => {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/member/login.do',
        // data: { id, pw}
        data: formData
    });

    return response.data;
};






















