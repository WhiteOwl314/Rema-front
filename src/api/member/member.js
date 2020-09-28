import axios from "axios";

export const checkId = async id => {
    return await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/member/checkId.do',
        data: {
            'id': id
        }
    });
};

export const checkEmail = async email => {
    return await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/member/checkEmail.do',
        data: {
            'email': email
        }
    });
};

export const addMember = async formData => {
    const response = await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/member/addMember.do',
        // data: { id, pw, level, name, email }
        data: formData
    });

    return response.data;
};

export const login = async formData => {
    const response = await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/member/login.do',
        // data: { id, pw}
        data: formData
    });

    return response.data;
};


export const findId = async formState => {
    console.log(formState);
    const response = await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/member/findId.do',
        // data: {email}
        data: formState
    });

    return response.data;
};

export const findIdAlertFunction = (payload) => {
    const {idIsExisted} = payload;
    if(!idIsExisted){
        alert('아이디가 존재하지 않습니다.');
    }
};

export const findPw = async formData => {
    const response = await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/member/findPw.do',
        // data: {id, email}
        data: formData
    });

    return response.data;
};

export const findPwAlertFunction = (payload) => {
    const {idIsExisted, emailIsCorrect} = payload;
    if(!idIsExisted){
        alert('아이디가 존재하지 않습니다.');
    } else if (!emailIsCorrect) {
        alert('이메일이 다릅니다')
    }
};

export const updatePw = async formData => {
    const response = await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/member/updatePw.do',
        // data: {pw, oldPw}
        data: formData
    });

    return response.data;
};

export const updatePwAlertFunction = (payload) => {
    const {pwIsCorrect} = payload;
    if(!pwIsCorrect){
        alert('비밀번호가 맞지 않습니다..');
    }
};

// export const loginCheck = async () => {
//     const response = await axios({
//         method: 'post',
//         url: 'http://localhost:8080/member/loginCheck.do'
//         // data: 없음
//     });
//
//     return response.data;
// };
//


//마이페이지 회원정보 조회
export const getMember = async () => {

    return await axios({
        method: 'post',
        url: 'https://3.12.202.127:8080/member/getMember'
        // data: 없음
    });
};











