(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),r=n(10),c=n.n(r),i=n(8),l=n(6),s=n(7),u=n(2),d=n(3),b=n(5),f=n(4),h=(n(17),function(t){var e=t.toDo,n=t.done;return Object(o.jsxs)("div",{className:"app-header d-flex",children:[Object(o.jsx)("h1",{children:"Todo List"}),Object(o.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})}),j=n(11),m=(n(18),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,a=t.onToggleDone,r=t.onToggleImportant,c="todo-list-item";return t.done&&(c+=" done"),t.important&&(c+=" important"),Object(o.jsxs)("span",{className:c,children:[Object(o.jsx)("span",{className:"todo-list-item-label",onClick:a,children:e}),Object(o.jsx)("button",{type:"button",onClick:r,className:"btn btn-outline-success btn-sm float-right",children:Object(o.jsx)("i",{className:"fa fa-exclamation"})}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n,children:Object(o.jsx)("i",{className:"fa fa-trash-o"})})]})}}]),n}(a.Component)),p=(n(19),function(t){var e=t.todos,n=t.onDeleted,a=t.onToggleImportant,r=t.onToggleDone,c=e.map((function(t){var e=t.id,c=Object(j.a)(t,["id"]);return Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)(m,Object(l.a)(Object(l.a)({},c),{},{onDeleted:function(){return n(e)},onToggleImportant:function(){return a(e)},onToggleDone:function(){return r(e)}}))},e)}));return Object(o.jsx)("ul",{className:"list-group todo-list",children:c})}),g=(n(20),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={term:""},t.onTermChange=function(e){var n=t.props.onSearchChange,o=void 0===n?function(){}:n;t.setState({term:e.target.value}),o(e.target.value)},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsx)("input",{className:"form-control search-input",placeholder:"text here to search",type:"text",value:this.state.term,onChange:this.onTermChange})}}]),n}(a.Component)),O=(n(21),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange,a=this.buttons.map((function(t){var a=t.name,r=t.label,c=e===a?"btn-info":"btn-outline-secondary";return Object(o.jsx)("button",{type:"button",className:"btn ".concat(c),onClick:function(){return n(a)},children:r},a)}));return Object(o.jsx)("div",{className:"btn-group",children:a})}}]),n}(a.Component)),v=(n(22),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.onItemAdded(t.state.label),t.setState({label:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit,children:[Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"What needs to be done",onChange:this.onLabelChange,value:this.state.label}),Object(o.jsx)("button",{className:"btn btn-outline-secondary",children:"Add item"})]})}}]),n}(a.Component)),x=(n(23),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).maxId=100,t.state={todoData:[t.createTodoItem("Drink Cofee"),t.createTodoItem("Make Awesome App"),t.createTodoItem("Have a lunch")],term:"",filter:"all"},t.deleteItem=function(e){t.setState((function(t){var n=t.todoData,o=n.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(s.a)(n.slice(0,o)),Object(s.a)(n.slice(o+1)))}}))},t.addItem=function(e){var n=t.createTodoItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(s.a)(e),[n])}}))},t.onToggleProrerty=function(t,e,n){var o=t.findIndex((function(t){return t.id===e})),a=t[o],r=Object(l.a)(Object(l.a)({},a),{},Object(i.a)({},n,!a[n]));return[].concat(Object(s.a)(t.slice(0,o)),[r],Object(s.a)(t.slice(o+1)))},t.onToggleImportant=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.onToggleProrerty(o,e,"important")}}))},t.onToggleDone=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.onToggleProrerty(o,e,"done")}}))},t.onSearchChange=function(e){t.setState({term:e})},t.onFilterChange=function(e){t.setState({filter:e})},t}return Object(d.a)(n,[{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"search",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))}},{key:"filter",value:function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}));default:return t}}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,a=t.filter,r=this.filter(this.search(e,n),a),c=e.filter((function(t){return t.done})).length,i=e.length-c;return Object(o.jsxs)("div",{className:"todo-app",children:[Object(o.jsx)(h,{toDo:i,done:c}),Object(o.jsxs)("div",{className:"top-panel d-flex",children:[Object(o.jsx)(g,{onSearchChange:this.onSearchChange}),Object(o.jsx)(O,{filter:a,onFilterChange:this.onFilterChange})]}),Object(o.jsx)(p,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),Object(o.jsx)(v,{onItemAdded:this.addItem})]})}}]),n}(a.Component));c.a.render(Object(o.jsx)(x,{}),document.querySelector("#root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.4bcc11f6.chunk.js.map