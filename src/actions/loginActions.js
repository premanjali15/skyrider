import {
    SET_EMAIL,
    SET_PASSWORD,
    LOGIN,
    LOGOUT,
    SET_ALL_EVENTS,
    SET_DETAILS,
    firebase_config
} from "../constants/ActionTypes";
import UNIVERSAL from "../config/config.js";
import { set_snack_bar } from "./snackbar/snackbar_action";
import { set_loader, unset_loader }
    from "./loader/loader_action";
import firebase from "firebase";
firebase.initializeApp(firebase_config);
export function setEmail(payload) {
    return {
        type: SET_EMAIL,
        payload: payload
    };
}

export function setPwd(payload) {
    return {
        type: SET_PASSWORD,
        payload: payload
    };
}


export function setLogin(payload) {
    return {
        type: LOGIN,
        payload: payload
    };
}
export function onLogout() {
    return {
        type: LOGOUT
    };
}


export function user_login(login) {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: login.email,
                password: login.password
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status) {
                    localStorage.setItem("email", login.email);
                    localStorage.setItem("user_id", responseJson.result._id);
                    dispatch(setLogin(responseJson.result));
                    dispatch(unset_loader());
                } else {
                    dispatch(set_snack_bar(responseJson.status, "Login Failed"));
                    dispatch(unset_loader());
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function view_all_events() {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "view_all_events", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                if (responseJson.status) {
                    dispatch(set_all_events(responseJson.result));
                    dispatch(unset_loader());
                } else {
                    dispatch(set_all_events([]));
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    dispatch(unset_loader());
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function set_all_events(payload) {
    return {
        type: SET_ALL_EVENTS,
        payload: payload
    };
}
export function validate_event(image) {
    return (dispatch) => {
        console.log(image)
        dispatch(set_loader());
        if (image === '') {
            dispatch(set_snack_bar(true, "Please Select a Image"));
            dispatch(unset_loader());

        }
        else {
            var storageRef = firebase.storage().ref();
            var uploadTask = storageRef.child("images/" + (image.name + parseInt(Math.random() * 100)) + ".png").put(image);
            uploadTask.on("state_changed", function (snapshot) {
            }, function (error) {
                dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
                dispatch(unset_loader());
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    dispatch(add_events(downloadURL))
                });
            });
        }
    }
}
export function add_events(image) {
    return (dispatch) => {
        return fetch(UNIVERSAL.BASEURL + "add_event", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image: image
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                if (responseJson.status) {
                    dispatch(view_all_events());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    dispatch(unset_loader());
                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    dispatch(unset_loader());
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function delete_event(event_id) {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "delete_event", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                event_id: event_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status) {
                    dispatch(view_all_events());
                    dispatch(unset_loader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(view_all_events());
                    dispatch(unset_loader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function view_details() {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "view_details", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status) {
                    dispatch(set_details(responseJson.result));
                    dispatch(unset_loader());
                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    dispatch(unset_loader());
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function set_details(payload) {
    return {
        type: SET_DETAILS,
        payload: payload
    };
}

export function edit_details(user_id, address1, address2, address3) {
    return (dispatch) => {
        dispatch(set_loader());
        return fetch(UNIVERSAL.BASEURL + "update_details", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                address1: address1,
                address2: address2,
                address3: address3,
                id: user_id
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                if (responseJson.status) {
                    dispatch(view_details());
                    dispatch(unset_loader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                    dispatch(unset_loader());
                    dispatch(view_details());

                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
}