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
    //     .then(function (response) {
    //     return response.data;
    // }).catch(function (error) {
    //     console.log(error);
    // });

    const data = response.data;


    // await axios({
    //     method: 'post',
    //     url: 'http://localhost:8080/member/checkId.do',
    //     async: false,
    //     data: {
    //         'id': id
    //     }
    // })
    //     .then(function (response) {
    //         console.log(response);
    //         this.data = response.data;
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    // await axios.post(
    //     'http://localhost:8080/member/checkId.do',
    //     {
    //         'id': 'skstjdwn914'
    //     },
    //     )
    //     .then(function (response) {
    //         console.log(response);
    //         this.data = response.data;
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    console.log(data);
    return data;

};