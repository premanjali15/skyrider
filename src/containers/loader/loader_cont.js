import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../components/loader/loader";
import {
  set_loader,
  unset_loader
} from "../../actions/loader/loader_action";
export class LoaderCon extends Component {
  render() {
    return (
      <Loader {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    loader: store.loader
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    set_loader: () => {
      dispatch(set_loader());
    },
    unset_loader: () => {
      dispatch(unset_loader());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoaderCon);
