import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6
import { Text } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Label extends Component {
  render() {
    return <Text ref={c => (this._root = c)} {...this.props} />;
  }
}

Label.propTypes = {
  ...Text.propTypes,
  style: PropTypes.object
};

const StyledLabel = connectStyle("NativeBase.Label", {}, mapPropsToStyleNames)(
  Label
);

export { StyledLabel as Label };
