(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t){},113:function(e,t){},148:function(e,t){},149:function(e,t){},200:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(90),i=n.n(r),c=n(93),l=n(32),u=n(4),d={1:"#ffffff",2:"#fafafa",3:"#f5f5f5",4:"#e8e8e8",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#262626",10:"#000000"},s={1:"#f6ffed",2:"#d9f7be",3:"#b7eb8f",4:"#95de64",5:"#73d13d",6:"#52c41a",7:"#389e0d",8:"#237804",9:"#135200",10:"#092b00"},f={1:"#fff1f0",2:"#ffccc7",3:"#ffa39e",4:"#ff7875",5:"#ff4d4f",6:"#f5222d",7:"#cf1322",8:"#a8071a",9:"#820014",10:"#5c0011"},p=u.a.div({height:"56px",backgroundColor:d[6],display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}),m=function(){return o.a.createElement(p,null,o.a.createElement("button",null,"Yes"),o.a.createElement("button",null,"No"))},g=u.a.div(function(e){return{paddingTop:e.top,paddingRight:e.right,paddingBottom:e.bottom,paddingLeft:e.left}});g.defaultProps={top:"0",right:"0",bottom:"0",left:"0"};var b=g,h=u.a.div({height:"24px",boxShadow:"inset 0 0 1px #000000",flex:1,":first-of-type":{borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px"},":last-child":{borderTopRightRadius:"4px",borderBottomRightRadius:"4px"}},function(e){var t=e.entry;return{backgroundColor:t&&"SUCCEEDED"===t.status?s[5]:f[5]}}),v=u.a.div({paddingTop:"8px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}),E=function(e){var t=e.journal,n=Object(a.useState)(!1),r=Object(l.a)(n,2),i=r[0],c=r[1],u=new Array(7).fill(void 0).map(function(e,n){var a=function(e){var t=new Date,n=new Date;return n.setDate(t.getDate()-e),n.toISOString().slice(0,10)}(n),o=t.entries.find(function(e){return e.date===a});return{date:a,entry:o}});return o.a.createElement("div",null,o.a.createElement("div",{onClick:function(){return c(!i)}},o.a.createElement("span",null,t.name),o.a.createElement(v,null,u.map(function(e){var t=e.entry,n=e.date;return o.a.createElement(h,{"data-testid":"Entry-".concat(n,"-").concat(t&&"SUCCEEDED"===t.status?"Succeeded":"Failed"),key:n,entry:t})}))),i&&o.a.createElement(b,{top:"16px"},o.a.createElement(m,null)))},w=u.a.div({paddingTop:"8px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}),x=u.a.span({flex:1,textAlign:"center",verticalAlign:"middle"}),y=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],S=function(){return o.a.createElement(w,null,y.map(function(e){return o.a.createElement(x,{key:e},e)}))},k=n(17),C=n(91),D=n.n(C),j=k.Sync.makeFactory({date:k.each(function(e){return(new Date).toISOString().slice(0,10)}),status:"SUCCEEDED"}),O=k.Sync.makeFactory({id:k.each(function(e){return D()("".concat(e))}),name:k.each(function(e){return"Journal ".concat(e)}),entries:[]}),R=u.a.div({borderBottom:"1px solid ".concat(d[4]),backgroundColor:d[2]}),F=u.a.div({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"40px"}),T=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",null,o.a.createElement(R,null,o.a.createElement(b,{right:"8px",left:"8px"},o.a.createElement(F,null,o.a.createElement("button",null,"Edit"),o.a.createElement("button",{onClick:function(){return r([].concat(Object(c.a)(n),[O.build({entries:[j.build()]})]))}},"Add")),o.a.createElement(S,null))),o.a.createElement(b,{right:"8px",left:"8px"},n.map(function(e){return o.a.createElement(b,{key:e.id,top:"8px",bottom:"16px"},o.a.createElement(E,{journal:e}))})))},A=function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement(T,null))},I=u.a.div({paddingLeft:"8px",paddingRight:"8px",borderTop:"1px solid ".concat(d[4]),backgroundColor:d[2],display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}),W=function(e){var t=e.className;return o.a.createElement(I,{className:t},o.a.createElement("button",null,"Journals"))},N=n(24),U=n(92),B=n.n(U),L=Object(u.a)(A)({height:"calc(100% - ".concat("56px",")")}),J=Object(u.a)(W)({height:"56px"}),M=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(N.a,{styles:{body:{margin:0,padding:0,fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}}}),o.a.createElement(B.a,null,o.a.createElement(L,null),o.a.createElement(J,null)))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/change",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/change","/service-worker.js");P?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):z(t,e)})}}()},94:function(e,t,n){e.exports=n(200)}},[[94,1,2]]]);
//# sourceMappingURL=main.c8ea9b94.chunk.js.map