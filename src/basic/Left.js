import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6
import { View, ViewPropTypes } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Left extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

Left.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.object
};

const StyledLeft = connectStyle("NativeBase.Left", {}, mapPropsToStyleNames)(
  Left
);

export { StyledLeft as Left };
