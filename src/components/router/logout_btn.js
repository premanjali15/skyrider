import React from "react";
import Icon from "@material-ui/core/Icon";
import {
  // Link,
  Redirect
} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

export default class LG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // redirect: false
    }
  }

  render() {
    const { login} = this.props; 

    if (login.loggedIn === false) {
      return <Redirect to="/" />
    }
    return (
      <IconButton color="inherit"
        onClick={() => {
          localStorage.removeItem("user_id");
          localStorage.removeItem("email");
          this.props.onLogout()
        }}>
        <Icon style={{ color: "#3f51b5" }}>power_settings_new</Icon>
      </IconButton>
    )
  }
}