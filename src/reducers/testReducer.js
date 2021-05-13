import axios from "axios";
import {ADD_PRODUCT} from "../constants/testConst"
import {set_product} from "../actions/testAction"
const initial_state = {
    products:[]
};
export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return state = { ...state , products: action.payload};
        default:
            return state;
    }

}
