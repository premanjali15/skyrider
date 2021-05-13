import React, { Component } from "react";
import { connect } from "react-redux";
import News from "../../components/news/newsComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_news,
    delete_news,
    update_news
} from "../../actions/news/newsActions";

export class NewsContainers extends Component {
    render() {
        return (
            <News {...this.props} />
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
        delete_news: (id) => {
            dispatch(delete_news(id));
        },
        update_news: (id, title, image, description, date) => {
            dispatch(update_news(id, title, image, description, date));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsContainers);