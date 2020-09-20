import axios from 'axios';

export const getFolderOrderList = async () => {
    return await axios({
        method: 'get',
        url: 'http://localhost:8080/folderOrder/getFolderOrderList'
    })
};
