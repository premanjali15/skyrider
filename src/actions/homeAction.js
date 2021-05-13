import {
    SET_NUM1,

} from "../constants/homeConst";

export function set_num1(params) {
    return{
        type: SET_NUM1,
        payload:params
    }
}
