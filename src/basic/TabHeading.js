import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6
import { View, ViewPropTypes } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class TabHeadingNB extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

TabHeadingNB.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.object
};

const StyledTabHeadingNB = connectStyle(
  "NativeBase.TabHeading",
  {},
  mapPropsToStyleNames
)(TabHeadingNB);
export { StyledTabHeadingNB as TabHeading };
