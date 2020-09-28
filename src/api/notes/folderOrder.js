import axios from 'axios';

export const getFolderOrderList = async () => {
    return await axios({
        method: 'get',
        url: 'http://3.12.202.127:8080/folderOrder/getFolderOrderList'
    })
};
