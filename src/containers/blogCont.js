import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Blog from "../components/Blog";
import Header2 from "../components/Header2";
import Footer from "../components/footerPage";
import {fetchBlog} from "../actions/fetchBlog";
import {
    view_details,
} from "../actions/loginActions";

export class BlogCont extends Component {

    render() {
        return (
            <div>
                <Header2/>
                   <Blog {...this.props} />
                <Footer/>
            </div>
        );
    }
};
export const mapStateToProps = store => {
    return {
        blog: store.blogReducer.blog,
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        fetchBlog: () => {
            dispatch(fetchBlog());
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogCont);