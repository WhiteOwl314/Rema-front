//액션 타입 정의
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCRENENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

//액션함수 정의
export const changeColor = color => ({type: CHANGE_COLOR, color});
export const increment = () => ({type: INCRENENT});
export const decrement = () => ({type: DECREMENT});