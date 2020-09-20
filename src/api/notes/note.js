import axios from 'axios';

export const getNoteList = async () => {
    return await axios({
        method: 'get',
        url: 'http://localhost:8080/note/getNoteList'
    })
};
