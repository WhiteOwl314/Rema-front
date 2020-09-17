import axios from 'axios';

//마이페이지 회원정보 조회
export const getMember = async () => {

    return await axios({
        method: 'post',
        url: 'http://localhost:8080/member/getMember'
        // data: 없음
    });
};
