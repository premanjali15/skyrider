import axios from "axios";
import {ADD_BLOG} from "../constants/blogConst"
import {PAGE_BLOG} from "../constants/blogConst"
import {set_blog} from "../actions/blogAction"
const initial_state = {
    blog:[]
};
export default function blogReducer(state = initial_state, action) {
    switch (action.type) {
        case ADD_BLOG:
            return state = { ...state , blog: action.payload};
        case PAGE_BLOG:
            return state = { ...state , blog: action.payload};
        default:
            return state;
    }

}
