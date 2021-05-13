import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/products";
import Header2 from "../components/Header2";
import Footer from "../components/footerPage";
import {fetchProducts} from "../actions/fetchProducts";
{/*import {
    set_num1,
} from "../actions/homeAction";
*/}
export class ProductsCont extends Component {

    render() {
        return (
            <div>
                <Header2/>
                   <Products {...this.props} />
                <Footer/>
            </div>
           
        );
    }
};

export const mapStateToProps = store => {
    return {
        products: store.reducer.products,
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => {
            dispatch(fetchProducts());
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsCont);