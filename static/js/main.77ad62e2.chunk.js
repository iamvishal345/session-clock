(this["webpackJsonpsession-clock"]=this["webpackJsonpsession-clock"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(4),i=c.n(a),l=(c(10),c(2)),u=(c(11),function(e){var t=e.prefix,c=e.value,r=e.handleClick;return Object(n.jsxs)("div",{className:"display-control",children:[Object(n.jsxs)("h3",{className:"caps",id:"".concat(t,"-label"),children:[t," Length"]}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("button",{className:"control-buttons",title:"Decrement ".concat(t),id:"".concat(t,"-decrement"),onClick:r,value:"dec",children:Object(n.jsx)("p",{children:"\ud83e\udc83"})}),Object(n.jsx)("label",{className:"length",id:"".concat(t,"-length"),children:c}),Object(n.jsx)("button",{title:"Increment ".concat(t),className:"control-buttons",id:"".concat(t,"-increment"),onClick:r,value:"inc",children:Object(n.jsx)("p",{className:"align",children:"\ud83e\udc81"})})]})]})}),o=function(e){var t=e.sessionLength,c=e.breakLength,s=e.isRunning,a=e.resetEvent,i=Object(r.useState)("".concat(t,":00")),u=Object(l.a)(i,2),o=u[0],b=u[1],j=Object(r.useState)(!0),d=Object(l.a)(j,2),O=d[0],h=d[1],m=Object(r.useRef)(null),f=Object(r.useRef)(null),p=Object(r.useRef)(null),v=Object(r.useCallback)((function(){var e,n;return clearInterval(m.current),console.log(),setInterval(function r(){return-1===f.current&&(p.current.play(),f.current=O?60*c:60*t,h(!O)),e=parseInt(f.current/60,10),n=(n=parseInt(f.current%60,10))<10?"0"+n:n,b("".concat(e=e<10?"0"+e:e,":").concat(n)),f.current-=1,r}(),1e3)}),[c,t,O]);return Object(r.useEffect)((function(){clearInterval(m.current),p.current.pause(),p.current.currentTime=0,b("".concat(t,":00")),f.current=60*t,h(!0)}),[a,t]),Object(r.useEffect)((function(){m.current=v()}),[v]),Object(r.useEffect)((function(){s?m.current=v():clearInterval(m.current)}),[s,v]),Object(n.jsxs)("div",{className:"timer-wrapper",children:[Object(n.jsx)("div",{className:"timer-label",id:"timer-label",children:O?"Session":"Break"}),Object(n.jsx)("div",{className:"time-left",id:"time-left",children:o}),Object(n.jsx)("audio",{ref:function(e){return p.current=e},id:"beep",preload:"auto",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})},b=function(e){var t=e.toggleTimer,c=e.resetTimer;return Object(n.jsxs)("div",{className:"time-control-wrapper",children:[Object(n.jsx)("button",{title:"Play/Pause Timer",id:"start_stop",onClick:t,children:"\u25ba\u2225"}),Object(n.jsx)("button",{title:"Reset Timer",id:"reset",onClick:c,children:"\u21bb"})]})};var j=function(){var e=Object(r.useState)(25),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(5),i=Object(l.a)(a,2),j=i[0],d=i[1],O=Object(r.useState)(!1),h=Object(l.a)(O,2),m=h[0],f=h[1],p=Object(r.useState)(!1),v=Object(l.a)(p,2),x=v[0],g=v[1],k=Object(r.useCallback)((function(e){if(!m)switch(e.target.id){case"break-decrement":j>1&&d(j-1);break;case"break-increment":j<60&&d(j+1);break;case"session-decrement":c>1&&s(c-1);break;case"session-increment":c<60&&s(c+1)}}),[j,c,m]);return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header",children:"25 + 5 Clock"}),Object(n.jsxs)("section",{children:[Object(n.jsx)(u,{prefix:"break",value:j,handleClick:k}),Object(n.jsx)(u,{prefix:"session",value:c,handleClick:k})]}),Object(n.jsx)(o,{sessionLength:c,breakLength:j,isRunning:m,resetEvent:x}),Object(n.jsx)(b,{resetTimer:function(){d(5),s(25),g(!x),f(!1)},toggleTimer:function(){f(!m)}})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),d()}},[[12,1,2]]]);
//# sourceMappingURL=main.77ad62e2.chunk.js.map