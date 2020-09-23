import axios from 'axios';

export const getNotesList = async () => {
    return await axios({
        method: 'get',
        url: 'http://localhost:8080/notesList/getNotesList'
    })
};

export const getFolderOrderList = async () => {
    return await axios({
        method: 'get',
        url: 'http://localhost:8080/folderOrder/getFolderOrderList'
    })
};

export const addFolder = async (formState) => {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/notesList/addFolder',
        // data: { title, is_first }
        data: formState
    });

    return response.data;
};

