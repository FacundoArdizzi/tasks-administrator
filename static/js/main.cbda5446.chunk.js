(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{98:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),c=o(45),a=o.n(c),i=o(19),d=o(70),s=o(79),l=o(12),j=o(13),b="ADD_TODO",u="DELETE_TODO",p="FINISH_TODO",h="UNFINISH_TODO",O="SHOW",x={todos:[],show:"pendient"},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(j.a)(Object(j.a)({},t),{},{todos:[e.payload].concat(Object(l.a)(t.todos))});case u:return Object(j.a)(Object(j.a)({},t),{},{todos:t.todos.filter((function(t){return t.id!==e.payload}))});case p:return Object(j.a)(Object(j.a)({},t),{},{todos:t.todos.map((function(t){return t.id===e.payload?Object(j.a)(Object(j.a)({},t),{},{completed:!0}):t}))});case h:return Object(j.a)(Object(j.a)({},t),{},{todos:t.todos.map((function(t){return t.id===e.payload?Object(j.a)(Object(j.a)({},t),{},{completed:!1}):t}))});case O:return Object(j.a)(Object(j.a)({},t),{},{show:e.payload});default:return t}},m=Object(d.b)(f,Object(d.a)(s.a)),g=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,121)).then((function(e){var o=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;o(t),n(t),r(t),c(t),a(t)}))},w=o(117),v=o(108),y=Object(v.a)({styles:{global:{body:{backgroundColor:"#E9E9E9"}}},colors:{primary:"#63B3ED"}}),k=o(118),C=o(113),D=o(120),_=o(44),E=function(t){return{type:O,payload:t}},I=o(2),T=function(){var t=Object(i.b)();return Object(I.jsx)(k.a,{direction:"row",backgroundColor:"white",paddingTop:5,borderBottomRadius:"xl",shadow:"md",width:"100%",opacity:"100%",children:Object(I.jsxs)(k.a,{direction:"row",width:"fit-content",margin:"auto",children:[Object(I.jsx)(_.b,{to:"/tasks-administrator/",children:Object(I.jsx)(D.a,{width:"25vw",textAlign:"center",fontWeight:"600",paddingBottom:"1.5",background:"transparent",_hover:{cursor:"pointer",color:"primary"},_focus:{color:"primary"},onClick:function(){return t(E("pendient"))},children:"PENDIENT"})}),Object(I.jsx)(_.b,{to:"/tasks-administrator/completed",children:Object(I.jsx)(D.a,{width:"25vw",textAlign:"center",fontWeight:"600",paddingBottom:"1.5",background:"transparent",_hover:{cursor:"pointer",color:"primary"},_focus:{color:"primary"},onClick:function(){return t(E("completed"))},children:"COMPLETED"})})]})})},B=o(3),S=o(119),A=function(){var t=Object(i.b)(),e=Object(n.useState)(""),o=Object(B.a)(e,2),r=o[0],c=o[1];return Object(I.jsxs)(k.a,{width:"100%",top:"10vh",alignItems:"center",children:[Object(I.jsx)(S.a,{width:"50vw",value:r,onChange:function(t){t.preventDefault(),c(t.target.value)},placeholder:"Add a task... ",border:"1px solid",borderColor:"blackAlpha.900",_hover:{border:"2px",borderColor:"primary"},_focus:{border:"2px",orderColor:"blue.500"}}),Object(I.jsx)(D.a,{onClick:function(){var e=Date.now();r.length<0?t({type:b,payload:{content:r,completed:!1,id:e}}):alert("Opps! Looks like you haven't typed anything :("),c("")},colorScheme:"green",variant:"outline",width:"20vw",_hover:{background:"green.400",color:"white"},_focus:{outline:"none"},children:"Add"})]})},F=function(){return Object(I.jsxs)(k.a,{width:"100%",children:[Object(I.jsx)(C.a,{position:"fixed",zIndex:"9999",width:"100%",opacity:"100%",children:Object(I.jsx)(T,{})}),Object(I.jsx)(C.a,{position:"absolute",top:"15vh",width:"100%",children:Object(I.jsx)(A,{})})]})},L=o(114),N=o(116),P=o(115),H=o(84),W=function(t){var e=t.todo,o=Object(i.b)(),n=e,r=function(){var t;!1===n.completed?o((t=n.id,{type:p,payload:t})):o(function(t){return{type:h,payload:t}}(n.id))};return Object(I.jsxs)(k.a,{direction:"row",borderBottom:"1px solid",borderColor:"primary",width:"60vw",margin:"auto",padding:2,justifyContent:"space-between",alignItems:"center",children:[Object(I.jsx)(L.a,{width:"55vw",children:e.content}),Object(I.jsxs)(k.a,{direction:"row",divider:Object(I.jsx)(k.b,{}),alignItems:"center",width:"10vw",justifyContent:"space-around",children:[Object(I.jsxs)(k.a,{alignItems:"center",children:[Object(I.jsx)(L.a,{children:"Done"}),Object(I.jsx)(N.a,{defaultChecked:e.completed,color:"primary",onChange:function(){return setTimeout(r,700)}})]}),Object(I.jsx)(D.a,{width:"fit-content",background:"transparent",_hover:{color:"#C53030"},onClick:function(){var t;o((t=e.id,{type:u,payload:t}))},children:Object(I.jsx)(P.a,{as:H.a})})]})]})},J=function(t){var e=t.todos,o=Object(i.c)((function(t){return t.show}));return Object(I.jsx)(k.a,{spacing:2,background:"white",borderRadius:"md",padding:2,height:"100vh",width:"100%",position:"absolute",top:"40vh",children:Object(I.jsx)("ul",{children:"completed"===o?e.filter((function(t){return!0===t.completed})).map((function(t){return Object(I.jsx)(W,{todo:t},t.id)})):e.filter((function(t){return!1===t.completed})).map((function(t){return Object(I.jsx)(W,{todo:t},t.id)}))})})},M=o(10),R=function(){var t=Object(i.c)((function(t){return t.todos}));return Object(I.jsxs)(w.a,{theme:y,children:[Object(I.jsx)(M.a,{path:"/",component:F}),Object(I.jsx)(M.a,{path:"/tasks-administrator/",exact:!0,children:Object(I.jsx)(J,{todos:t})}),Object(I.jsx)(M.a,{path:"/tasks-administrator/completed",children:Object(I.jsx)(J,{todos:t})})]})};a.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(_.a,{children:Object(I.jsx)(i.a,{store:m,children:Object(I.jsx)(R,{})})})}),document.getElementById("root")),g()}},[[98,1,2]]]);
//# sourceMappingURL=main.cbda5446.chunk.js.map