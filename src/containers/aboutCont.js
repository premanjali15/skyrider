import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import About from "../components/aboutUs";
import Header2 from "../components/Header2";
import Footer from "../components/footerPage";
import {
    view_details,
} from "../actions/loginActions";

export class AboutCont extends Component {

    render() {
        return (
            <div>
	            <Header2/>
	               <About {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutCont);