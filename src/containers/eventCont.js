import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Event from "../components/event";

import {
    view_details,
    view_all_events
} from "../actions/loginActions";

export class EventCont extends Component {

    render() {
        return (
            <Event {...this.props} />
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
        view_all_events: () => {
            dispatch(view_all_events());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCont);