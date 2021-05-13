import {ADD_PRODUCT} from "../constants/testConst";
export function set_product(products){
    return{
        type:ADD_PRODUCT,
        payload:products
    }
}