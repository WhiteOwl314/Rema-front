import axios from 'axios';

//마이페이지 회원정보 조회
export const getMember = async () => {

    return await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/member/getMember'
        // data: 없음
    });
};

export const updatePw = async formState => {
    return await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/member/updatePw.do',
        //data: pw
        data: formState
    });
};

export const sendEmailForUpdateEmail = async formState => {
    return await axios({
        method: 'post',
        url: 'https://3.12.202.127:8080/member/sendEmailForUpdateEmail.do',
        //data: email
        data: formState
    });
};

export const updateName = async formState => {
    return await axios({
        method: 'post',
        url: 'https://3.12.202.127:8080/member/updateName.do',
        //data: name
        data: formState
    });
};

