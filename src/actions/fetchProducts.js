import {set_product} from "./testAction"
import axios from "axios";
export function fetchProducts() {
	return function(dispatch){
		axios.get('http://localhost:3002/add_product').then(response=>{
			const products = response.data
			console.log(products)
             dispatch(set_product(products))
		})
		.catch(error=>{
            console.log('error')
		})
	}


}