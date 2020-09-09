//CheckId
import axios from "axios";

export const CheckMemberId = async id => {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/member/checkId.do',
        data: {
            'id': id
        }
    });

    return response.data;
};