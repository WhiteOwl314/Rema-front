import axios from 'axios';

export const getNote = async (id) => {
    return await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/note/getNote',
        data: {'id': id}
    })
};

export const updateNote = async (formState) => {
    return await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/note/updateNote',
        data: formState
    })
};
