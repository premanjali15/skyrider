import React, { Component } from "react";
import firebase from "firebase";
import { firebase_config } from "../../constants/ActionTypes";

export default class LoginController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      page: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("user_id") !== null) {
      this.props.setLogin({email:localStorage.getItem("email"),_id:localStorage.getItem("user_id")})}
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
