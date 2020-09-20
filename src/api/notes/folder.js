import axios from 'axios';

export const getFolderList = async () => {
    return await axios({
        method: 'get',
        url: 'http://localhost:8080/folder/getFolderList'
    })
};