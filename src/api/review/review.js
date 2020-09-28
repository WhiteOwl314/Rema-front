import axios from 'axios';

export const getDefaultReviewDate = async () => {
    return await axios({
        method: 'post',
        url: 'https://3.12.202.127:8080/review/getDefaultReviewDate'
    })
};

export const getReviewDateList = async (id) => {
    return await axios({
        method: 'post',
        url: 'https://3.12.202.127:8080/review/getReviewDateList',
        data: {'id': id}
    })
};

export const addReviewDate = async (note_id) => {
    return await axios({
        method: 'post',
        url: 'https://3.12.202.127:8080/review/addReviewDate',
        data: {'note_id': note_id}
    })
};

export const updateReviewDate = async (formState) => {
    return await axios({
        method: 'post',
        url: 'https://3.12.202.127:8080/review/updateReviewDate',
        //id,data
        data: formState
    })
};

export const deleteReviewDate = async (formState) => {
    return await axios({
        method: 'post',
        url: 'https://3.12.202.127:8080/review/deleteReviewDate',
        //id
        data: formState
    })
};


export const getReviewDateListByDate = async (date) => {
    return await axios({
        method: 'get',
        url: `https://3.12.202.127:8080/review/getReviewDateListByDate?date=${date}`,
    })
};
