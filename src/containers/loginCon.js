import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Login from "../components/login";

import { 
  user_login,
  setEmail,
  setPwd,
} from "../actions/loginActions";
import {
  close_snack_bar
} from "../actions/snackbar/snackbar_action";

export class Controller extends Component {

  render() {
    return (
      <Login {...this.props} />
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
      user_login: (login) => {
        dispatch(user_login(login));
      },
      setEmail:(payload)=>{
        dispatch(setEmail(payload))
      },
      setPwd: (payload) => {
        dispatch(setPwd(payload))
      },
      // getGeoInfo: () => {
      //   dispatch(getGeoInfo());
      // },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Login);