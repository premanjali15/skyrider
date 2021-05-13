import React, { Component } from "react";
import { connect } from "react-redux";
import AddProduct from "../../components/product/addProductComponent";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_product,
    add_product,
    set_product_name,
    set_product_image
} from "../../actions/product/productActions";

export class AddProductContainer extends Component {
    render() {
        return (
            <AddProduct {...this.props} />
        );
    }
}
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        product:store.product,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_news: (token) => {
            dispatch(get_all_product(token));
        },
        add_product: (product) => {
            dispatch(add_product(product));
        },
        set_product_name: (name) => {
            dispatch(set_product_name(name));
        },
        set_product_image: (image) => {
            dispatch(set_product_image(image));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProductContainer);