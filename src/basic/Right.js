import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6
import { View, ViewPropTypes } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Right extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

Right.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.object
};

const StyledRight = connectStyle("NativeBase.Right", {}, mapPropsToStyleNames)(
  Right
);

export { StyledRight as Right };
