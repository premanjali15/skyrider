import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Test from "../components/test";

import {
    set_var1,
} from "../actions/testAction";

export class TestCont extends Component {

    render() {
        return (
            <Test {...this.props} />
        );
    }

};

export const mapStateToProps = store => {
    return {
        login: store.login,
        test : store.test,
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        set_var1:(payload)=>{
            dispatch(set_var1(payload))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestCont);