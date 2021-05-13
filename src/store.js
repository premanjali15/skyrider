import {set_product} from "./actions/testAction"
import {fetchProducts} from "./actions/fetchProducts"
import {fetchBlog} from "./actions/fetchBlog"
import reducer from "./reducers"; // Gets the State from the reducer(s)
import blogReducer from "./reducers/blogReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
// let rootReducer = combineReducers({reducer,blogReducer})
let store = createStore(reducer, applyMiddleware(thunk))// Creates the store from the State received from the reducer(s)
// store.dispatch(fetchProducts());
// store.dispatch(fetchBlog());
export default store;
