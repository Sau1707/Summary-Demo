(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(8269)}])},8269:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return D}});var d,e=c(5893),f=c(7294),g=c(1438),h=c(8029),i=c(6567),j=c(1973),k=c.n(j);function l(a){return(0,e.jsx)("div",{className:k().printPage,children:a.children.map(function(a){return a})})}var m=c(8540),n=c.n(m),o=function(a){(0,h.Z)(c,a);var b=(0,i.Z)(c);function c(){var a;return(0,g.Z)(this,c),a=b.apply(this,arguments),a.state={pages:null,firstRender:!0,arrays:[]},a.arrays=[],a.oldPos={},a.myRef=(0,f.createRef)(),a}var d=c.prototype;return d.componentDidMount=function(){this.calculateArrays()},d.shouldComponentUpdate=function(){return null==this.state.pages||null!=this.state.pages&&!this.state.firstRender&&(this.state.pages=null,this.state.firstRender=!0,!0)},d.componentDidUpdate=function(){if(this.state.firstRender&&this.state.pages){this.state.firstRender=!1,this.animate(),this.storePos();return}this.calculateArrays()},d.renderContent=function(){return(0,e.jsx)(e.Fragment,{children:this.state.arrays.map(function(a,b){return(0,e.jsxs)(l,{children:[" ",a," "]},b)})})},d.calculateArrays=function(){var a=this;this.arrays=[];var b=this.myRef.current.children[0].children,c=[],d=1;Array.from(b).forEach(function(b,e){b.offsetLeft>1095*d&&(a.arrays.push(c),c=[],d+=1),c.push(a.props.children[e])}),this.arrays.push(c),this.setState({pages:1,arrays:this.arrays})},d.storePos=function(){var a=this;Array.from(this.myRef.current.children).map(function(b){Array.from(b.children).map(function(b){var c=document.getElementById(b.id);if(c){var d=c.getBoundingClientRect();a.oldPos[b.id]={x:d.x,y:d.y}}})})},d.animate=function(){var a=this;0!==Object.keys(this.oldPos).length&&Array.from(this.myRef.current.children).map(function(b){Array.from(b.children).map(function(b){var c=b.getBoundingClientRect(),d=a.oldPos[b.id];if(d){var e=[d.x-c.x,d.y-c.y],f=e[0],g=e[1];g&&requestAnimationFrame(function(){var a=document.getElementById(b.id);a&&(a.style.transform="translateX(".concat(f,"px) translateY(").concat(g,"px)"),a.style.transition="transform 0s",requestAnimationFrame(function(){a&&(a.style.transform="",a.style.transition="transform 500ms")}))})}})})},d.render=function(){return(0,e.jsx)("div",{ref:this.myRef,id:"printContainer",className:n().container,children:this.state.pages?this.renderContent():(0,e.jsxs)(l,{children:[" ",this.props.children," "]})})},c}(f.Component),p=c(1799),q=c(2356),r=new Uint8Array(16);function s(){if(!d&&!(d="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return d(r)}for(var t=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,u=[],v=0;v<256;++v)u.push((v+256).toString(16).substr(1));var w=function(a){var b,c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:0,d=(u[a[c+0]]+u[a[c+1]]+u[a[c+2]]+u[a[c+3]]+"-"+u[a[c+4]]+u[a[c+5]]+"-"+u[a[c+6]]+u[a[c+7]]+"-"+u[a[c+8]]+u[a[c+9]]+"-"+u[a[c+10]]+u[a[c+11]]+u[a[c+12]]+u[a[c+13]]+u[a[c+14]]+u[a[c+15]]).toLowerCase();if(!("string"==typeof(b=d)&&t.test(b)))throw TypeError("Stringified UUID is invalid");return d},x=function(a,b,c){var d=(a=a||{}).random||(a.rng||s)();if(d[6]=15&d[6]|64,d[8]=63&d[8]|128,b){c=c||0;for(var e=0;e<16;++e)b[c+e]=d[e];return b}return w(d)};function y(a){var b=(0,f.createRef)(),c={},d=(0,f.useState)(!1),g=d[0],h=d[1],i=(0,f.useContext)(q.G),j=i[0],k=a.data?a.data:a.element.default;k.id||(k.id=x()),c=(0,p.Z)({},k);var l,m,n=function(a){var b=j.updateElement(c.id,a);b&&(j.elementsList=b,h(!1))};return(0,f.useEffect)(function(){var a=b.current;a.addEventListener("transitionstart",function(){return a.style.pointerEvents="none"}),a.addEventListener("transitionend",function(){return a.style.pointerEvents=""})},[]),(0,e.jsxs)("div",{draggable:!0,id:c.id,ref:b,onDragStart:function(){return j.onDragStart(c.id)},onDragOver:function(a){return j.onDragOver(a)},onDragEnd:function(){return j.onDragEnd()},onDoubleClick:function(){return a.data?h(!0):null},children:[(0,e.jsx)(a.element.dialog,(l=(0,p.Z)({},c),m=(m={open:g,onClose:n},m),Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(m)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(m)).forEach(function(a){Object.defineProperty(l,a,Object.getOwnPropertyDescriptor(m,a))}),l)),(0,e.jsx)(a.element.element,(0,p.Z)({},c))]})}var z=c(4749),A=c.n(z);function B(){var a=(0,f.useContext)(q.G)[0],b=(0,f.useState)(!1),c=b[0],d=b[1],g=[];for(var h in a.titleList)g.push((0,e.jsx)(y,{element:a.titleList[h],data:{text:"Demo",height:100,color:"#171717"}},Math.random()));return(0,e.jsx)("div",{className:c?A().mainBoxOpen:A().mainBoxClose,children:(0,e.jsxs)("div",{className:"".concat(A().fixed," ").concat(c?A().fixedOpen:A().fixedClose),children:[(0,e.jsx)("div",{onClick:function(){return d(!c)},className:"".concat(A().trigger," ").concat(c?A().triggerClose:A().triggerOpen)}),g.map(function(a){return a})]})})}var C=c(1694);function D(){var a=(0,f.useContext)(q.G)[0];return(0,e.jsxs)("div",{style:{width:"100%",display:"inline-flex"},children:[(0,e.jsx)(B,{}),(0,e.jsx)(o,{children:a.elementsList.map(function(a){return(0,e.jsx)(y,{element:C.Z,data:a},a.id)})})]})}},4749:function(a){a.exports={mainBoxOpen:"Menu_mainBoxOpen__Ei2ss","open-animate":"Menu_open-animate__JCl4o",mainBoxClose:"Menu_mainBoxClose__yUzb6","close-animate":"Menu_close-animate__mDtc_",fixed:"Menu_fixed__mLCXz",fixedOpen:"Menu_fixedOpen__BVkih",fixedClose:"Menu_fixedClose__mYVF8",trigger:"Menu_trigger___OI_e",triggerOpen:"Menu_triggerOpen__3f6_Y",spinOpen:"Menu_spinOpen__SyKRl",triggerClose:"Menu_triggerClose__jizy0",spinClose:"Menu_spinClose___MHaw",buttonsOpen:"Menu_buttonsOpen__BE26r",buttonsClose:"Menu_buttonsClose__0QCm4"}},1973:function(a){a.exports={printPage:"Page_printPage__cyX8E"}},8540:function(a){a.exports={container:"PrintArea_container__S_ux_",dragging:"PrintArea_dragging__G_X2n"}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])