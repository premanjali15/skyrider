import {ADD_BLOG} from "../constants/blogConst";
export function set_blog(blog){
    return{
        type:ADD_BLOG,
        payload:blog
    }
}