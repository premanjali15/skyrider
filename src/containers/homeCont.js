import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "../components/home";

import {
    set_num1,
} from "../actions/homeAction";

export class HomeCont extends Component {

    render() {
        return (
            <Home {...this.props} />
        );
    }
};

export const mapStateToProps = store => {
    return {
        home: store.home,
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        // view_details: () => {
        //     dispatch(view_details());
        // },
        set_num1:(params)=>{
            dispatch(set_num1(params))
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCont);