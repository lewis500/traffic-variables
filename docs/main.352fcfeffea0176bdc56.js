(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(17),i=r(152),o=r(149),l=r(44),u=(Math.sqrt(5),160/1.5),s=r(12),m=r(38),f=r.n(m);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y,E=Math.min,b=Math.max,g=Object(s.a)(function(e){return b(E(6e4/3600,6.666666666666666*(.25/e-1)),0)}),v=Object(s.a)(function(e){return b(E(6e4/3600*e,6.666666666666666*(.25-e)),0)}),x={play:!1,time:0,k:.07142857142857142};!function(e){e.TICK="TICK",e.SET_K="SET_K",e.SET_TIME="SET_TIME",e.SET_PLAY="SET_PLAY"}(y||(y={}));var k=Object(s.a)(function(e){return f()(30*-v(e),160*e).map(function(t){return{x0:t/e,t0:0,x1:t/e+30*g(e),t1:30}})}),w=Object(s.a)(function(e,t){var r=t*g(e);return k(e).map(function(e){return e.x0+r})}),O=Object(s.a)(function(e){var t=g(e);return k(e).map(function(e){return e.x0+7.5*t}).filter(function(e){return e>=40&&e<40+u})}),j=Object(s.a)(function(e){var t=g(e);return k(e).map(function(e){return(40-e.x0)/t}).filter(function(e){return e>=7.5&&e<22.5})}),S=function(e,t){switch(t.type){case y.SET_TIME:return p({},e,{time:t.payload});case y.TICK:return p({},e,{time:(e.time+t.payload)%30});case y.SET_K:return p({},e,{k:t.payload});case y.SET_PLAY:return p({},e,{play:t.payload});default:return e}},T=a.a.createContext({state:x,dispatch:null}),A=r(29),M=r(151),P=r(148),C=r(31),L=r(145),I=r(146),_=r(147),N=r(30),K=r(39),W=r.n(K),z=(r(37),{fontSize:"12px"}),Y=a.a.memo(function(e){var t=e.dx,r=e.dy,n=e.latexstring;return a.a.createElement("foreignObject",{width:"90",height:"75",transform:"translate(".concat(t,", ").concat(r,")")},a.a.createElement("span",{style:z},a.a.createElement(W.a,{math:n})))});function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw c}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var B=function(e){return e?{width:e.offsetWidth,height:e.offsetHeight}:{width:0,height:0}};var R=a.a.memo(function(){return a.a.createElement("defs",null,a.a.createElement("marker",{id:"arrow",viewBox:"0 0 15 15",refY:"5",refX:"2",markerWidth:"8",markerHeight:"8",orient:"auto-start-reverse",fill:"black"},a.a.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z"})))});function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw c}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var H=25,J=30,q=20,U=10,X="translate(".concat(q,",").concat(H,")"),G=Object(s.a)(function(e,t){return{tScale:Object(C.a)().range([0,e]).domain([0,30]),xScale:Object(C.a)().range([t,0]).domain([0,160])}}),Q=a.a.memo(function(e){var t=e.xScale,r=e.tScale,n=e.k,c=e.lineClass;return a.a.createElement("g",{id:"g-lines"},k(n).map(function(e,n){var i=e.x1,o=e.x0,l=e.t1,u=e.t0;return a.a.createElement("path",{key:n,d:"M".concat(r(u),",").concat(t(o),"L").concat(r(l),",").concat(t(i)),className:c})}))}),V={},Z=function(){var e,t,r,c,i,o=Object(n.useContext)(T).state,l=Object(n.useRef)(),s=function(e){var t=e.width,r=e.height;return{width:Math.max(t-q-U,0),height:Math.max(r-H-J,0)}}((e=l,t=D(Object(n.useState)(B(e?e.current:null)),2),r=t[0],c=t[1],i=Object(n.useCallback)(function(){return e.current&&c(B(e.current))},[e]),Object(n.useLayoutEffect)(function(){if(e.current)return i(),window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}},[e.current]),r)),m=s.width,f=s.height,d=$(V),p=G(m,f),h=p.tScale,y=p.xScale,E=F(Object(n.useMemo)(function(){return[f-y(3.5),f-y(2)]},[y]),2),b=E[0],g=E[1];return a.a.createElement("div",{ref:l,className:d.container},a.a.createElement("svg",{className:d.svg},a.a.createElement(R,null),a.a.createElement("g",{transform:X},a.a.createElement("mask",{id:"myMask2"},a.a.createElement("rect",{width:m,height:f,fill:"white"})),a.a.createElement("g",{id:"g-masked",mask:"url(#myMask2)"},Object(n.createElement)(Q,{xScale:y,tScale:h,k:o.k,lineClass:d.line}),a.a.createElement("g",{id:"g-cut"},a.a.createElement("rect",{className:d.cut,width:h(15),height:f-y(u),y:y(40+u),x:h(7.5)}),O(o.k).map(function(e,t){return a.a.createElement("circle",{key:t,className:d.kdot,r:"3",cx:h(7.5),cy:y(e)})}),j(o.k).map(function(e,t){return a.a.createElement("circle",{key:t,className:d.kdot,r:"3",cy:y(40),cx:h(e)})})),a.a.createElement("g",{id:"g-lane",transform:"translate(".concat(h(o.time),",0)")},Object(n.createElement)("path",{className:d.road,strokeWidth:f-y(6),d:"M0,0L0,".concat(f)}),a.a.createElement("g",{id:"g-cars"},w(o.k,o.time).map(function(e,t){return a.a.createElement("rect",{key:t,className:d.car,y:y(e),x:-g/2,height:b,width:g})})))),a.a.createElement("g",{id:"vaxis"},a.a.createElement("path",{d:"M0,0L0,".concat(f),fill:"none",stroke:"black",markerStart:"url(#arrow)"}),a.a.createElement(Y,{dx:-10,dy:-25,latexstring:"x \\; \\text{(m)}"})),a.a.createElement("g",{transform:"translate(0,".concat(f,")"),id:"taxis"},a.a.createElement("path",{d:"M0,0L".concat(m,",0"),fill:"none",stroke:"black",markerEnd:"url(#arrow)"}),a.a.createElement(Y,{dx:m-15,dy:5,latexstring:"t \\; \\text{(s)}"})))))},$=Object(M.a)({path:{strokeWidth:"4px",fill:"none",stroke:L.a.A700,opacity:.8},container:{position:"relative",width:"100%",height:"100%"},line:{strokeWidth:"1px",stroke:L.a.A400},svg:{width:"100%",height:"100%","& text":{fontFamily:"Puritan, san-serif",fontSize:"11px"}},cut:{stroke:A.a[700],strokeWidth:"2px",fill:I.a.A200,fillOpacity:.3},car:{fill:_.a.A400,stroke:"none"},masked:{mask:"url(#myMask2)"},road:{stroke:A.a[300]},kdot:{fill:N.a.A400,stroke:"white",strokeWidth:"2px"},text:{textAlign:"center",fontSize:"10px"}}),ee=r(9),te=r(153);function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw c}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ne=Object(ee.a)(function(e){return{root:{color:e.palette.primary.main,marginBottom:"15px"}}})(te.a),ae={},ce=function(){var e=Object(n.useContext)(T),t=e.state,r=e.dispatch,c=t.play,u=ie(ae);return function(e,t){var r=Object(n.useRef)(0);r.current=e,Object(n.useLayoutEffect)(function(){if(t){var e=0,n=Object(l.a)(function(t){var n=(t-e)/1e3;e=t,r.current&&r.current(n)});return function(){return n.stop()}}},[t])}(function(e){e/=.25,r({type:y.TICK,payload:e})},c),a.a.createElement(P.a,{direction:"column",container:!0,className:u.main,alignItems:"stretch",spacing:3},a.a.createElement(P.a,{item:!0},a.a.createElement(o.a,{elevation:2,className:u.paper},a.a.createElement(i.a,{className:u.button,variant:"contained",color:"secondary",onClick:function(){return r({type:y.SET_PLAY,payload:!c})}},c?"PAUSE":"PLAY"),a.a.createElement(ne,{onChange:function(e,t){return r({type:y.SET_K,payload:t})},value:t.k,step:.0025,min:0,max:.25}),a.a.createElement(ne,{onChange:function(e,t){return r({type:y.SET_TIME,payload:t})},value:t.time,step:.3,min:0,max:30}))),a.a.createElement(P.a,{item:!0,style:{height:"600px"}},a.a.createElement(Z,null)))},ie=Object(M.a)({"@global":{body:{margin:"0 !important",padding:"0 !important",fontFamily:" 'Puritan', sans-serif",color:A.a[800]}},main:{maxWidth:"700px",margin:"0 auto"},paper:{display:"flex",justifyContent:"center"},button:{margin:"5px"},sliderContainer:{width:"300px",padding:"20px",boxSizing:"border-box"}}),oe=r(150),le=r(43),ue=r(41),se=r.n(ue),me=r(42),fe=r.n(me),de=document.getElementById("root");if(!de)throw Error("no root container");var pe=Object(le.a)({palette:{primary:{main:se.a[500]},secondary:{main:fe.a[500]}}});Object(c.render)(a.a.createElement(oe.a,{theme:pe},a.a.createElement(function(){var e=re(Object(n.useReducer)(S,x),2),t=e[0],r=e[1];return a.a.createElement(T.Provider,{value:{state:t,dispatch:r}},a.a.createElement(ce,null))},null)),de)}},[[129,1,2]]]);