import {set_blog} from "./blogAction"
import axios from "axios";
export function fetchBlog() {
	return function(dispatch){
		axios.get('http://localhost:3001/add_blog').then(response=>{
			const blog = response.data
             dispatch(set_blog(blog))
		})
		.catch(error=>{
            console.log('error')
		})
	}


}