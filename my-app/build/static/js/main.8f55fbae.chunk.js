(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(12),r=n.n(i),a=(n(33),n(34),n(4)),o=n(1),l=Object(c.createContext)(null),j=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),s=n[0],i=n[1],r=Object(c.useState)(!1),j=Object(a.a)(r,2),b=j[0],d=j[1],u=function(){document.getElementById("body").style.display="none",i(!0)},O=function(){document.getElementById("body").style.display="block",i(!1)};return Object(o.jsx)(l.Provider,{value:{isOpen:s,open:u,close:O,DisplayLightbox:function(e){return s&&Object(o.jsx)("div",{className:"lightbox",children:e.children})},Button:function(){return Object(o.jsx)("button",{onClick:s?O:u,id:"lightboxButton",className:"lightboxButton",children:s?"Close The Result":"Open The Result"})},shouldDisplay:b,setShouldDisplay:d},children:e.children})},b=function(){return Object(c.useContext)(l)},d=function(e){var t=b(),n=t.DisplayLightbox,c=t.Button;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(n,{children:[Object(o.jsx)(c,{}),e.children]})})},u=Object(c.createContext)(null),O=function(e){var t=Object(c.useState)({}),n=Object(a.a)(t,2),s=n[0],i=n[1];return Object(o.jsx)(u.Provider,{value:{result:s,setResult:i},children:e.children})},h=function(){return Object(c.useContext)(u)},x=n(8),p=function(e){var t=e.type,n=e.setType,c=e.height,s=h().result,i=s.sender,r=s.subject,a=s.cc,l=s.date,j=s.bodyContent,b=s.attachments,d=s.total,u={labels:["Sender","Subject","CC","Date","Body Content","Attachments"],datasets:[{label:"Phishing inspection (%)",data:0===d?[i,r,a,l,j,b,100-d]:[i,r,a,l,j,b],backgroundColor:["rgba(255, 99, 132, 0.4)","rgba(54, 162, 235, 0.4)","rgba(255, 206, 86, 0.4)","rgba(75, 192, 192, 0.4)","rgba(153, 102, 255, 0.4)","rgba(255, 159, 64, 0.4)","rgba(192,192,192,0.4)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(192,192,192,1)"],borderWidth:1}]},O={plugins:{title:{display:!1,text:"Phishing inspection (%)",position:"top"},tooltip:{callbacks:{label:function(e){var t=e.formattedValue,n=e.label;return""!==n?n+": "+t:"No Risk Detected"}},enabled:!0}}};return Object(o.jsxs)("div",{children:[1===t?Object(o.jsx)("div",{children:Object(o.jsx)(x.b,{data:u,options:0===d&&O})}):2===t?Object(o.jsx)("div",{children:Object(o.jsx)(x.c,{data:u,height:c})}):3===t?Object(o.jsx)("div",{children:Object(o.jsx)(x.d,{data:u,options:0===d&&O})}):void 0,Object(o.jsx)("div",{className:"dropdown-content",id:"myDropdown",children:Object(o.jsx)("button",{onClick:function(){n(3===t?1:t+1)},className:"nextButton",children:"Change"})})]})},m=function(e){var t=e.type,n=e.setType,c=e.height,s=h().result.total,i={labels:["High Risk","Low Risk"],datasets:[{label:"Risk Prediction",data:[s,100-s],backgroundColor:["rgba(255,0,0,0.4)","rgba(100,100,100,1)"],borderColor:["rgba(255,0,0,1)","rgba(192,192,192,1)"],borderWidth:1}]};return Object(o.jsxs)("div",{children:[1===t?Object(o.jsx)("div",{children:Object(o.jsx)(x.b,{data:i})}):2===t?Object(o.jsx)("div",{children:Object(o.jsx)(x.a,{data:i,height:c})}):3===t?Object(o.jsx)("div",{children:Object(o.jsx)(x.d,{data:i})}):void 0,Object(o.jsx)("div",{className:"dropdown-content",id:"myDropdown",children:Object(o.jsx)("button",{onClick:function(){n(3===t?1:t+1)},className:"nextButton",children:"Change"})})]})},g=function(){var e=Object(c.useState)([0,0]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useLayoutEffect)((function(){function e(){s([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},f=function(){var e=Object(c.useState)(1),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(1),r=Object(a.a)(i,2),l=r[0],j=r[1],b=g(),d=Object(a.a)(b,2),u=d[0],O=d[1],x=h().result.total,f={position:"relative",float:"left",top:2===n?"8.5em":"7em",width:2===n?"35%":"25%",margin:"0em 0em 0em calc(".concat(2===n?u/365:u/170,"em)"),backgroundColor:"white",padding:"1em",border:"1px solid gray"},v={position:"relative",top:2===l?"8.5em":"7em",float:"right",width:2===l?"35%":"25%",margin:"0em calc(".concat(2===l?u/285:u/150,"em) 0em 0em"),backgroundColor:"white",padding:"1em",border:"1px solid gray"},y={minHeight:"calc(100% - 100px)",height:"auto",boxSizing:"border-box"};if(document.getElementById("lightboxButton").style.top="85%",document.getElementById("posibility")&&(document.getElementById("posibility").style.display="block"),u<915){var w=(915-u)/70;f={top:2===n?"16.3em":"15em",width:"calc(30% + ".concat(w,"em)"),position:"fixed",left:"50%",transform:"translate(-50%, -50%)"},v={top:2===l?"77.7%":"75%",width:"calc(30% + ".concat(w,"em)"),position:"fixed",left:"50%",transform:"translate(-50%, -50%)"},y={},document.getElementById("lightboxButton").style.top="5%",document.getElementById("posibility")&&(document.getElementById("posibility").style.display="none")}if(O>800){var N=(915-u)/70;f={top:2===n?"37.3%":"35%",width:"calc(30% + ".concat(N,"em)"),position:"fixed",left:"50%",transform:"translate(-50%, -50%)"},v={top:2===l?"72.7%":"70.5%",width:"calc(30% + ".concat(N,"em)"),position:"fixed",left:"50%",transform:"translate(-50%, -50%)"},y={},document.getElementById("lightboxButton").style.top="90%",document.getElementById("posibility")&&(document.getElementById("posibility").style.display="block")}return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{style:y,id:"wripper",children:[Object(o.jsxs)("h1",{id:"posibility",children:[Object(o.jsx)("span",{className:"suffix",children:"The Phishing Posibility:"})," ",Object(o.jsxs)("span",{className:"prefix",children:[x,"%"]})]}),Object(o.jsx)("div",{style:f,id:"left",children:Object(o.jsx)(p,{type:n,setType:s,height:u<892?"250%":"200%"})}),Object(o.jsx)("div",{style:v,id:"right",children:Object(o.jsx)(m,{type:l,setType:j,height:u<892?"250%":"200%"})})]})})},v=function(e){var t=e.scroll,n=e.aboutRef,c=e.instructionRef;return Object(o.jsxs)("nav",{className:"nav-links",children:[Object(o.jsx)("a",{className:"logo",href:"/",children:Object(o.jsx)("img",{src:"new-logo.png",alt:"logo",id:"logo"})}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"Pages",children:Object(o.jsx)("a",{href:"about",onClick:function(e){t(e,n)},children:"ABOUT"})}),Object(o.jsx)("li",{className:"Pages",children:Object(o.jsx)("a",{href:"instruction",onClick:function(e){t(e,c)},children:"INSTRUCTION"})})]})]})},y=n(13);var w=function(){return Object(o.jsx)(y.a,{options:{buttons:{showAutoplayButton:!1,showNextButton:!1,showPrevButton:!1}},children:Object(o.jsx)("img",{src:"social_engineering_reg_flags.jpg",alt:"Social Engineer Red Elag",id:"redFlag"})})},N=function(e){var t=e.setAboutRef,n=Object(c.useRef)(null);return Object(c.useEffect)((function(){t(n)})),Object(o.jsxs)("section",{className:"About",children:[Object(o.jsx)("div",{className:"wave1"}),Object(o.jsx)("h4",{ref:n,children:"ABOUT"}),Object(o.jsx)("p",{children:"Our project is to provide peace of mind to the community by allowing them to protect their privacy by checking suspicious email using our web application. We consider Social Engineering Red Flags to implement this phishing email evaluator."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(w,{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{style:{fontWeight:"bold"},children:"Click Image to Open"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})};var B=function(e){var t=e.setInstructionRef,n=Object(c.useRef)(null);return Object(c.useEffect)((function(){t(n)})),Object(o.jsxs)("section",{className:"Instruction",children:[Object(o.jsx)("div",{className:"wave2"}),Object(o.jsx)("h4",{ref:n,children:"INSTRUCTION"}),Object(o.jsx)("p",{children:"This app is an free and easy-to-used online tools allowing to evaluate a phishing email without having to install any software."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:"1. Open your email"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:"step1.jpg",alt:"step1",className:"step"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:"2. Download your email as .eml file"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:"step2.jpg",alt:"step2",className:"step"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:"3. Drag-and-drop the file to the box"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:"step3.jpg",alt:"step3",className:"step"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:"4. Click open to see the result"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:"step4.jpg",alt:"step4",className:"step"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})},C=n(7),I=n(28),R=n(18),k=n.n(R),E=n(23),P=function(e){var t=function(){var e=Object(E.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/postAPI",{method:"POST",headers:{"Content-Type":"application/json"},body:t});case 2:return n=e.sent,e.next=5,n.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(e)return t(e)},T=n(10),S=function(){var e=h(),t=b(),n=Object(I.a)({onDrop:function(n){var c=Object(a.a)(n,1)[0],s=new FileReader;if(s.addEventListener("load",(function(){var n=s.result;Object(T.trackPromise)(P(n).then((function(n){e.setResult(n),t.setShouldDisplay(!0)})),"email-area").catch((function(e){return console.log("error on DragAndDrop:",e)}))}),!1),c){s.readAsText(c);var i=document.getElementById("popUp");i.style.visibility="visible",i.dataset.label=c.name}}}),c=n.getRootProps,s=n.getInputProps,i=n.isDragActive;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",Object(C.a)(Object(C.a)({},c()),{},{children:[Object(o.jsx)("input",Object(C.a)(Object(C.a)({},s()),{},{accept:".eml",id:"uploader"})),i?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("span",{className:"Name",children:["Drop file here...",Object(o.jsx)("img",{src:"file.png",alt:"file",id:"file"})]}),Object(o.jsx)("span",{children:document.getElementById("popUp").style.visibility="hidden"}),Object(o.jsx)("span",{children:document.getElementById("lightboxButton")&&(document.getElementById("lightboxButton").style.visibility="hidden")})]}):Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("span",{className:"Name",children:["Click or drop file here",Object(o.jsx)("img",{src:"file.png",alt:"file",id:"file"})]})}),Object(o.jsx)("div",{id:"popUp",children:Object(o.jsx)("img",{src:"file.png",alt:"file",style:{radiant:"red"},id:"file"})})]}))})},D=n(27),A=function(e){var t=e.area,n=Object(T.usePromiseTracker)({area:t}).promiseInProgress;return Object(o.jsx)("div",{className:"loader",children:n&&Object(o.jsx)(D.a,{height:"80",width:"80",color:"lightcoral",ariaLabel:"loading",area:t,className:"loader"})})};var F=function(){var e=b(),t=e.Button,n=e.shouldDisplay,c=Object(T.usePromiseTracker)({area:"email-area",delay:0}).promiseInProgress,s=g(),i=Object(a.a)(s,1)[0];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"topContent",children:Object(o.jsx)(S,{})}),Object(o.jsx)("section",{className:"bottmoContainer",style:i>536?{top:"14em"}:{top:"13em"},children:c?Object(o.jsx)(A,{area:"email-area"}):n&&Object(o.jsx)(t,{})})]})},L=function(e){var t=e.setAboutRef,n=e.setInstructionRef;return Object(o.jsxs)("section",{className:"container",children:[Object(o.jsxs)("h1",{className:"title",children:[Object(o.jsx)("span",{className:"prefix",children:"Phishing "}),Object(o.jsx)("span",{className:"suffix",children:"Evaluator"})]}),Object(o.jsx)(F,{}),Object(o.jsx)(N,{setAboutRef:t}),Object(o.jsx)(B,{setInstructionRef:n})]})};var U=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(null),r=Object(a.a)(i,2),l=r[0],j=r[1];return Object(o.jsxs)("section",{id:"body",children:[Object(o.jsx)(v,{scroll:function(e,t){var n;e.preventDefault(),window.scrollTo({behavior:"smooth",top:null===t||void 0===t||null===(n=t.current)||void 0===n?void 0:n.getBoundingClientRect().top})},aboutRef:n,instructionRef:l}),Object(o.jsx)(L,{setAboutRef:s,setInstructionRef:j})]})};var W=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(j,{children:Object(o.jsxs)(O,{children:[Object(o.jsx)(d,{children:Object(o.jsx)(f,{})}),Object(o.jsx)(y.b,{children:Object(o.jsx)(U,{})})]})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(W,{})}),document.getElementById("root")),z()}},[[44,1,2]]]);
//# sourceMappingURL=main.8f55fbae.chunk.js.map