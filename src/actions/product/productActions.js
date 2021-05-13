import {

    SET_ALL_PRODUCT, SET_PRODUCT_IMAGE, SET_PRODUCT_NAME,RESET_PRODUCT
} from "../../constants/product/productConstants";
import UNIVERSAL from "../../config/config";
import { set_loader, unset_loader }
    from "../loader/loader_action";
import { set_snack_bar } from "../snackbar/snackbar_action";


export function get_all_product(token) {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "view_all_products", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token:token
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_product(responseJson.result))

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unset_loader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function delete_all_product(id) {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "delete_product", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token:token
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                product_id:id

            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {
                    // dispatch(set_all_product(responseJson.result))
                    get_all_product()

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unset_loader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function update_product(id, image, name) {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "update_product", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token:token
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                product_id:id,
                product_image:image,
                product_name:name
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {
                    // dispatch(set_all_product(responseJson.result))
                    dispatch(get_all_product())

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.Message));
                }
                dispatch(unset_loader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function add_product(product) {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "add_product/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token:token
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                // product_id:id,
                product_image:product.image,
                product_name:product.name
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {
                    // dispatch(set_all_product(responseJson.result))
                    dispatch(get_all_product())
                    dispatch(reset_product())

                    dispatch(set_snack_bar(true, responseJson.Message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.Message));
                }
                dispatch(unset_loader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function set_all_product(payload){
    return{
        type:SET_ALL_PRODUCT,
        payload:payload
    }
}

export function set_product_name(payload){
    return{
        type:SET_PRODUCT_NAME,
        payload:payload
    }
}

export function set_product_image(payload){
    return{
        type:SET_PRODUCT_IMAGE,
        payload:payload
    }
}
export function reset_product(){
    return{
        type:RESET_PRODUCT
    }
}
