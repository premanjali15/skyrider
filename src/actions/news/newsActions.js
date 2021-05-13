import {

    SET_ALL_NEWS, SET_NEWS_DATE, SET_NEWS_DESCRIPTION, SET_NEWS_IMAGE,
    SET_NEWS_TITLE
} from "../../constants/news/newsConstants";
import UNIVERSAL from "../../config/config";
import { set_loader, unset_loader }
    from "../loader/loader_action";
import { set_snack_bar } from "../snackbar/snackbar_action";
// import {SET_ALL_NEWS} from "../../constants/news/newsConstants";


export function get_all_news(token) {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "view_all_news", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_token:token
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_news(responseJson.result))

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unset_loader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function update_news(id, title, image, description, date) {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "update_news/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token:token
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                news_id:id,
                news_title:title,
                news_image:image,
                news_description:description,
                news_date:date
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(set_all_news(responseJson.result))

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unset_loader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function delete_news(id) {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "delete_news", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token:token
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                news_id:id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_news(responseJson.result))

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unset_loader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function add_news(news) {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "add_news/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token:token
            },
            body: JSON.stringify({
                // email: login.email,
                // password: login.password
                news_title:news.title,
                news_image:news.image,
                news_description:news.description,
                news_date:news.date
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch(get_all_news(responseJson.result))

                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unset_loader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function set_all_news(payload){
    return{
        type:SET_ALL_NEWS,
        payload:payload
    }
}
export function set_news_title(payload){
    return{
        type:SET_NEWS_TITLE,
        payload:payload
    }
}

export function set_news_image(payload){
    return{
        type:SET_NEWS_IMAGE,
        payload:payload
    }
}

export function set_news_description(payload){
    return{
        type:SET_NEWS_DESCRIPTION,
        payload:payload
    }
}

export function set_news_date(payload){
    return{
        type:SET_NEWS_DATE,
        payload:payload
    }
}


