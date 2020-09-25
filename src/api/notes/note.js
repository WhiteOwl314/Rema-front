import axios from 'axios';

export const getNote = async (id) => {
    return await axios({
        method: 'post',
        url: 'http://localhost:8080/note/getNote',
        data: {'id': id}
    })
};

export const updateNote = async (formState) => {
    return await axios({
        method: 'post',
        url: 'http://localhost:8080/note/updateNote',
        data: formState
    })
};
