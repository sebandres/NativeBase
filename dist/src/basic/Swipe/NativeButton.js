Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src\\basic\\Swipe\\NativeButton.js";var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);

var _reactNative=require("react-native");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}









var styles=_reactNative.StyleSheet.create({
button:{
flexDirection:"row",
alignSelf:"stretch",
justifyContent:"center"},

textButton:{
fontSize:14,
alignSelf:"center"},

opacity:{
opacity:0.8}});var



NativeButton=function(_Component){_inherits(NativeButton,_Component);function NativeButton(){var _ref;var _temp,_this,_ret;_classCallCheck(this,NativeButton);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=NativeButton.__proto__||Object.getPrototypeOf(NativeButton)).call.apply(_ref,[this].concat(args))),_this),_this.
statics={
isAndroid:_reactNative.Platform.OS==="android"},_this.


getDefaultProps=function(){
return{
textStyle:null,
disabledStyle:null,
underlayColor:null};

},_this.

_renderText=function(){

if(typeof this.props.children!=="string"){
return this.props.children;
}

return(
_react2.default.createElement(_reactNative.Text,{style:[styles.textButton,this.props.textStyle],__source:{fileName:_jsxFileName,lineNumber:49}},
this.props.children));


},_this.

render=function(){
var disabledStyle=this.props.disabled?
this.props.disabledStyle||styles.opacity:
{};


var buttonProps={
accessibilityComponentType:this.props.accessibilityComponentType,
accessibilityTraits:this.props.accessibilityTraits,
accessible:this.props.accessible,
delayLongPress:this.props.delayLongPress,
delayPressIn:this.props.delayPressIn,
delayPressOut:this.props.delayPressOut,
disabled:this.props.disabled,
hitSlop:this.props.hitSlop,
onLayout:this.props.onLayout,
onPress:this.props.onPress,
onPressIn:this.props.onPressIn,
onPressOut:this.props.onPressOut,
onLongPress:this.props.onLongPress,
pressRetentionOffset:this.props.pressRetentionOffset};



if(NativeButton.isAndroid){
buttonProps=_extends(buttonProps,{
background:
this.props.background||
_reactNative.TouchableNativeFeedback.SelectableBackground()});


return(
_react2.default.createElement(_reactNative.TouchableNativeFeedback,_extends({},buttonProps,{__source:{fileName:_jsxFileName,lineNumber:87}}),
_react2.default.createElement(_reactNative.View,{style:[styles.button,this.props.style,disabledStyle],__source:{fileName:_jsxFileName,lineNumber:88}},
this._renderText())));



}


return(
_react2.default.createElement(_reactNative.TouchableHighlight,_extends({},
buttonProps,{
style:[styles.button,this.props.style,disabledStyle],
underlayColor:this.props.underlayColor,__source:{fileName:_jsxFileName,lineNumber:97}}),

this._renderText()));


},_temp),_possibleConstructorReturn(_this,_ret);}return NativeButton;}(_react.Component);


NativeButton.propTypes=_extends({},

_reactNative.TouchableWithoutFeedback.propTypes,{
textStyle:_reactNative.Text.propTypes.style,
disabledStyle:_reactNative.Text.propTypes.style,
children:_propTypes2.default.node.isRequired,
underlayColor:_propTypes2.default.string,
background:_reactNative.TouchableNativeFeedback.propTypes?
_reactNative.TouchableNativeFeedback.propTypes.background:
_propTypes2.default.any});exports.default=


NativeButton;
//# sourceMappingURL=NativeButton.js.map