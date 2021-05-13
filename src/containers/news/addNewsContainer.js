import React, { Component } from "react";
import { connect } from "react-redux";
import AddNews from "../../components/news/addNewsComponent";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_news,
    add_news,
    set_news_title
} from "../../actions/news/newsActions";

export class AddNewsContainer extends Component {
    render() {
        return (
            <AddNews {...this.props} />
        );
    }
}
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        news:store.news,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_news: (token) => {
            dispatch(get_all_news(token));
        },
        add_news: (id, title, image, description, date) => {
            dispatch(add_news(id, title, image, description, date));
        },
        set_news_title: (title) => {
            dispatch(set_news_title(title));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddNewsContainer);