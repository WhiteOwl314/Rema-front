
// popUp 열기
import {handleAsyncActions, reducerUtils} from "../lib/asyncUtils";

const OPEN_POPUP = 'popUp/OPEN_POPUP';

export const OpenPopUp = () => ({type: OPEN_POPUP});

// popUp 닫기
const CLOSE_POPUP = 'popUp/CLOSE_POPUP';

export const ClosePopUp = () => ({type: CLOSE_POPUP});

// 종류 변경
const CHANGE_KIND = 'popUp/CHANGE_KIND';

export const ChangeKind = kind => ({type: CHANGE_KIND, kind: {kind}});

// 폴더추가 내용 변경
const CHANGE_ADD_FOLDER_CONTENT = 'popUp/CHANGE_ADD_FOLDER_CONTENT';

export const ChangeAddFolderContent = formState => ({type: CHANGE_ADD_FOLDER_CONTENT, formState});

// 노트추가 내용 변경
const CHANGE_ADD_NOTE_CONTENT = 'popUp/CHANGE_ADD_NOTE_CONTENT';

export const ChangeAddNoteContent = formState => ({type: CHANGE_ADD_NOTE_CONTENT, formState});

// 이름변경 내용 변경
const CHANGE_UPDATE_NAME_CONTENT = 'popUp/CHANGE_UPDATE_NAME_CONTENT';

export const ChangeUpdateNameContent = formState => ({type: CHANGE_UPDATE_NAME_CONTENT, formState});

// 내용 초기화
const CLEAR_CONTENT = 'popUp/CLEAR_CONTENT';

export const ClearContent = () => ({type: CLEAR_CONTENT});

//State
const initialState = {
    window: { isOpen: false },
    kind: {},
    content: {
        addFolder:{title:'', is_first:0},
        addNote:{title:'', is_first:0},
        updateName:{title:''}
    }
};


//Reducer
export default function popUp(state=initialState, action) {
    switch (action.type) {
        case OPEN_POPUP:
            return {
                ...state,
                window: {
                    ...state.window,
                    isOpen: true
                }
            };
        case CLOSE_POPUP:
            return {
                ...state,
                window: {
                    ...state.window,
                    isOpen: false
                },
                content: initialState.content
            };
        case CHANGE_KIND:
            return {
                ...state,
                kind: {
                    ...state.kind,
                    kind: action.kind
                }
            };
        case CHANGE_ADD_FOLDER_CONTENT:
            return {
                ...state,
                content: {
                    ...state.content,
                    addFolder:{
                        ...state.content.addFolder,
                        ...action.formState
                    }
                }
            };
        case CHANGE_ADD_NOTE_CONTENT:
            return {
                ...state,
                content: {
                    ...state.content,
                    addNote:{
                        ...state.content.addNote,
                        ...action.formState
                    }
                }
            };
        case CHANGE_UPDATE_NAME_CONTENT:
            return {
                ...state,
                content: {
                    ...state.content,
                    updateName:{
                        ...state.content.updateName,
                        ...action.formState
                    }
                }
            };
        case CLEAR_CONTENT:
            return {
                ...state,
                content: initialState.content
            };
        default:
            return state;
    }
}
