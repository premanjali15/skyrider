import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/product/productComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_product,
    delete_all_product,
    update_product
} from "../../actions/product/productActions";

export class ProductContainer extends Component {
    render() {
        return (
            <Product {...this.props} />
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
        get_all_product: (token) => {
            dispatch(get_all_product(token));
        },
        delete_all_product: (id) => {
            dispatch(delete_all_product(id));
        },
        update_product: (id, image, name) => {
            dispatch(delete_all_product(id, image, name));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);