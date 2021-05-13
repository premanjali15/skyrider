import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Qualityandperformance from "../components/qualityandperformance";
import {
    view_details,
} from "../actions/loginActions";

export class OurservicesCont extends Component {

    render() {
        return (
            <div>
               <Qualityandperformance {...this.props} />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OurservicesCont);