(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t){},113:function(e,t){},148:function(e,t){},149:function(e,t){},200:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(90),i=n.n(r),l=n(93),c=n(15),u=n(3),d={1:"#ffffff",2:"#fafafa",3:"#f5f5f5",4:"#e8e8e8",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#262626",10:"#000000"},s={1:"#f6ffed",2:"#d9f7be",3:"#b7eb8f",4:"#95de64",5:"#73d13d",6:"#52c41a",7:"#389e0d",8:"#237804",9:"#135200",10:"#092b00"},f={1:"#fff1f0",2:"#ffccc7",3:"#ffa39e",4:"#ff7875",5:"#ff4d4f",6:"#f5222d",7:"#cf1322",8:"#a8071a",9:"#820014",10:"#5c0011"},p=u.a.div({height:"56px",backgroundColor:d[6],display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}),m=u.a.div({flex:1,width:0,height:0,border:"solid 16px",borderColor:"transparent transparent ".concat(d[6]," transparent")}),g=u.a.div({flex:1}),b=u.a.div({flex:1,display:"flex",justifyContent:"center"}),h=u.a.div({marginTop:"-8px"}),E=u.a.div({display:"flex",flexDirection:"row"}),v=function(e){var t=e.amountEntries;return o.a.createElement(h,null,o.a.createElement(E,null,o.a.createElement(b,null,o.a.createElement("div",null,o.a.createElement(m,null))),new Array(t-1).fill(o.a.createElement(g,null))),o.a.createElement(p,null,o.a.createElement("button",null,"Yes"),o.a.createElement("button",null,"No")))},x=u.a.div({height:"24px",boxShadow:"inset 0 0 1px #000000",flex:1,":first-of-type":{borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px"},":last-child":{borderTopRightRadius:"4px",borderBottomRightRadius:"4px"}},function(e){var t=e.entry;return{backgroundColor:t&&"SUCCEEDED"===t.status?s[5]:f[5]}}),w=u.a.div({paddingTop:"8px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}),y=function(e){var t=e.journal,n=Object(a.useState)(!1),r=Object(c.a)(n,2),i=r[0],l=r[1],u=new Array(7).fill(void 0).map(function(e,n){var a=function(e){var t=new Date,n=new Date;return n.setDate(t.getDate()-e),n.toISOString().slice(0,10)}(n),o=t.entries.find(function(e){return e.date===a});return{date:a,entry:o}});return o.a.createElement("div",null,o.a.createElement("div",{onClick:function(){return l(!i)}},o.a.createElement("span",null,t.name),o.a.createElement(w,null,u.map(function(e){var t=e.entry,n=e.date;return o.a.createElement(x,{"data-testid":"Entry-".concat(n,"-").concat(t&&"SUCCEEDED"===t.status?"Succeeded":"Failed"),key:n,entry:t})}))),i&&o.a.createElement(v,{amountEntries:7}))},C=u.a.div({paddingTop:"8px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}),k=u.a.span({flex:1,textAlign:"center",verticalAlign:"middle"}),S=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],j=function(){return o.a.createElement(C,null,S.map(function(e){return o.a.createElement(k,{key:e},e)}))},D=n(18),O=n(91),R=n.n(O),T=D.Sync.makeFactory({date:D.each(function(e){return(new Date).toISOString().slice(0,10)}),status:"SUCCEEDED"}),A=D.Sync.makeFactory({id:D.each(function(e){return R()("".concat(e))}),name:D.each(function(e){return"Journal ".concat(e)}),entries:[]}),F=u.a.div(function(e){return{paddingTop:e.top,paddingRight:e.right,paddingBottom:e.bottom,paddingLeft:e.left}});F.defaultProps={top:"0",right:"0",bottom:"0",left:"0"};var I=F,W=u.a.div({position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"white",height:"100%",width:"100%"}),B=u.a.div({borderBottom:"1px solid ".concat(d[4]),backgroundColor:d[2],display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"40px"}),N=function(e){var t=e.onCancel,n=e.onDone,r=Object(a.useState)(""),i=Object(c.a)(r,2),l=i[0],u=i[1];return o.a.createElement(W,null,o.a.createElement(B,null,o.a.createElement(I,{left:"8px"},o.a.createElement("button",{onClick:t},"Cancel")),o.a.createElement(I,{right:"8px"},o.a.createElement("button",{onClick:function(){return n(l)}},"Done"))),o.a.createElement("form",null,o.a.createElement("input",{value:l,placeholder:"name",onChange:function(e){return u(e.target.value)}})))},U=u.a.div({borderBottom:"1px solid ".concat(d[4]),backgroundColor:d[2]}),L=u.a.div({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"40px"}),J=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),u=Object(c.a)(i,2),d=u[0],s=u[1];return o.a.createElement("div",null,d&&o.a.createElement(N,{onCancel:function(){return s(!1)},onDone:function(e){r([].concat(Object(l.a)(n),[A.build({name:e,entries:[T.build()]})])),s(!1)}}),o.a.createElement(U,null,o.a.createElement(I,{right:"8px",left:"8px"},o.a.createElement(L,null,o.a.createElement("button",null,"Edit"),o.a.createElement("button",{onClick:function(){return s(!0)}},"Add")),o.a.createElement(j,null))),o.a.createElement(I,{right:"8px",left:"8px"},n.map(function(e){return o.a.createElement(I,{key:e.id,top:"8px",bottom:"16px"},o.a.createElement(y,{journal:e}))})))},M=function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement(J,null))},P=u.a.div({paddingLeft:"8px",paddingRight:"8px",borderTop:"1px solid ".concat(d[4]),backgroundColor:d[2],display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}),z=function(e){var t=e.className;return o.a.createElement(P,{className:t},o.a.createElement("button",null,"Journals"))},H=n(25),Y=n(92),$=n.n(Y),q=Object(u.a)(M)({height:"calc(100% - ".concat("56px",")")}),G=Object(u.a)(z)({height:"56px"}),K=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{styles:{body:{margin:0,padding:0,fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}}}),o.a.createElement($.a,null,o.a.createElement(q,null),o.a.createElement(G,null)))},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(K,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/change",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/change","/service-worker.js");Q?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):V(t,e)})}}()},94:function(e,t,n){e.exports=n(200)}},[[94,1,2]]]);
//# sourceMappingURL=main.090ab87a.chunk.js.map