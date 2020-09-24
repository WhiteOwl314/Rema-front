import axios from 'axios';

export const getNote = async (id) => {
    return await axios({
        method: 'post',
        url: 'http://localhost:8080/note/getNote',
        data: {'id': id}
    })
};
