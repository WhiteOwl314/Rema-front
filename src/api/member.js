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


export const loginAlertFunction = (payload) => {
    const {idIsExisted, pwIsCorrect, emailIsAllowed, isLogOn}
        = payload;
    if(!idIsExisted){
        alert('아이디가 존재하지 않습니다.');
    } else if (!pwIsCorrect){
        alert('비밀번호가 다릅니다.');
    } else if (!emailIsAllowed){
        alert('이메일 인증이 필요합니다.');
    } else if (!isLogOn){
        alert('로그인 실패했습니다.');
    }
};




















