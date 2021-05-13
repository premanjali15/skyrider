import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Contact from "../components/Contact";
import Header2 from "../components/Header2";
import Footer from "../components/footerPage";
import {
    view_details,
} from "../actions/loginActions";

export class ContactCont extends Component {

    render() {
        return (
            <div>
             <Header2/>
               <Contact {...this.props} />
             <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactCont);