(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),s=(a(13),a(2)),r=(a(14),a(7)),i=function(e){var t=e.setInputtext,a=e.setTodos,o=e.todos,c=e.inputtext,l=e.setstatus;return n.a.createElement("form",null,n.a.createElement("input",{value:c,onChange:function(e){t(e.target.value)},type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),0!==c.length?(a([].concat(Object(r.a)(o),[{text:c,completed:!1,id:1e3*Math.random()}])),t("")):alert("Enter something, duh!")},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(e){l(e.target.value)},name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},u=a(4),m=function(e){var t=e.todo,a=e.todos,o=e.setTodos;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:t.completed?"completed":"todo-item"},t.text),n.a.createElement("button",{onClick:function(){o(a.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{onClick:function(){o(a.filter((function(e){return e.id!==t.id})))},className:"trash-btn"},n.a.createElement("i",{className:"fas fa-trash"})))},d=function(e){var t=e.todos,a=e.setTodos,o=e.filteredTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.map((function(e){return n.a.createElement(m,{key:e.id,todo:e,todos:t,setTodos:a})}))))};var f=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)([]),r=Object(s.a)(l,2),u=r[0],m=r[1],f=Object(o.useState)("all"),p=Object(s.a)(f,2),E=p[0],b=p[1],h=Object(o.useState)([]),v=Object(s.a)(h,2),g=v[0],N=v[1];Object(o.useEffect)((function(){S()}),[]),Object(o.useEffect)((function(){O(),j()}),[u,E]);var O=function(){switch(E){case"completed":N(u.filter((function(e){return!0===e.completed})));break;case"uncompleted":N(u.filter((function(e){return!1===e.completed})));break;default:N(u)}},j=function(){localStorage.setItem("todos",JSON.stringify(u))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));m(e)}};return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("h1",null,"To-Do List")),n.a.createElement(i,{setInputtext:c,inputtext:a,todos:u,setTodos:m,setstatus:b}),n.a.createElement(d,{todos:u,setTodos:m,filteredTodos:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.cc50a5f5.chunk.js.map