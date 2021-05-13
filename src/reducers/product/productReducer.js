
import {SET_ALL_PRODUCT, SET_PRODUCT_IMAGE, SET_PRODUCT_NAME,RESET_PRODUCT} from "../../constants/product/productConstants";
const initial_state = {
    all_product:[],
    name:"",
    image:""
};
export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case SET_ALL_PRODUCT:
            return state = { ...state, all_product: action.payload };
        case SET_PRODUCT_NAME:
            return state = { ...state, name: action.payload };
        case SET_PRODUCT_IMAGE:
            return state = { ...state, image: action.payload };
        case RESET_PRODUCT:
            return state = { ...state, image: "",name: "" };

        default:
            return state;
    }
}
