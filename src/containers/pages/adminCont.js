import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Admin from "../../components/pages/admin";

import {
    view_all_events,
    validate_event,
    delete_event,
    view_details,
    edit_details
} from "../../actions/loginActions";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";

export class AdminCont extends Component {

    render() {
        return (
            <Admin {...this.props} />
        );
    }
};

export const mapStateToProps = store => {
    return {
        login: store.login,
        snackbar: store.snackbar,
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        view_all_events: () => {
            dispatch(view_all_events());
        },
        validate_event: (image) => {
            dispatch(validate_event(image));
        },
        delete_event: (event_id) => {
            dispatch(delete_event(event_id))
        },
        view_details: () => {
            dispatch(view_details());
        },
        edit_details: (user_id, address1, address2, address3) => {
            dispatch(edit_details(user_id, address1, address2, address3))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCont);