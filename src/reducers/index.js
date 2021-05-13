// This will can combine one or more Reducer functions and export it through Redux"s combineReducer helper.
import {combineReducers} from "redux";
import login from "./login-reducer";
import loader from "./loader/loader_reducer";
import snackbar from "./snackbar/snackbar_reducer";
import home from "./homeReducer";
import test from "./testReducer"
import news from './news/newsReducers'
import product from './product/productReducer'

export default combineReducers({
    login,
    loader,
    snackbar,
    home,
    news,
    product,
    test
});
