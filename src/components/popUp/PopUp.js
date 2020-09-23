import React from 'react';
import styled,{css} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import AddFolderPopUpWindow from "./AddFolderPopUpWindow";
import {ChangeAddFolderContent, ClearContent, ClosePopUp} from "../../modules/popUp";
import {AddFolder, GetFolderOrderList, GetNotesList} from "../../modules/notes/notesList";


const Mask = styled.div`
    ${({isOpen}) => {
        return css`
            display: none;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 999;
            background-color: #000000;
            opacity: 0.1;
            
            ${
                isOpen &&
                css`
                    display: block;
                `
            }
        `;
    }}
`;

const LayerPopBlock = styled.div`
    ${({isOpen}) => {
        return css`
            display: none;
            position: absolute;
            width: 100%;
            height:100%;
            z-index: 1000;
            opacity: 1;
            ${
                isOpen &&
                css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                `
            }
        `;
        }}
`;

const LayerPopWindow = styled.div`
    width: 500px;
    height: 150px;
    background-color: white;
    color: 3B3B3B;
`;

function PopUp() {

    const dispatch = useDispatch();

    const popUpState = useSelector(state => state.popUp);
    const {isOpen} = popUpState.window;
    const content = popUpState.content;
    const {kind} = popUpState.kind;

    const temKind = 'addFolder';

    const onClickCancle = () => {
        dispatch(ClosePopUp());
        dispatch(ClearContent());
    };

    const onChangeAddFolder = (e) => {
        const {name, value} = e.target;
        dispatch(ChangeAddFolderContent({[name]:value}));
    };

    const onClickAddFolder = async () => {
        await dispatch(AddFolder());
        dispatch(ClosePopUp());
        dispatch(GetNotesList());
        dispatch(GetFolderOrderList());
    };

    return (
        <>
            <Mask isOpen={isOpen}/>
            <LayerPopBlock isOpen={isOpen}>
                {temKind === 'addFolder'
                    && <AddFolderPopUpWindow
                            onClickCancle={onClickCancle}
                            onChange={onChangeAddFolder}
                            content={content}
                            onSave={onClickAddFolder}
                        />
                }
            </LayerPopBlock>
        </>
    )
}

export default PopUp;