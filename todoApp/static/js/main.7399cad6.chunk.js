(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(7),i=n(6),u=n(1),s=n(2),m=n(4),f=n(3),d=n(5),b=(n(16),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),p=(n(17),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},n.onSearch=function(e){var t=e.target.value,a=n.props.onSearchPanel;n.setState({term:t}),a(t)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.term;return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"search",onChange:this.onSearch,value:e})}}]),t}(a.Component)),h=n(10),g=(n(18),n(19),function(e){var t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=e.important,l="todo-list-item";return e.done&&(l+=" done"),c&&(l+=" important"),o.a.createElement("span",{className:l},o.a.createElement("span",{className:"todo-list-item-label",onClick:r},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}),v=function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=t.map((function(e){var t=e.id,c=Object(h.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(g,Object.assign({},c,{onDeleted:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},c)},O=(n(20),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilter,a=this.buttons.map((function(e){var a=e.name,r=e.label,c=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(c),key:a,onClick:function(){return n(a)}},r)}));return o.a.createElement("div",{className:"btn-group"},a)}}]),t}(a.Component)),y=(n(21),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault(),(0,n.props.onAdd)(n.state.label),n.setState({label:""})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.label;return o.a.createElement("form",{className:"add-item",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,value:e,placeholder:"What needs to be done?"}),o.a.createElement("button",{className:"btn btn-outline-secondary"},"Add Item"))}}]),t}(a.Component));n(22);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).maxId=1,n.state={todoData:[n.createTodoItem("Drink Coffee"),n.createTodoItem("Make Awesome App"),n.createTodoItem("Have a lunch")],term:"",filter:"all"},n.deleteItem=function(e){n.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(i.a)(n.slice(0,a)),Object(i.a)(n.slice(a+1)))}}))},n.addItem=function(e){if(""===e)return!1;var t=n.createTodoItem(e);n.setState((function(e){var n=e.todoData;return{todoData:[].concat(Object(i.a)(n),[t])}}))},n.onToggleImportant=function(e){n.setState((function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"important")}}))},n.onToggleDone=function(e){n.setState((function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"done")}}))},n.search=function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))},n.onSearchPanel=function(e){n.setState({term:e})},n.onFilter=function(e){n.setState({filter:e})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),o=e[a],r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,Object(l.a)({},n,!o[n]));return[].concat(Object(i.a)(e.slice(0,a)),[r],Object(i.a)(e.slice(a+1)))}},{key:"filterItems",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,r=this.filterItems(t,a),c=this.search(r,n),l=t.filter((function(e){return e.done})).length,i=t.length-l;return o.a.createElement("div",{className:"todo-app"},o.a.createElement(b,{toDo:i,done:l}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(p,{onSearchPanel:this.onSearchPanel}),o.a.createElement(O,{filter:a,onFilter:this.onFilter})),o.a.createElement(v,{todos:c,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(y,{onAdd:this.addItem}))}}]),t}(a.Component);c.a.render(o.a.createElement(D,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.7399cad6.chunk.js.map