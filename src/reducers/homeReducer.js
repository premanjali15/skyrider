import {
    SET_NUM1
} from "../constants/homeConst";

const initial_state = {
    num1:"",
    num2:""
};
export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case SET_NUM1:
            return state = { ...state, num1: action.payload };
        default:
            return state;
    }
}