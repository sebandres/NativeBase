Object.defineProperty(exports,"__esModule",{value:true});exports.ScrollableTabView=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src\\basic\\Tabs\\index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);












var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ReactNative=require("react-native");var Dimensions=ReactNative.Dimensions,View=ReactNative.View,Animated=ReactNative.Animated,ScrollView=ReactNative.ScrollView,StyleSheet=ReactNative.StyleSheet,InteractionManager=ReactNative.InteractionManager,Platform=ReactNative.Platform,ViewPropTypes=ReactNative.ViewPropTypes;var TimerMixin=require("react-timer-mixin");

var SceneComponent=require("./SceneComponent");var _require=
require("./DefaultTabBar"),DefaultTabBar=_require.DefaultTabBar;var _require2=
require("./ScrollableTabBar"),ScrollableTabBar=_require2.ScrollableTabBar;var

ScrollableTabView=function(_Component){_inherits(ScrollableTabView,_Component);function ScrollableTabView(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ScrollableTabView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ScrollableTabView.__proto__||Object.getPrototypeOf(ScrollableTabView)).call.apply(_ref,[this].concat(args))),_this),_this.
mixins=[TimerMixin],_this.
statics={
DefaultTabBar:DefaultTabBar,
ScrollableTabBar:ScrollableTabBar},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ScrollableTabView,[{key:'getDefaultProps',value:function getDefaultProps()


{
return{
tabBarPosition:"top",
initialPage:0,
page:-1,
onChangeTab:function onChangeTab(){},
onScroll:function onScroll(){},
contentProps:{},
scrollWithoutAnimation:false,
locked:false,
prerenderingSiblingsNumber:0};

}},{key:'getInitialState',value:function getInitialState()

{
return{
currentPage:this.props.initialPage,
scrollValue:new Animated.Value(this.props.initialPage),
containerWidth:Dimensions.get("window").width,
sceneKeys:this.newSceneKeys({currentPage:this.props.initialPage})};

}},{key:'componentDidMount',value:function componentDidMount()

{var _this2=this;
var scrollFn=function scrollFn(){
if(_this2.scrollView&&Platform.OS==="android"){
var x=_this2.props.initialPage*_this2.state.containerWidth;
_this2.scrollView.scrollTo({x:x,animated:false});
}
};
this.setTimeout(function(){
InteractionManager.runAfterInteractions(scrollFn);
},0);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

props){
if(props.children!==this.props.children){
this.updateSceneKeys({
page:this.state.currentPage,
children:props.children});

}

if(props.page>=0&&props.page!==this.state.currentPage){
this.goToPage(props.page);
}
}},{key:'goToPage',value:function goToPage(

pageNumber){
var offset=pageNumber*this.state.containerWidth;
if(this.scrollView){
this.scrollView.scrollTo({
x:offset,
y:0,
animated:!this.props.scrollWithoutAnimation});

}

var currentPage=this.state.currentPage;
this.updateSceneKeys({
page:pageNumber,
callback:this._onChangeTab.bind(this,currentPage,pageNumber)});

}},{key:'renderTabBar',value:function renderTabBar(

props){
if(this.props.renderTabBar===false){
return null;
}else if(this.props.renderTabBar){
return _react2.default.cloneElement(this.props.renderTabBar(props),props);
}else{
return _react2.default.createElement(DefaultTabBar,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:99}}));
}
}},{key:'updateSceneKeys',value:function updateSceneKeys(_ref2)





{var page=_ref2.page,_ref2$children=_ref2.children,children=_ref2$children===undefined?this.props.children:_ref2$children,_ref2$callback=_ref2.callback,callback=_ref2$callback===undefined?function(){}:_ref2$callback;
var newKeys=this.newSceneKeys({
previousKeys:this.state.sceneKeys,
currentPage:page,
children:children});

this.setState({currentPage:page,sceneKeys:newKeys},callback);
}},{key:'newSceneKeys',value:function newSceneKeys(_ref3)





{var _this3=this;var _ref3$previousKeys=_ref3.previousKeys,previousKeys=_ref3$previousKeys===undefined?[]:_ref3$previousKeys,_ref3$currentPage=_ref3.currentPage,currentPage=_ref3$currentPage===undefined?0:_ref3$currentPage,_ref3$children=_ref3.children,children=_ref3$children===undefined?this.props.children:_ref3$children;
var newKeys=[];
this._children(children).forEach(function(child,idx){
var key=_this3._makeSceneKey(child,idx);
if(
_this3._keyExists(previousKeys,key)||
_this3._shouldRenderSceneKey(idx,currentPage))
{
newKeys.push(key);
}
});
return newKeys;
}},{key:'_shouldRenderSceneKey',value:function _shouldRenderSceneKey(

idx,currentPageKey){
var numOfSibling=this.props.prerenderingSiblingsNumber;
return(
idx<currentPageKey+numOfSibling+1&&
idx>currentPageKey-numOfSibling-1);

}},{key:'_keyExists',value:function _keyExists(

sceneKeys,key){
return sceneKeys.find(function(sceneKey){return key===sceneKey;});
}},{key:'_makeSceneKey',value:function _makeSceneKey(

child,idx){
return child.props.heading+"_"+idx;
}},{key:'renderScrollableContent',value:function renderScrollableContent()

{var _this4=this;
var scenes=this._composeScenes();
return(
_react2.default.createElement(ScrollView,_extends({
horizontal:true,
pagingEnabled:true,
automaticallyAdjustContentInsets:false,
contentOffset:{
x:this.props.initialPage*this.state.containerWidth},

ref:function ref(scrollView){
_this4.scrollView=scrollView;
},
onScroll:function onScroll(e){
var offsetX=e.nativeEvent.contentOffset.x;
_this4._updateScrollValue(offsetX/_this4.state.containerWidth);
},
onMomentumScrollBegin:this._onMomentumScrollBeginAndEnd,
onMomentumScrollEnd:this._onMomentumScrollBeginAndEnd,
scrollEventThrottle:16,
scrollsToTop:false,
showsHorizontalScrollIndicator:false,
scrollEnabled:!this.props.locked,
directionalLockEnabled:true,
alwaysBounceVertical:false,
keyboardDismissMode:'on-drag'},
this.props.contentProps,{__source:{fileName:_jsxFileName,lineNumber:153}}),

scenes));


}},{key:'_composeScenes',value:function _composeScenes()

{var _this5=this;
return this._children().map(function(child,idx){
var key=_this5._makeSceneKey(child,idx);
return(
_react2.default.createElement(SceneComponent,{
key:child.key,
shouldUpdated:_this5._shouldRenderSceneKey(
idx,
_this5.state.currentPage),

style:{width:_this5.state.containerWidth},__source:{fileName:_jsxFileName,lineNumber:187}},

_this5._keyExists(_this5.state.sceneKeys,key)?
child:
_react2.default.createElement(View,{heading:child.props.heading,__source:{fileName:_jsxFileName,lineNumber:197}})));


});
}},{key:'_onMomentumScrollBeginAndEnd',value:function _onMomentumScrollBeginAndEnd(

e){
var offsetX=e.nativeEvent.contentOffset.x;
var page=Math.round(offsetX/this.state.containerWidth);
if(this.state.currentPage!==page){
this._updateSelectedPage(page);
}
}},{key:'_updateSelectedPage',value:function _updateSelectedPage(

nextPage){
var localNextPage=nextPage;
if(typeof localNextPage==="object"){
localNextPage=nextPage.nativeEvent.position;
}

var currentPage=this.state.currentPage;
this.updateSceneKeys({
page:localNextPage,
callback:this._onChangeTab.bind(this,currentPage,localNextPage)});

}},{key:'_onChangeTab',value:function _onChangeTab(

prevPage,currentPage){
this.props.onChangeTab({
i:currentPage,
ref:this._children()[currentPage],
from:prevPage});

}},{key:'_updateScrollValue',value:function _updateScrollValue(

value){
this.state.scrollValue.setValue(value);
this.props.onScroll(value);
}},{key:'_handleLayout',value:function _handleLayout(

e){var _this6=this;var
width=e.nativeEvent.layout.width;

if(Math.round(width)!==Math.round(this.state.containerWidth)){
this.setState({containerWidth:width});
this.requestAnimationFrame(function(){
_this6.goToPage(_this6.state.currentPage);
});
}
}},{key:'_children',value:function _children()

{var children=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.props.children;
return _react2.default.Children.map(children,function(child){return child;});
}},{key:'render',value:function render()

{
var overlayTabs=
this.props.tabBarPosition==="overlayTop"||
this.props.tabBarPosition==="overlayBottom";
var tabBarProps={
goToPage:this.goToPage,
tabs:this._children().map(function(child){return child.props.heading;}),
tabStyle:this._children().map(function(child){return child.props.tabStyle;}),
activeTabStyle:this._children().map(function(child){return child.props.activeTabStyle;}),
textStyle:this._children().map(function(child){return child.props.textStyle;}),
activeTextStyle:this._children().map(
function(child){return child.props.activeTextStyle;}),

tabHeaderStyle:this._children().map(function(child){return(
_lodash2.default.get(child.props.heading.props,"style",undefined));}),

activeTab:this.state.currentPage,
scrollValue:this.state.scrollValue,
containerWidth:this.state.containerWidth};


if(this.props.tabBarBackgroundColor){
tabBarProps.backgroundColor=this.props.tabBarBackgroundColor;
}
if(this.props.tabBarActiveTextColor){
tabBarProps.activeTextColor=this.props.tabBarActiveTextColor;
}
if(this.props.tabBarInactiveTextColor){
tabBarProps.inactiveTextColor=this.props.tabBarInactiveTextColor;
}
if(this.props.tabBarTextStyle){
tabBarProps.textStyle=this.props.tabBarTextStyle;
}
if(this.props.tabBarUnderlineStyle){
tabBarProps.underlineStyle=this.props.tabBarUnderlineStyle;
}
if(overlayTabs){
tabBarProps.style=_defineProperty({
position:"absolute",
left:0,
right:0},
this.props.tabBarPosition==="overlayTop"?"top":"bottom",0);

}

return(
_react2.default.createElement(View,{
style:[styles.container,this.props.style],
onLayout:this._handleLayout,__source:{fileName:_jsxFileName,lineNumber:298}},

this.props.tabBarPosition==="top"&&this.renderTabBar(tabBarProps),
this.renderScrollableContent(),
(this.props.tabBarPosition==="bottom"||overlayTabs)&&
this.renderTabBar(tabBarProps)));


}}]);return ScrollableTabView;}(_react.Component);


ScrollableTabView.propTypes={
tabBarPosition:_propTypes2.default.oneOf([
"top",
"bottom",
"overlayTop",
"overlayBottom"]),

initialPage:_propTypes2.default.number,
page:_propTypes2.default.number,
onChangeTab:_propTypes2.default.func,
onScroll:_propTypes2.default.func,
renderTabBar:_propTypes2.default.any,
style:ViewPropTypes.style,
contentProps:_propTypes2.default.object,
scrollWithoutAnimation:_propTypes2.default.bool,
locked:_propTypes2.default.bool,
prerenderingSiblingsNumber:_propTypes2.default.number};exports.


ScrollableTabView=ScrollableTabView;

var styles=StyleSheet.create({
container:{
flex:1},

scrollableContentAndroid:{
flex:1}});
//# sourceMappingURL=index.js.map