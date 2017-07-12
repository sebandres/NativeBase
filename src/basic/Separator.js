import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6
import { View, ViewPropTypes } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Separator extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

Separator.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.object
};

const StyledSeparator = connectStyle(
  "NativeBase.Separator",
  {},
  mapPropsToStyleNames
)(Separator);

export { StyledSeparator as Separator };
