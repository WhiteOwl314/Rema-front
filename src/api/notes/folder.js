import axios from 'axios';

export const getFolderList = async () => {
    return await axios({
        method: 'get',
        url: 'https://3.12.202.127:8080/folder/getFolderList'
    })
};