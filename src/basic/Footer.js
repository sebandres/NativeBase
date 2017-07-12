import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6
import { View, ViewPropTypes } from "react-native";
import _ from "lodash";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Footer extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

Footer.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.object
};

const StyledFooter = connectStyle(
  "NativeBase.Footer",
  {},
  mapPropsToStyleNames
)(Footer);
export { StyledFooter as Footer };
