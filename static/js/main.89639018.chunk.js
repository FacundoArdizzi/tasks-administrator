(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{98:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),c=o(45),a=o.n(c),i=o(19),d=o(70),s=o(79),j=o(12),l=o(13),b="ADD_TODO",u="DELETE_TODO",p="FINISH_TODO",h="UNFINISH_TODO",O="SHOW",x={todos:[],show:"pendient"},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(l.a)(Object(l.a)({},t),{},{todos:[e.payload].concat(Object(j.a)(t.todos))});case u:return Object(l.a)(Object(l.a)({},t),{},{todos:t.todos.filter((function(t){return t.id!==e.payload}))});case p:return Object(l.a)(Object(l.a)({},t),{},{todos:t.todos.map((function(t){return t.id===e.payload?Object(l.a)(Object(l.a)({},t),{},{completed:!0}):t}))});case h:return Object(l.a)(Object(l.a)({},t),{},{todos:t.todos.map((function(t){return t.id===e.payload?Object(l.a)(Object(l.a)({},t),{},{completed:!1}):t}))});case O:return Object(l.a)(Object(l.a)({},t),{},{show:e.payload});default:return t}},m=Object(d.b)(f,Object(d.a)(s.a)),g=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,121)).then((function(e){var o=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;o(t),n(t),r(t),c(t),a(t)}))},w=o(117),v=o(108),y=Object(v.a)({styles:{global:{body:{backgroundColor:"#E9E9E9"}}},colors:{primary:"#63B3ED"}}),C=o(118),k=o(113),D=o(120),E=o(44),I=function(t){return{type:O,payload:t}},_=o(2),T=function(){var t=Object(i.b)();return Object(_.jsx)(C.a,{direction:"row",backgroundColor:"white",paddingTop:5,borderBottomRadius:"xl",shadow:"md",width:"100%",opacity:"100%",children:Object(_.jsxs)(C.a,{direction:"row",width:"fit-content",margin:"auto",children:[Object(_.jsx)(E.b,{to:"/",children:Object(_.jsx)(D.a,{width:"20vw",textAlign:"center",fontWeight:"600",paddingBottom:"1.5",background:"transparent",_hover:{cursor:"pointer",color:"primary"},_focus:{color:"primary"},onClick:function(){return t(I("pendient"))},children:"PENDIENT"})}),Object(_.jsx)(E.b,{to:"/completed",children:Object(_.jsx)(D.a,{width:"20vw",textAlign:"center",fontWeight:"600",paddingBottom:"1.5",background:"transparent",_hover:{cursor:"pointer",color:"primary"},_focus:{color:"primary"},onClick:function(){return t(I("completed"))},children:"COMPLETED"})})]})})},B=o(3),S=o(119),A=function(){var t=Object(i.b)(),e=Object(n.useState)(""),o=Object(B.a)(e,2),r=o[0],c=o[1];return Object(_.jsxs)(C.a,{width:"100%",top:"10vh",alignItems:"center",children:[Object(_.jsx)(S.a,{width:"50vw",value:r,onChange:function(t){t.preventDefault(),c(t.target.value)},placeholder:"Add a task... ",border:"1px solid",borderColor:"blackAlpha.900",_hover:{border:"2px",borderColor:"primary"},_focus:{border:"2px",orderColor:"blue.500"}}),Object(_.jsx)(D.a,{onClick:function(){var e=Date.now();t({type:b,payload:{content:r,completed:!1,id:e}}),c("")},colorScheme:"green",variant:"outline",width:"20vw",_hover:{background:"green.400",color:"white"},children:"Add"})]})},F=function(){return Object(_.jsxs)(C.a,{width:"100%",children:[Object(_.jsx)(k.a,{position:"fixed",zIndex:"9999",width:"100%",opacity:"100%",children:Object(_.jsx)(T,{})}),Object(_.jsx)(k.a,{position:"absolute",top:"15vh",width:"100%",children:Object(_.jsx)(A,{})})]})},N=o(114),L=o(116),P=o(115),H=o(84),W=function(t){var e=t.todo,o=Object(i.b)(),n=e,r=function(){var t;!1===n.completed?o((t=n.id,{type:p,payload:t})):o(function(t){return{type:h,payload:t}}(n.id))};return Object(_.jsxs)(C.a,{direction:"row",borderBottom:"1px solid",borderColor:"primary",width:"60vw",margin:"auto",padding:2,justifyContent:"space-between",alignItems:"center",children:[Object(_.jsx)(N.a,{width:"55vw",children:e.content}),Object(_.jsxs)(C.a,{direction:"row",divider:Object(_.jsx)(C.b,{}),alignItems:"center",width:"10vw",justifyContent:"space-around",children:[Object(_.jsxs)(C.a,{alignItems:"center",children:[Object(_.jsx)(N.a,{children:"Done"}),Object(_.jsx)(L.a,{defaultChecked:e.completed,color:"primary",onChange:function(){return setTimeout(r,700)}})]}),Object(_.jsx)(D.a,{width:"fit-content",background:"transparent",_hover:{color:"#C53030"},onClick:function(){var t;o((t=e.id,{type:u,payload:t}))},children:Object(_.jsx)(P.a,{as:H.a})})]})]})},J=function(t){var e=t.todos,o=Object(i.c)((function(t){return t.show}));return Object(_.jsx)(C.a,{spacing:2,background:"white",borderRadius:"md",padding:2,height:"100vh",width:"100%",position:"absolute",top:"40vh",children:Object(_.jsx)("ul",{children:"completed"===o?e.filter((function(t){return!0===t.completed})).map((function(t){return Object(_.jsx)(W,{todo:t},t.id)})):e.filter((function(t){return!1===t.completed})).map((function(t){return Object(_.jsx)(W,{todo:t},t.id)}))})})},M=o(10),R=function(){var t=Object(i.c)((function(t){return t.todos}));return Object(_.jsxs)(w.a,{theme:y,children:[Object(_.jsx)(M.a,{path:"/",component:F}),Object(_.jsx)(M.a,{path:"/",exact:!0,children:Object(_.jsx)(J,{todos:t})}),Object(_.jsx)(M.a,{path:"/completed",children:Object(_.jsx)(J,{todos:t})})]})};a.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(E.a,{children:Object(_.jsx)(i.a,{store:m,children:Object(_.jsx)(R,{})})})}),document.getElementById("root")),g()}},[[98,1,2]]]);
//# sourceMappingURL=main.89639018.chunk.js.map