(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{49:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(9),l=c.n(n),i=(c(65),c(66),c(3));function r(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("div",{className:"home"}),Object(i.jsx)("div",{className:"title",children:Object(i.jsx)("h1",{children:"typing speed"})}),Object(i.jsx)("div",{className:"dropdown"})]})}var d=c(12),o=c(46),j=c.n(o),u=c(115),b=c(117),O=c(113);c(49);function v(e){var t=e.user,c=e.value;return!0===e.status?function(){if(void 0===t)return Object(i.jsxs)("div",{className:"current",children:[Object(i.jsx)("div",{style:{color:"black"},children:"\u2502"}),Object(i.jsx)("div",{children:c})]});if(t===c+" ")return"";for(var e=!0,a=t.length,s=0;s<t.length;s++){if(console.log(t,c),t[s]!==c[s]){console.log("Check again!"),e=!1,a=Math.min(a,s);break}console.log("Going right!")}var n=e?"none":"underline",l=t.slice(a,t.length);return t=t.slice(0,a),Object(i.jsxs)("div",{className:"current",children:[Object(i.jsx)("div",{style:{color:"green",textDecoration:n},children:t}),Object(i.jsx)("div",{style:{color:"red",textDecoration:"line-through"},children:l}),Object(i.jsx)("div",{className:"virtual_cursor",children:"|"}),Object(i.jsx)("div",{children:c.slice(a)})]})}():Object(i.jsx)("div",{className:"box",children:c})}function f(e){var t=0,c=e.wordArray.slice(1,50),a=e.received.data,s=e.received.typed;return Object(i.jsxs)("div",{className:"parent",children:[Object(i.jsx)(v,{status:!0,value:a,user:s},t++),c.map((function(e){return Object(i.jsx)(v,{status:!1,value:e},t++)}))]})}var h=c(114),x=c(116);function m(e){var t=Object(a.useState)(e.limit),c=Object(d.a)(t,2),s=c[0],n=c[1],l=Object(a.useRef)(null);function r(){clearInterval(l.current)}return Object(a.useEffect)((function(){n(e.limit)}),[e.limit]),Object(a.useEffect)((function(){return e.started?l.current=setInterval((function(){n((function(e){return e-1}))}),1e3):n(e.limit),function(){return r()}}),[e.started]),Object(a.useEffect)((function(){0===s&&r()}),[s]),Object(i.jsx)("div",{children:(console.log(e.started,s,e.limit),e.started?0!==s?s:(e.parentCallback(),"Time up!"):"Press 'Start'!")})}var p=c(50),y=c.n(p);c(68);function N(e){var t=Object(a.useState)(),c=Object(d.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){var t=Math.floor(e.words/e.time*60);n(t)}),[e.words,e.time]),Object(i.jsx)("div",{className:"result_card",children:Object(i.jsxs)("div",{className:"speed",children:[Object(i.jsxs)("h1",{children:["Your speed is ",s," WPM!"]}),Object(i.jsx)("div",{className:"button_plate",children:Object(i.jsx)(y.a,{className:"replay",onClick:function(){e.parentCallback()}})})]})})}c(76);function g(){var e=Object(a.useState)(4),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([""]),l=Object(d.a)(n,2),r=l[0],o=l[1],v=Object(a.useState)(),p=Object(d.a)(v,1)[0],y=Object(a.useState)("#D1E8E4"),g=Object(d.a)(y,2),C=g[0],k=g[1],S=Object(a.useState)({data:"",typed:""}),_=Object(d.a)(S,2),w=_[0],E=_[1],M=Object(a.useRef)(),D=Object(a.useRef)(null),I=Object(a.useState)(60),R=Object(d.a)(I,2),T=R[0],A=R[1],P=Object(a.useState)(!1),J=Object(d.a)(P,2),L=J[0],z=J[1],B=Object(a.useState)(0),F=Object(d.a)(B,2),G=F[0],H=F[1],V=Object(a.useState)(!1),W=Object(d.a)(V,2),Y=W[0],q=W[1],K=j()({exactly:500,maxLength:10}),Q=j()({exactly:500,maxLength:15});function U(){var e=[],t=c,a=Math.floor(100*Math.random());return e=K.slice(a,a+100*t),t=5-c,a=Math.floor(100*Math.random()),e=function(e){for(var t,c=e.length;0!==c;){t=Math.floor(Math.random()*c),c--;var a=[e[t],e[c]];e[c]=a[0],e[t]=a[1]}return e}(e=e.concat(Q.slice(a,a+100*t))),E({data:e[0],typed:""}),e}return Object(i.jsxs)("div",{className:"whole",children:[Object(i.jsxs)("div",{className:"configure",style:{display:Y&&"none"},children:[Object(i.jsxs)("div",{className:"settings",children:[Object(i.jsxs)("div",{className:"settings_diff",children:[Object(i.jsx)(x.a,{id:"select-difficulty",className:"difficulty_label",children:"Difficulty"}),Object(i.jsx)(u.a,{id:"outlined-select-difficulty",select:!0,className:"diff_select",value:c,onChange:function(e){s(e.target.value)},children:[{value:4,label:"Novice"},{value:3,label:"Easy"},{value:2,label:"Moderate"},{value:1,label:"Hard"},{value:0,label:"Expert"}].map((function(e){return Object(i.jsx)(b.a,{value:e.value,children:e.label},e.value)}))})]}),Object(i.jsxs)("div",{className:"settings_time",children:[Object(i.jsx)(x.a,{id:"select-time-limit",className:"time_label",children:"Time"}),Object(i.jsxs)(h.a,{labelId:"simple-select-label",id:"simple-select",className:"time_select",value:T,onChange:function(e){A(e.target.value)},children:[Object(i.jsx)(b.a,{value:1,children:"1 second"}),Object(i.jsx)(b.a,{value:30,children:"30 seconds"}),Object(i.jsx)(b.a,{value:60,children:"60 seconds"}),Object(i.jsx)(b.a,{value:120,children:"120 seconds"})]})]})]}),Object(i.jsxs)("div",{className:"button_field",children:[Object(i.jsx)("div",{className:"button_one",children:Object(i.jsx)(O.a,{variant:"contained",style:{backgroundColor:"#3D2C8D"},color:"primary",onClick:function(){o(U()),z(!1),console.log(T)},className:"fetch_button",children:"Fetch Text"})}),Object(i.jsx)("div",{className:"button_two",children:Object(i.jsx)(O.a,{variant:"contained",style:{backgroundColor:"#1C7947"},color:"primary",onClick:function(){M.current.focus(),D.current.scrollIntoView(),z(!0)},className:"start_button",children:"Start"})})]}),Object(i.jsx)("div",{className:"timer",ref:D,children:Object(i.jsx)(m,{limit:T,started:L,parentCallback:function(){o([]),E({data:"",typed:""}),z(!1),q(!0)}})})]}),Object(i.jsx)("div",{className:"displayText",style:{display:Y&&"none"},children:Object(i.jsx)("div",{className:"show",children:Object(i.jsx)(f,{wordArray:r,received:w})})}),Object(i.jsx)("div",{className:"typehere",style:{display:Y&&"none"},children:Object(i.jsx)(u.a,{className:"inputfield",variant:"filled",inputRef:M,InputProps:{style:{fontSize:"30px",backgroundColor:C}},value:p,onChange:function(e){var t=e.target.value,c=r[0];if(E({data:c,typed:t}),t===c+" ")return E({data:r[1],typed:""}),H((function(e){return e+1})),o(r.slice(1)),e.target.value="",void k("#D1E8E4")}})}),Object(i.jsx)("div",{className:"output",style:{display:!Y&&"none"},children:Object(i.jsx)(N,{words:G,time:T,parentCallback:function(){q(!1)}})})]})}var C=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(r,{}),Object(i.jsx)(g,{})]})};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.1b06b3a5.chunk.js.map