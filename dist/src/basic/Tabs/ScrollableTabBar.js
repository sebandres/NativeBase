Object.defineProperty(exports,"__esModule",{value:true});exports.ScrollableTab=undefined;var _jsxFileName="src\\basic\\Tabs\\ScrollableTabBar.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);

var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _platform=require("./../../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);
var _index=require("./../../index");
var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ReactNative=require("react-native");var

View=






ReactNative.View,Animated=ReactNative.Animated,StyleSheet=ReactNative.StyleSheet,ScrollView=ReactNative.ScrollView,Platform=ReactNative.Platform,Dimensions=ReactNative.Dimensions,ViewPropTypes=ReactNative.ViewPropTypes;
var Button=require("./Button");

var WINDOW_WIDTH=Dimensions.get("window").width;var

ScrollableTabBar=function(_Component){_inherits(ScrollableTabBar,_Component);function ScrollableTabBar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ScrollableTabBar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ScrollableTabBar.__proto__||Object.getPrototypeOf(ScrollableTabBar)).call.apply(_ref,[this].concat(args))),_this),_this.
contextTypes={
theme:_propTypes2.default.object},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ScrollableTabBar,[{key:"getDefaultProps",value:function getDefaultProps()


{
return{
scrollOffset:52,
activeTextColor:"navy",
inactiveTextColor:"black",
backgroundColor:null,
style:{},
tabStyle:{},
tabsContainerStyle:{},
underlineStyle:{}};

}},{key:"getInitialState",value:function getInitialState()

{
this._tabsMeasurements=[];
return{
_leftTabUnderline:new Animated.Value(0),
_widthTabUnderline:new Animated.Value(0),
_containerWidth:null};

}},{key:"componentDidMount",value:function componentDidMount()

{
this.props.scrollValue.addListener(this.updateView);
}},{key:"updateView",value:function updateView(

offset){
var position=Math.floor(offset.value);
var pageOffset=offset.value%1;
var tabCount=this.props.tabs.length;
var lastTabPosition=tabCount-1;

if(tabCount===0||offset.value<0||offset.value>lastTabPosition){
return;
}

if(
this.necessarilyMeasurementsCompleted(
position,
position===lastTabPosition))

{
this.updateTabPanel(position,pageOffset);
this.updateTabUnderline(position,pageOffset,tabCount);
}
}},{key:"necessarilyMeasurementsCompleted",value:function necessarilyMeasurementsCompleted(

position,isLastTab){
return(
this._tabsMeasurements[position]&&(
isLastTab||this._tabsMeasurements[position+1])&&
this._tabContainerMeasurements&&
this._containerMeasurements);

}},{key:"updateTabPanel",value:function updateTabPanel(

position,pageOffset){
var containerWidth=this._containerMeasurements.width;
var tabWidth=this._tabsMeasurements[position].width;
var nextTabMeasurements=this._tabsMeasurements[position+1];
var nextTabWidth=
nextTabMeasurements&&nextTabMeasurements.width||0;
var tabOffset=this._tabsMeasurements[position].left;
var absolutePageOffset=pageOffset*tabWidth;
var newScrollX=tabOffset+absolutePageOffset;


newScrollX-=
(containerWidth-
(1-pageOffset)*tabWidth-
pageOffset*nextTabWidth)/
2;
newScrollX=newScrollX>=0?newScrollX:0;

if(Platform.OS==="android"){
this._scrollView.scrollTo({x:newScrollX,y:0,animated:false});
}else{
var rightBoundScroll=
this._tabContainerMeasurements.width-
this._containerMeasurements.width;
newScrollX=newScrollX>rightBoundScroll?
rightBoundScroll:
newScrollX;
this._scrollView.scrollTo({x:newScrollX,y:0,animated:false});
}
}},{key:"updateTabUnderline",value:function updateTabUnderline(

position,pageOffset,tabCount){
var lineLeft=this._tabsMeasurements[position].left;
var lineRight=this._tabsMeasurements[position].right;

if(position<tabCount-1){
var nextTabLeft=this._tabsMeasurements[position+1].left;
var nextTabRight=this._tabsMeasurements[position+1].right;

var newLineLeft=
pageOffset*nextTabLeft+(1-pageOffset)*lineLeft;
var newLineRight=
pageOffset*nextTabRight+(1-pageOffset)*lineRight;

this.state._leftTabUnderline.setValue(newLineLeft);
this.state._widthTabUnderline.setValue(newLineRight-newLineLeft);
}else{
this.state._leftTabUnderline.setValue(lineLeft);
this.state._widthTabUnderline.setValue(lineRight-lineLeft);
}
}},{key:"renderTab",value:function renderTab(


name,
page,
isTabActive,
onPressHandler,
onLayoutHandler,
tabStyle,
activeTabStyle,
textStyle,
activeTextStyle,
tabHeaderStyle)
{
var headerContent=typeof name!=="string"?
name.props.children:
undefined;var _props=
this.props,activeTextColor=_props.activeTextColor,inactiveTextColor=_props.inactiveTextColor;
var textColor=isTabActive?activeTextColor:inactiveTextColor;
var fontWeight=isTabActive?"bold":"normal";

if(typeof name==="string"){
return(
_react2.default.createElement(Button,{
key:name+"_"+page,
onPress:function onPress(){return onPressHandler(page);},
onLayout:onLayoutHandler,__source:{fileName:_jsxFileName,lineNumber:155}},

_react2.default.createElement(_index.TabHeading,{
scrollable:true,
style:isTabActive?activeTabStyle:tabStyle,
active:isTabActive,__source:{fileName:_jsxFileName,lineNumber:160}},

_react2.default.createElement(_index.Text,{style:isTabActive?activeTextStyle:textStyle,__source:{fileName:_jsxFileName,lineNumber:165}},
name))));




}else{
return(
_react2.default.createElement(Button,{key:_lodash2.default.random(1.2,5.2),onPress:function onPress(){return onPressHandler(page);},__source:{fileName:_jsxFileName,lineNumber:173}},
_react2.default.createElement(_index.TabHeading,{scrollable:true,style:tabHeaderStyle,active:isTabActive,__source:{fileName:_jsxFileName,lineNumber:174}},
headerContent)));



}
}},{key:"measureTab",value:function measureTab(

page,event){var _event$nativeEvent$la=
event.nativeEvent.layout,x=_event$nativeEvent$la.x,width=_event$nativeEvent$la.width,height=_event$nativeEvent$la.height;
this._tabsMeasurements[page]={left:x,right:x+width,width:width,height:height};
this.updateView({value:this.props.scrollValue._value});
}},{key:"render",value:function render()

{var _this2=this;
var variables=this.context.theme?
this.context.theme["@@shoutem.theme/themeStyle"].variables:_platform2.default;

var tabUnderlineStyle={
position:"absolute",
height:4,
backgroundColor:variables.topTabBarActiveBorderColor,
bottom:0};


var dynamicTabUnderline={
left:this.state._leftTabUnderline,
width:this.state._widthTabUnderline};


return(
_react2.default.createElement(View,{
style:[
styles.container,
{backgroundColor:this.props.backgroundColor},
this.props.style],

onLayout:this.onContainerLayout,__source:{fileName:_jsxFileName,lineNumber:205}},

_react2.default.createElement(ScrollView,{
automaticallyAdjustContentInsets:false,
ref:function ref(scrollView){
_this2._scrollView=scrollView;
},
horizontal:true,
showsHorizontalScrollIndicator:false,
showsVerticalScrollIndicator:false,
directionalLockEnabled:true,
onScroll:this.props.onScroll,
bounces:false,
scrollsToTop:false,__source:{fileName:_jsxFileName,lineNumber:213}},

_react2.default.createElement(View,{
style:[
styles.tabs,
{width:this.state._containerWidth},
this.props.tabsContainerStyle],

ref:"tabContainer",
onLayout:this.onTabContainerLayout,__source:{fileName:_jsxFileName,lineNumber:226}},

this.props.tabs.map(function(name,page){
var isTabActive=_this2.props.activeTab===page;
var renderTab=_this2.props.renderTab||_this2.renderTab;
return renderTab(
name,
page,
isTabActive,
_this2.props.goToPage,
_this2.measureTab.bind(_this2,page),
_this2.props.tabStyle[page],
_this2.props.activeTabStyle[page],
_this2.props.textStyle[page],
_this2.props.activeTextStyle[page],
_this2.props.tabHeaderStyle[page]);

}),
_react2.default.createElement(Animated.View,{
style:[
tabUnderlineStyle,
dynamicTabUnderline,
this.props.underlineStyle],__source:{fileName:_jsxFileName,lineNumber:251}})))));






}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(

nextProps){

if(
!_lodash2.default.isEqual(this.props.tabs,nextProps.tabs)&&
this.state._containerWidth)
{
this.setState({_containerWidth:null});
}
}},{key:"onTabContainerLayout",value:function onTabContainerLayout(

e){
this._tabContainerMeasurements=e.nativeEvent.layout;
var width=this._tabContainerMeasurements.width;
if(width<WINDOW_WIDTH){
width=WINDOW_WIDTH;
}
this.setState({_containerWidth:width});
this.updateView({value:this.props.scrollValue._value});
}},{key:"onContainerLayout",value:function onContainerLayout(

e){
this._containerMeasurements=e.nativeEvent.layout;
this.updateView({value:this.props.scrollValue._value});
}}]);return ScrollableTabBar;}(_react.Component);


ScrollableTabBar.propTypes={
goToPage:_propTypes2.default.func,
activeTab:_propTypes2.default.number,
tabs:_propTypes2.default.array,
backgroundColor:_propTypes2.default.string,
activeTextColor:_propTypes2.default.string,
inactiveTextColor:_propTypes2.default.string,
scrollOffset:_propTypes2.default.number,
style:ViewPropTypes.style,
tabStyle:ViewPropTypes.style,
tabsContainerStyle:ViewPropTypes.style,
renderTab:_propTypes2.default.func,
underlineStyle:ViewPropTypes.style,
onScroll:_propTypes2.default.func};




var StyledTab=(0,_nativeBaseShoutemTheme.connectStyle)(
"NativeBase.ScrollableTab",
{},
mapPropsToStyleNames)(
ScrollableTabBar);exports.
ScrollableTab=StyledTab;
var styles=StyleSheet.create({
tab:{
height:49,
alignItems:"center",
justifyContent:"center",
paddingLeft:20,
paddingRight:20},

container:{
height:50,
borderWidth:1,
borderTopWidth:0,
borderLeftWidth:0,
borderRightWidth:0,
borderColor:"#ccc"},

tabs:{
flexDirection:"row",
justifyContent:"space-around"}});
//# sourceMappingURL=ScrollableTabBar.js.map