//액션타입
const INPUT_CHANGE = 'mypage/INPUT_CHANGE';

//액션함수
export const inputChange = formState => ({type: INPUT_CHANGE, formState});

//초기상태
const initialState = {
    inputChange: {
        id: '',
        oldPw: '',
        pw: '',
        name: '',
        email: ''
    }
};

//리듀서

export default function mypage(state=initialState, action) {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                inputChange: {
                    ...state.inputChange,
                    ...action.formState
                }
            }
        default:
            return state;
    }

}

