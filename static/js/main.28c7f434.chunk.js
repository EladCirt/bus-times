(this["webpackJsonpbus-time-ui"]=this["webpackJsonpbus-time-ui"]||[]).push([[0],{107:function(t,e,n){},108:function(t,e,n){},197:function(t,e,n){"use strict";n.r(e);var i=n(2),a=n(1),s=n(3),o=n.n(s),r=(n(107),n(4)),u=n(5),c=n(8),l=n(7),d=(n(108),n(13)),h="https://amitnew.eastus2.cloudapp.azure.com:44346/",f=h+"stations",p=h+"buses",b=f+"/",m="/bus/";function v(t){return fetch(t).then((function(t){if(t.ok)return t;throw new Error("Network response was not ok.")}))}function j(t){return t.map((function(t){return{id:t.id,value:t.id,number:t.number,label:(e=t,null!=e.destination?"".concat(e.number," \u05dc").concat(e.destination):e.number),destination:t.destination};var e}))}function g(t){return t.map((function(t){return{id:t.id,value:t.id,name:t.name,label:t.id+"("+t.name+")",lat:t.lat,lon:t.lon}}))}function O(t,e){return t<<16|e}function k(t,e,n,i){return(n<<16|i)^O(t,e)}var y=function(){function t(){Object(r.a)(this,t)}return Object(u.a)(t,null,[{key:"getAllStations",value:function(){return null===t.allStationsPromise&&(t.allStationsPromise=v("https://amitnew.eastus2.cloudapp.azure.com:44346/station").then((function(t){return t.json()})).then((function(t){return g(t)}))),t.allStationsPromise}},{key:"getStations",value:function(){return null===t.stationsPromise&&(t.stationsPromise=v(f).then((function(t){return t.json()})).then((function(t){return g(t)}))),t.stationsPromise}},{key:"getBuses",value:function(){return v(p).then((function(t){return t.json()})).then((function(t){return j(t)}))}},{key:"getBusesStations",value:function(t){return v("https://amitnew.eastus2.cloudapp.azure.com:44346/buses/"+t.join(",")).then((function(t){return t.json()})).then((function(t){return g(t)}))}},{key:"getStationBuses",value:function(t){return v("https://amitnew.eastus2.cloudapp.azure.com:44346/stations/"+t).then((function(t){return t.json()})).then((function(t){return j(t)}))}},{key:"getBusesTimes",value:function(t,e){return v(b+t+m+e).then((function(t){return t.json()})).then((function(n){return function(n){return n.map((function(n){return{id:k(t,e,n.time,n.count),time:n.time,count:n.count}}))}(n)}))}},{key:"getBusesCurTimes",value:function(t,e){return v(b+t+m+e+"/time").then((function(t){return t.text()})).then((function(t){return""!==t&&(t=parseInt(t,10)),t}))}},{key:"getRoutes",value:function(t,e,n){return v("".concat(h,"routes/").concat(t,"/").concat(e,"/").concat(n,"/route")).then((function(t){return t.json()}))}}]),t}();y.allStationsPromise=null,y.stationsPromise=null;var S=y,x=n(95),C=new(n.n(x).a)(window.navigator.userAgent);function w(){return C.mobile()}function I(t){var e=new Date(0);return e.setUTCSeconds(t),T(e.getUTCHours())+":"+T(e.getUTCMinutes())}function T(t){return t<10?"0"+t:t}var D=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={busesTimes:[],fullData:!1,isShowBusesCount:!1},i}return Object(u.a)(n,[{key:"updateBusData",value:function(){var t=this;null!==this.props.stationId&&null!=this.props.busId&&S.getBusesTimes(this.props.stationId,this.props.busId).then((function(e){return t.setState({busesTimes:e})})).catch((function(t){return console.log(t)}))}},{key:"componentDidMount",value:function(){this.updateBusData()}},{key:"componentDidUpdate",value:function(t){this.props.stationId===t.stationId&&this.props.busId===t.busId||(this.setState({busesTimes:[]}),this.updateBusData())}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{className:"Buses-times",children:[Object(i.jsxs)("h4",{children:["\u05e7\u05d5 ",this.props.busNumber]}),Object(i.jsx)("label",{className:"Buses-times-list-desc",children:"\u05d4\u05d0\u05d5\u05d8\u05d5\u05d1\u05d5\u05e1 \u05d0\u05de\u05d5\u05e8 \u05dc\u05d4\u05d2\u05d9\u05e2 \u05d1\u05e9\u05e2\u05d5\u05ea \u05d4\u05d1\u05d0\u05d5\u05ea:"}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"Arrow-up",children:">"}),Object(i.jsx)("ul",{className:"Buses-times-list",children:n.filterBuses(this.state.fullData,this.state.busesTimes).filter((function(e){return e.time>=t.props.filterTimeStart&&e.time<=t.props.filterTimeEnd})).map((function(e){return Object(i.jsx)("li",{className:w()?"":"Buses-times-list-desktop",children:n.busTimeToString(e.time,e.count,t.state.isShowBusesCount)},e.id)}))}),Object(i.jsx)("div",{className:"Arrow-down",children:">"})]})}}],[{key:"filterBuses",value:function(t,e){if(t)return e;var n,i=0,a=0,s=Object(d.a)(e);try{for(s.s();!(n=s.n()).done;){i+=n.value.count,a++}}catch(h){s.e(h)}finally{s.f()}var o,r=[],u=i/a/2,c=Object(d.a)(e);try{for(c.s();!(o=c.n()).done;){var l=o.value;l.count>u&&r.push(l)}}catch(h){c.e(h)}finally{c.f()}return r}},{key:"busTimeToString",value:function(t,e,n){var i=I(t);return!w()&&n&&(i+=" \u05d5\u05d4\u05d2\u05d9\u05e2 \u05d1\u05e9\u05e2\u05d4 \u05d4\u05d6\u05d5 ".concat(e," \u05e4\u05e2\u05de\u05d9\u05dd")),i}}]),n}(a.Component),M=n(12),R=n.n(M),N=n(37);var B=n(40),E=(n(157),function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){var i;Object(r.a)(this,n);return(i=e.call(this,t)).state={curTime:null,fullData:!1},null!=i.props.autoRefresh&&!0!==i.props.autoRefresh||(i.refreshInterval=setInterval((function(){i.updateBusData()}),1e4)),i}return Object(u.a)(n,[{key:"updateBusData",value:function(){var t=this;null!==this.props.stationId&&null!=this.props.busId&&S.getBusesCurTimes(this.props.stationId,this.props.busId).then((function(e){return t.setState({curTime:e})})).catch((function(e){console.log(e),t.setState({curTime:null})}))}},{key:"componentDidMount",value:function(){this.updateBusData()}},{key:"componentDidUpdate",value:function(t){this.props.stationId===t.stationId&&this.props.busId===t.busId||(this.setState({curTime:null}),this.updateBusData())}},{key:"componentWillUnmount",value:function(){null!=this.refreshInterval&&clearInterval(this.refreshInterval)}},{key:"render",value:function(){var t,e;return""===this.state.curTime?(t=" \u05dc\u05d0 \u05d0\u05de\u05d5\u05e8 \u05dc\u05d4\u05d2\u05d9\u05e2 \u05dc ",e=" \u05d1\u05e7\u05e8\u05d5\u05d1"):(t=" \u05de\u05d2\u05d9\u05e2 \u05dc\u05ea\u05d7\u05e0\u05ea ",e=0===this.state.curTime?" \u05e2\u05db\u05e9\u05d9\u05d5":1===this.state.curTime?" \u05d1\u05e2\u05d5\u05d3 \u05db\u05d3\u05e7\u05d4":" \u05d1\u05e2\u05d5\u05d3 \u05db "+this.state.curTime+" \u05d3\u05e7\u05d5\u05ea"),null!=this.state.curTime?Object(i.jsxs)("div",{children:["\u05e7\u05d5 ",Object(i.jsx)("b",{children:this.props.busNumber}),t,Object(i.jsx)("b",{children:this.props.stationName}),e]}):null}}]),n}(a.Component)),H=n(36),V=n(27),A=n(53),F=n(52);function L(t){var e=t.items,n=t.value,a=t.maxShownItems,s=t.isMulti,o=t.placeholder,r=t.emptyFilterValue,u=t.filterFunction,c=t.onOpen,l=t.onClose,d=t.onValueChange,h=t.onInputChange,f=h&&function(t,e){"input-change"===e.action&&h(t)},p=34*(a=a||4)+14;return Object(i.jsx)(F.a,{options:e||[],value:n,maxMenuHeight:p,placeholder:o,noOptionsMessage:function(){return r},onInputChange:f,onChange:d,isMulti:s,filterOption:u,onMenuOpen:c,onMenuClose:l,hideSelectedOptions:!0,isRtl:!0})}var P=n(19),U=n.n(P),W=n(35),z=n(71);function K(){return(K=Object(W.a)(U.a.mark((function t(){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.getAllStations();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(t,e){var n=t.label;return-1!==n.indexOf(e)||-1!==n.replace(".\u05ea","\u05ea\u05d7\u05e0\u05d4").indexOf(e)||-1!==n.replace("\u05ea.","\u05ea").indexOf(e)||-1!==n.indexOf(e.replace("\u05ea ","\u05ea."))}function q(t,e){return{lat:t,lon:e}}function Q(t){var e=t.stations,n=t.onInputChange,s=t.onValueChange,o=Object(A.a)(t,["stations","onInputChange","onValueChange"]),r=Object(a.useState)(null),u=Object(H.a)(r,2),c=u[0],l=u[1];Object(a.useEffect)((function(){l(null)}),[e]);return Object(i.jsx)(L,Object(V.a)({items:c,onInputChange:function(t){t.length<=2?l(null):l(e&&e.filter((function(e){return J(e,t)}))),n&&n(t)},onValueChange:function(t){l(null),s&&s(t)},maxShownItems:w()?4:7,placeholder:"\u05d1\u05d7\u05e8 \u05ea\u05d7\u05e0\u05d4",emptyFilterValue:"\u05d4\u05e7\u05dc\u05d3 \u05db\u05d3\u05d9 \u05dc\u05d7\u05e4\u05e9",filterFunctions:J},o))}function $(t){var e=t.buses,n=Object(A.a)(t,["buses"]);return Object(i.jsx)(L,Object(V.a)({items:e,maxShownItems:w()?4:7,placeholder:"\u05d1\u05d7\u05e8 \u05e7\u05d5",emptyFilterValue:"\u05d0\u05d9\u05df \u05e7\u05d5\u05d9\u05dd"},n))}function G(){return(G=Object(W.a)(U.a.mark((function t(e){var n,i;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.map((function(t){return S.getStationBuses(t.id)})),t.next=3,Promise.all(n);case 3:return i=t.sent,t.abrupt("return",e.reduce((function(t,e,n){return t.concat(i[n].map((function(t){return Object(V.a)(Object(V.a)({},t),{},{stationId:e.id})})))}),[]));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function X(t){var e=t.stations,n=t.onDataChanged,s=Object(a.useState)(null),o=Object(H.a)(s,2),r=o[0],u=o[1],c=Object(a.useState)(null),l=Object(H.a)(c,2),d=l[0],h=l[1],f=Object(a.useState)(null),p=Object(H.a)(f,2),b=p[0],m=p[1],v=function(t,e){n(e&&e.filter((function(t){return t.stationId})).map((function(e){var n=t.find((function(t){return t.id===e.stationId}));return n&&{originStation:n,bus:e}})))},j=function(t){h(t);var n=t?b.filter((function(e){return t.some((function(t){return e.id===t.id}))})):null;m(n),v(e,n)};return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"App-intro",children:"\u05d1\u05d7\u05e8\u05d5 \u05ea\u05d7\u05e0\u05d4 \u05d5\u05de\u05e1\u05e4\u05e8 \u05e7\u05d5 \u05d5\u05d4\u05d6\u05de\u05e0\u05d9\u05dd \u05d9\u05d5\u05e4\u05d9\u05e2\u05d5 \u05dc\u05de\u05d8\u05d4"}),Object(i.jsx)(Q,{stations:e,value:r,onValueChange:function(t){u(t),t?(function(t){return G.apply(this,arguments)}(t).then((function(t){return h(t)})),d&&j(d.filter((function(e){return t.some((function(t){return t.id===e.stationId}))})))):j(null)},isMulti:!0}),Object(i.jsx)($,{buses:d,value:b,onValueChange:function(t){m(t),v(e,t)},isMulti:!0})]})}var Y=n(101),Z=n(26),_=function(){function t(){Object(r.a)(this,t),this.callbacks=[]}return Object(u.a)(t,[{key:"addCallback",value:function(t){this.callbacks.push(t)}},{key:"removeCallback",value:function(t){var e=this.callbacks.indexOf(t);e>-1&&this.callbacks.splice(e,1)}},{key:"onChanged",value:function(t){var e,n=Object(d.a)(this.callbacks);try{for(n.s();!(e=n.n()).done;){(0,e.value)(t)}}catch(i){n.e(i)}finally{n.f()}}}]),t}(),tt=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).keyboard=!1,t}return Object(u.a)(n,[{key:"hasKeyboard",value:function(){return this.keyboard}},{key:"setHasKeyboard",value:function(t){t!==this.keyboard&&(Object(Y.a)(Object(Z.a)(n.prototype),"onChanged",this).call(this,t),this.keyboard=t)}}]),n}(_);var et=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).location=null,t.errorReason=null,t}return Object(u.a)(n,[{key:"calcLocation",value:function(){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){t.location={lat:e.coords.latitude,lon:e.coords.longitude},t.onChanged(t.location)}),(function(){t.errorReason=new Error("\u05de\u05d9\u05e7\u05d5\u05dd \u05d0\u05d9\u05e0\u05d5 \u05d6\u05de\u05d9\u05df"),t.onChanged(null)})):this.errorReason=new Error("\u05de\u05d9\u05e7\u05d5\u05dd \u05d0\u05d9\u05e0\u05d5 \u05d6\u05de\u05d9\u05df")}},{key:"isLocationOk",value:function(){return null===this.errorReason}},{key:"getErrorReason",value:function(){return this.errorReason}},{key:"getLocation",value:function(){return this.location}}]),n}(_),nt=n(100),it=n.n(nt),at=n(17),st=n.n(at),ot=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"selectFilter",value:function(t,e){if(n.stringMatch(t.label,e))return!0;if(null!=this.props.objectReplacement){var i,a=Object(d.a)(this.props.objectReplacement);try{for(a.s();!(i=a.n()).done;){var s=i.value,o=s.from,r=s.to;if(n.stringMatch(t.label.replace(o,r),e))return!0}}catch(p){a.e(p)}finally{a.f()}}if(null!=this.props.searchReplacement){var u,c=Object(d.a)(this.props.searchReplacement);try{for(c.s();!(u=c.n()).done;){var l=u.value,h=l.from,f=l.to;if(n.stringMatch(t.label,e.replace(h,f)))return!0}}catch(p){c.e(p)}finally{c.f()}}return!1}},{key:"render",value:function(){var t=this,e=4;null!=this.props.numOfOptions&&(e=this.props.numOfOptions);return null!==this.props.items&&Object(i.jsx)(F.a,{maxMenuHeight:34*e+14,options:this.props.items,placeholder:this.props.noValue,onChange:this.props.onSelectedChanged,noOptionsMessage:function(){return t.props.emptyFilterValue},onMenuOpen:this.props.selectOpened,onMenuClose:this.props.selectClosed,value:this.props.value,isMulti:this.props.multi,hideSelectedOptions:!0,isRtl:!0,filterOption:this.selectFilter.bind(this),onInputChange:function(e,n){"input-change"===n.action&&void 0!==t.props.onInputChange&&t.props.onInputChange(e)}})}}],[{key:"stringMatch",value:function(t,e){return-1!==t.indexOf(e)}}]),n}(a.Component),rt=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={items:[],selectedItem:null},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsx)(ot,{items:this.state.items,onInputChange:function(e){if(e.length<=2)t.state.items.length>0&&t.setState({items:[],selectedItem:null});else{var n,i=[],a=Object(d.a)(t.props.items);try{for(a.s();!(n=a.n()).done;){var s=n.value;s.label.includes(e)&&i.push(s)}}catch(o){a.e(o)}finally{a.f()}t.setState({items:i})}},value:this.state.selectedItem,onSelectedChanged:function(e){t.setState({selectedItem:e}),t.props.onSelectedChanged(e)},numOfOptions:w()?4:7,selectOpened:function(){return t.props.keyboard.setHasKeyboard(!0)},selectClosed:function(){t.props.keyboard.setHasKeyboard(!1),null===t.state.selectedItem&&t.setState({items:[]})},noValue:this.props.noValue,emptyFilterValue:"\u05d4\u05e7\u05dc\u05d3 \u05db\u05d3\u05d9 \u05dc\u05d7\u05e4\u05e9",multi:!1})}}]),n}(a.Component);function ut(t){return t.isLoading?Object(i.jsx)("img",{src:"loader.gif"}):Object(i.jsx)(i.Fragment,{})}var ct=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={stations:[],originStation:null,destinationStation:null,time:st()(),routeCalculationId:0,isLoading:!1},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;S.getAllStations().then((function(e){return t.setState({stations:e})}))}},{key:"getStationData",value:function(t){return this.state.stations.find((function(e){return t===e.id}))}},{key:"calcRoute",value:function(){var t=Object(W.a)(U.a.mark((function t(e){var i,a,s,o,r,u;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({isLoading:!0}),t.next=3,S.getRoutes(this.state.originStation.id,this.state.destinationStation.id,n.createTime(this.state.time));case 3:i=t.sent,a=[],s=Object(d.a)(i);try{for(s.s();!(o=s.n()).done;)r=o.value,u=r.busId&&{id:r.busId,label:r.busNumber},a.push({originStation:this.getStationData(r.originStationId),destinationStation:this.getStationData(r.destinationStationId),bus:u,destinationTime:r.destinationTime,originTime:r.originTime})}catch(c){s.e(c)}finally{s.f()}return this.state.routeCalculationId===e&&this.setState({isLoading:!1}),t.abrupt("return",a);case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getRoute",value:function(){var t=this;if(this.state.originStation&&this.state.destinationStation&&this.state.time){var e=this.state.routeCalculationId+1;this.setState({routeCalculationId:e},(function(){t.calcRoute(e).then((function(e){t.props.setData(e)}))}))}}},{key:"componentDidUpdate",value:function(t,e){var n,i,a,s,o,r;(null===e||void 0===e||null===(n=e.originStation)||void 0===n?void 0:n.id)===(null===(i=this.state)||void 0===i||null===(a=i.originStation)||void 0===a?void 0:a.id)&&(null===e||void 0===e||null===(s=e.destinationStation)||void 0===s?void 0:s.id)===(null===(o=this.state)||void 0===o||null===(r=o.destinationStation)||void 0===r?void 0:r.id)&&e.time===this.state.time||this.getRoute()}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"\u05e0\u05e7\u05d5\u05d3\u05ea \u05d4\u05ea\u05d7\u05dc\u05d4"}),Object(i.jsx)(rt,{items:this.state.destinationStation?this.state.stations.filter((function(e){return e.id!==t.state.destinationStation.id})):this.state.stations,keyboard:this.props.keyboard,onSelectedChanged:function(e){return t.setState({originStation:e})},noValue:"\u05d1\u05d7\u05e8 \u05ea\u05d7\u05e0\u05d4"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"\u05e0\u05e7\u05d5\u05d3\u05ea \u05e1\u05d9\u05d5\u05dd"}),Object(i.jsx)(rt,{items:this.state.originStation?this.state.stations.filter((function(e){return e.id!==t.state.originStation.id})):this.state.stations,keyboard:this.props.keyboard,onSelectedChanged:function(e){return t.setState({destinationStation:e})},noValue:"\u05d1\u05d7\u05e8 \u05ea\u05d7\u05e0\u05d4"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"\u05d6\u05de\u05df \u05d9\u05e6\u05d9\u05d0\u05d4"}),Object(i.jsx)(B.a,{showSecond:!1,onChange:function(e){return t.setState({time:e})},use12Hours:!1,value:this.state.time})]}),Object(i.jsx)(ut,{isLoading:this.state.isLoading})]})}}],[{key:"checkEqualNotNull",value:function(t,e){return null!==e&&t!==e}},{key:"createTime",value:function(t){return null!==t&&(t=t.diff(st()().startOf("day"),"seconds")),t}}]),n}(a.Component),lt=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(r.a)(this,n),t=e.call(this),N.a.initialize("UA-117962911-1",{testMode:!1}),N.a.pageview(window.location.pathname+window.location.search),t.isMobile=w(),t.state={busesData:null,isRoute:!0,startTime:0,endTime:86400,appError:null,stations:null},t.keyboard=new tt,t.gps=new et,t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;(function(){return K.apply(this,arguments)})().then((function(e){t.setState({stations:e}),new Promise((function(t,e){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){t({lat:e.coords.latitude,lon:e.coords.longitude})}),(function(){e(new Error("\u05de\u05d9\u05e7\u05d5\u05dd \u05d0\u05d9\u05e0\u05d5 \u05d6\u05de\u05d9\u05df"))})):e(new Error("\u05de\u05d9\u05e7\u05d5\u05dd \u05d0\u05d9\u05e0\u05d5 \u05d6\u05de\u05d9\u05df"))})).then((function(n){var i=e.slice();!function(t,e){t.sort((function(t,n){return Object(z.getDistance)(e,q(t.lat,t.lon))-Object(z.getDistance)(e,q(n.lat,n.lon))}))}(i,n),t.setState({stations:i})})).catch((function(e){return t.setState({appError:e})}))})),this.keyboardCallback=function(){return t.forceUpdate()},this.gpsCallback=function(e){null===e&&t.setState({appError:t.gps.getErrorReason()})},this.keyboard.addCallback(this.keyboardCallback),this.gps.addCallback(this.gpsCallback)}},{key:"componentWillUnmount",value:function(){this.keyboard.removeCallback(this.keyboardCallback),this.gps.removeCallback(this.gpsCallback)}},{key:"render",value:function(){var t=this,e=function(t,e){if(null===t)return e;var n=t.format("HH:mm").split(":");return 60*(60*parseInt(n[0],10)+parseInt(n[1],10))},a=R()("App-header",{"App-header-shrink":w()&&this.keyboard.hasKeyboard()});return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:a,children:Object(i.jsx)("h1",{className:"App-title",children:"\u05d6\u05de\u05e0\u05d9 \u05d0\u05d5\u05d8\u05d5\u05d1\u05d5\u05e1"})}),function(){if(null!==t.state.appError)return Object(i.jsx)("span",{className:"Error",children:t.state.appError.message})}(),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"Switch-button",children:"\u05d7\u05e4\u05e9 \u05dc\u05e4\u05d9 \u05de\u05e1\u05dc\u05d5\u05dc"}),Object(i.jsx)(it.a,{checked:this.state.isRoute,onChange:function(){var e;e=t.state.isRoute?"real time by station":"route",N.a.event({category:"user",action:"change screen",label:e}),t.setState({isRoute:!t.state.isRoute,busesData:null})},onColor:"#86d3ff",onHandleColor:"#2693e6",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48,className:"Ltr-align"})]}),this.state.isRoute?Object(i.jsx)(ct,{setData:function(e){return t.setState({busesData:e})},keyboard:this.keyboard}):Object(i.jsx)(X,{stations:this.state.stations,onDataChanged:function(e){return t.setState({busesData:e})}}),Object(i.jsx)("label",{children:"\u05e1\u05e0\u05df \u05dc\u05e4\u05d9 \u05d6\u05de\u05df \u05d4\u05ea\u05d7\u05dc\u05d4: "}),Object(i.jsx)(B.a,{className:"Time-picker-filter",showSecond:!1,onChange:function(n){return t.setState({startTime:e(n,0)})},disabledHours:function(){for(var e=[],i=n.timeToHour(t.state.endTime)+1;i<24;i++)e.push(i);return e},disabledMinutes:function(e){var i=[];if(e===n.timeToHour(t.state.endTime))for(var a=n.timeToMinute(t.state.endTime,e)+1;a<60;a++)i.push(a);return i}}),Object(i.jsx)("label",{children:" \u05d5\u05d6\u05de\u05df \u05e1\u05d9\u05d5\u05dd: "}),Object(i.jsx)(B.a,{className:"Time-picker-filter",showSecond:!1,onChange:function(n){return t.setState({endTime:e(n,86400)})},disabledHours:function(){for(var e=[],i=0;i<n.timeToHour(t.state.startTime);i++)e.push(i);return e},disabledMinutes:function(e){var i=[];if(e===n.timeToHour(t.state.startTime))for(var a=0;a<n.timeToMinute(t.state.startTime,e);a++)i.push(a);return i}}),this.state.isRoute&&t.state.busesData&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"\u05ea\u05d9\u05d0\u05d5\u05e8 \u05d4\u05de\u05e1\u05dc\u05d5\u05dc:"}),t.state.busesData.map((function(t){var e=t.destinationStation,n=t.originStation,a=t.bus,s=void 0===a?{}:a,o=t.originTime,r=n.name,u=e.name,c=s.label;return Object(i.jsx)("div",{children:c?Object(i.jsxs)(i.Fragment,{children:["\u05e1\u05e2 \u05d1\u05d0\u05d5\u05d8\u05d5\u05d1\u05d5\u05e1 ",Object(i.jsx)("b",{children:c})," \u05de\u05ea\u05d7\u05e0\u05ea ",Object(i.jsx)("b",{children:r})," \u05dc\u05ea\u05d7\u05e0\u05ea ",Object(i.jsx)("b",{children:u})," \u05d5\u05d9\u05d5\u05e6\u05d0 \u05d1\u05e9\u05e2\u05d4 ",I(o)]}):Object(i.jsxs)(i.Fragment,{children:["\u05dc\u05da \u05de\u05ea\u05d7\u05e0\u05ea ",Object(i.jsx)("b",{children:r})," \u05dc\u05ea\u05d7\u05e0\u05ea ",Object(i.jsx)("b",{children:u})]})},O(e.id))}))]}),Object(i.jsx)("br",{})]}),t.state.busesData&&t.state.busesData.map((function(t){var e=t.originStation,n=t.bus;return n&&Object(i.jsx)(E,{stationId:e.id,busId:n.id,busNumber:n.label,stationName:e.name},O(e.id,n.id))})),function(){var e=new Map;t.state.busesData&&t.state.busesData.forEach((function(t){var n=t.originStation,i=t.bus;i&&(e.get(n.id)||e.set(n.id,[]),e.get(n.id).push({originStation:n,bus:i}))}));var n=Array.from(e.keys());return n.map((function(a){var s=e.get(a),o=s[0].originStation.name;return Object(i.jsxs)("div",{children:[n.length>1&&Object(i.jsx)("h3",{className:"Buses-times",children:o}),s.map((function(e){var n=e.bus;return Object(i.jsx)(D,{stationId:a,busId:n.id,busNumber:n.label,filterTimeStart:t.state.startTime,filterTimeEnd:t.state.endTime},O(a,n.id))}))]},a)}))}()]})}}],[{key:"timeToHour",value:function(t){return Math.trunc(t/3600)}},{key:"timeToMinute",value:function(t,e){return Math.trunc(t/60-60*e)}}]),n}(a.Component),dt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ht(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}o.a.render(Object(i.jsx)(lt,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");dt?(!function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):ht(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):ht(t)}))}}()}},[[197,1,2]]]);
//# sourceMappingURL=main.28c7f434.chunk.js.map