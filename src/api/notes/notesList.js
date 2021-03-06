import axios from 'axios';

export const getNotesList = async () => {
    return await axios({
        method: 'get',
        url: 'http://3.12.202.127:8080/notesList/getNotesList'
    })
};

export const getFolderOrderList = async () => {
    return await axios({
        method: 'get',
        url: 'http://3.12.202.127:8080/folderOrder/getFolderOrderList'
    })
};

export const addNotesList = async (formState) => {
    const response = await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/notesList/addNotesList',
        // data: { title, is_first, isFolder }
        data: formState
    });

    return response.data;
};

export const updateName = async (formState) => {
    const response = await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/notesList/updateName',
        // data: {id, title }
        data: formState
    });

    return response.data;
};

export const deleteNotesList = async (formState) => {
    const response = await axios({
        method: 'post',
        url: 'http://3.12.202.127:8080/notesList/deleteNotesList',
        // data: {id}
        data: formState
    });

    return response.data;
};
