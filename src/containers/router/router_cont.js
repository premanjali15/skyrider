import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Routes from "../../components/router/router";

//import { setAffiliates,setEmail, setPhone, setdescription,resetAffiliates,AffiliatesFunc} from "../../actions/affiliates/affiliates_action";

import {
  onLogout
} from "../../actions/loginActions";
import {

} from '../../actions/product/productActions';
import {

} from '../../actions/news/newsActions'

export class Routes_con extends Component {

  render() {
    return (
      <Routes {...this.props} />
    );
  }
};

export const mapStateToProps = store => {
  return {
   login: store.login,
      news:store.news,
      product:store.product,
  };
};

export const mapDispatchToProps = dispatch => {
    return {
      onLogout: (user_token, uuid) => {
        dispatch(onLogout(user_token, uuid));
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Routes_con );
