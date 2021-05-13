import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Service from "../components/services";

import {
    view_details,
} from "../actions/loginActions";

export class ServiceCont extends Component {

    render() {
        return (
            <Service {...this.props} />
        );
    }
};

export const mapStateToProps = store => {
    return {
        login: store.login,
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        view_details: () => {
            dispatch(view_details());
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCont);