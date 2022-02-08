(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a,r,s=n(17),c=n.n(s),l=n(6),i=n(2),o=n(7),d=n.n(o),j=n(0),u=function(){return Object(j.jsx)("div",{className:"navbar",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(l.c,{type:"button",to:"/",className:function(e){var t=e.isActive;return d()("navbar-item","is-tab",{"is-active":t})},children:"Home"}),Object(j.jsx)(l.c,{type:"button",to:"/people",className:function(e){var t=e.isActive;return d()("navbar-item","is-tab",{"is-active":t})},children:"People"})]})})},b=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},h=n(11),m=n(18),O=n(3),x=n(13),f=n.n(x),p=n(1),v=n(19),N=n.n(v);!function(e){e.name="name",e.sex="sex",e.born="born",e.died="died"}(a||(a={})),function(e){e.asc="asc",e.desc="desc"}(r||(r={}));var g=n(4),y=function(e){return e.map((function(t){var n=e.find((function(e){return e.name===t.motherName})),a=e.find((function(e){return e.name===t.fatherName}));return Object(g.a)(Object(g.a)({},t),{},{mother:n||null,father:a||null})}))},S=function(e){var t=e.title,n=e.sortBy,a=e.selectedSortBy,r=e.selectedSortOrder,s=e.handleSortByChange;return Object(j.jsxs)("div",{className:"level",children:[t,Object(j.jsx)("button",{type:"button",className:"button is-ghost is-small",onClick:function(){s(n)},children:a!==n?Object(j.jsx)("img",{src:"./images/sort_both.png",alt:"sort"}):Object(j.jsx)("img",{src:"./images/sort_".concat(r,".png"),alt:"sort-".concat(r)})})]})},C=function(e){var t=e.name,n=e.slug,a=e.sex,r=Object(i.g)().search;return Object(j.jsx)(l.b,{to:{pathname:"/people/".concat(n),search:r},children:Object(j.jsx)("span",{style:{color:"m"===a?"#2785db":"#d83939"},children:t})})},B=function(e,t){return e?Object(j.jsx)(C,{name:e.name,slug:e.slug,sex:e.sex}):Object(j.jsx)("span",{style:{fontWeight:"bold"},children:t})},F=function(e){var t=e.name,n=e.sex,a=e.born,r=e.died,s=e.slug,c=e.mother,l=e.father,o=e.motherName||"-",u=e.fatherName||"-",b=Object(i.j)().selectedSlug;return Object(j.jsxs)("tr",{className:d()("Person",{"is-selected":s===b}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(C,{name:t,slug:s,sex:n})}),Object(j.jsx)("td",{children:n}),Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:r}),Object(j.jsx)("td",{children:B(c,o)}),Object(j.jsx)("td",{children:B(l,u)})]})},w=[{title:"Name",sortBy:a.name},{title:"Sex",sortBy:a.sex},{title:"Born",sortBy:a.born},{title:"Died",sortBy:a.died},{title:"Mother",sortBy:null},{title:"Father",sortBy:null}],k=(n(37),function(e){var t=e.selectedSortBy,n=e.selectedSortOrder,a=e.filteredPeople,r=e.handleSortByChange;return Object(j.jsxs)("table",{className:"table is-striped is-hoverable",children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:w.map((function(e){var a=e.title,s=e.sortBy;return Object(j.jsx)("th",{className:d()({"selected-th":s&&t===s}),children:s?Object(j.jsx)(S,{title:a,sortBy:s,selectedSortBy:t,selectedSortOrder:n,handleSortByChange:r}):a},a)}))})}),Object(j.jsx)("tbody",{children:a.map((function(e){return Object(j.jsx)(F,Object(g.a)({},e),e.name)}))})]})}),E=function(){var e=Object(p.useState)([]),t=Object(O.a)(e,2),n=t[0],s=t[1],c=Object(p.useState)(!0),o=Object(O.a)(c,2),d=o[0],u=o[1],b=Object(i.h)(),x=Object(i.g)(),v=x.search,g=x.pathname,S=new URLSearchParams(v),C=S.get("query")||"",B=function(e){switch(e){case"name":return a.name;case"sex":return a.sex;case"born":return a.born;case"died":return a.died;default:return null}}(S.get("sortBy")),F=function(e){switch(e){case"asc":default:return r.asc;case"desc":return r.desc}}(S.get("sortOrder")),w=Object(p.useState)(C),E=Object(O.a)(w,2),I=E[0],A=E[1],P=function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}));case 2:t=e.sent,s(y(t)),u(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=Object(p.useCallback)(N()((function(e,t){e?S.set("query",e):S.delete("query"),b({pathname:t,search:S.toString()})}),500),[]);Object(p.useEffect)((function(){P()}),[]);var q=n;if(C){var _=C.toLowerCase();q=n.filter((function(e){return[e.name,e.motherName,e.fatherName].some((function(e){return!!e&&e.toLowerCase().includes(_)}))}))}return B&&(q=function(e,t,n){var s=Object(h.a)(e).sort((function(e,n){switch(t){case a.name:return e.name.localeCompare(n.name);case a.sex:return e.sex.localeCompare(n.sex);case a.born:return e.born-n.born;case a.died:return e.died-n.died;default:return 1}}));return n===r.asc?s:s.reverse()}(q,B,F)),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"level",children:Object(j.jsx)("div",{className:"level-item",children:Object(j.jsx)("h1",{className:"title",children:"People"})})}),d?Object(j.jsx)("h2",{className:"subtitle",children:"Loading people..."}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"level",children:[Object(j.jsx)("div",{className:"level-left",children:Object(j.jsx)("input",{type:"text",className:"input",placeholder:"Search",value:I,onChange:function(e){A(e.target.value),L(e.target.value,g)}})}),Object(j.jsx)("div",{className:"level-right",children:"/people/new"!==g?Object(j.jsx)(l.b,{type:"button",className:"button",to:{pathname:"/people/new",search:v},children:"Add person"}):Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{context:[n,function(e){s([].concat(Object(h.a)(n),[e])),b({pathname:"/people",search:S.toString()})}]})})})]}),Object(j.jsx)("div",{className:"level",children:Object(j.jsx)("div",{className:"level-item",children:Object(j.jsx)(k,{selectedSortBy:B,selectedSortOrder:F,filteredPeople:q,handleSortByChange:function(e){S.set("sortBy",e),B!==e?S.set("sortOrder","asc"):S.set("sortOrder",F===r.asc?"desc":"asc"),b({search:S.toString()})}})})})]})]})},I=n(10),A=function(e){var t=e.value,n=e.handleInputChange,a=e.validateFields,r=e.errors,s=r.isEmpty,c=r.hasForbiddenSymbols,l=r.userAlreadyExists;return Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{className:"label",htmlFor:"name-input",children:["Name",Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("input",{className:"input",type:"text",id:"name-input",placeholder:"Enter Full Name",value:t,onChange:function(e){n("name",e.target.value)},onBlur:function(){a("name")}})})]}),Object(j.jsxs)("p",{className:"help is-danger",children:[s&&"Cannot be empty",c&&"Should only contain letters and spaces",l&&"Person with this name is already in the list"]})]})},P=function(e){var t=e.title,n=e.value,a=e.fieldName,r=e.disabled,s=e.defaultOption,c=e.parents,l=e.handleInputChange;return Object(j.jsx)("div",{className:"field",children:Object(j.jsxs)("label",{className:"label",htmlFor:"mother-select",children:[t,Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("div",{className:"select",children:Object(j.jsxs)("select",{id:"mother-select",value:n,onChange:function(e){l(a,e.target.value)},disabled:r,children:[Object(j.jsx)("option",{children:s}),c.map((function(e){var t=e.name;return Object(j.jsx)("option",{value:t,children:t},t)}))]})})})]})})},L=function(e){var t=e.sex,n=e.handleInputChange;return Object(j.jsx)("div",{className:"field",children:Object(j.jsxs)("label",{className:"label",htmlFor:"sex-selection",children:["Sex",Object(j.jsxs)("div",{className:"control",id:"sex-selection",children:[Object(j.jsxs)("label",{className:"radio",htmlFor:"radio-m",children:[Object(j.jsx)("input",{type:"radio",id:"radio-m",name:"question",checked:"m"===t,onChange:function(){n("sex","m")}}),"M"]}),Object(j.jsxs)("label",{className:"radio",htmlFor:"radio-f",children:[Object(j.jsx)("input",{type:"radio",id:"radio-f",name:"question",checked:"f"===t,onChange:function(){n("sex","f")}}),"F"]})]})]})})},q=function(e){var t=e.title,n=e.fieldName,a=e.value,r=e.hasError,s=e.min,c=e.max,l=e.disabled,i=e.handleInputChange,o=e.validateFields;return Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{className:"label",htmlFor:"".concat(n,"-input"),children:[t,Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("input",{className:"input",type:"number",id:"".concat(n,"-input"),placeholder:t,min:s,max:c,value:a||"",onChange:function(e){i(n,+e.target.value)},onBlur:function(){o(n)},disabled:l})})]}),Object(j.jsx)("p",{className:"help is-danger",children:r&&"Must be between ".concat(s," and ").concat(c)})]})},_=1400,D={name:"",sex:null,born:null,died:null,motherName:"",fatherName:""},M={name:{isEmpty:!1,hasForbiddenSymbols:!1,userAlreadyExists:!1},born:!1,died:!1},H=function(e){return!e.match(/^[a-zA-Z\s]*$/)},J=function(e,t){var n=e.toLowerCase().split(" ");return n.push(t.toString()),n.join("-")},z=function(e,t,n){return e.filter((function(e){return e.sex===n})).filter((function(e){return!t||e.born<t&&e.died>t}))},R=function(e,t){var n=[""!==e.name,e.sex,e.born,e.died].some((function(e){return!e})),a=Object.values(t.name).some((function(e){return e})),r=t.died||t.born;return n||a||r},U=function(){return(new Date).getFullYear()},W=function(e){var t=U(),n=e+150;return n>t?t:n},Y=function(e){var t=U();return e<_||e>t},Z=function(e,t){var n=W(e);return t<e||t>n},$=function(){var e=Object(p.useState)(D),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(p.useState)(M),s=Object(O.a)(r,2),c=s[0],l=s[1],o=Object(i.h)(),d=Object(i.i)(),u=Object(O.a)(d,2),b=u[0],h=u[1],m=z(b,n.born,"f"),x=z(b,n.born,"m"),f=function(e){switch(e){case"name":l(Object(g.a)(Object(g.a)({},c),{},{name:{isEmpty:(t=n.name,""===t.replace(/ /g,"")),hasForbiddenSymbols:H(n.name),userAlreadyExists:!!b.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))}}));break;case"born":l(Object(g.a)(Object(g.a)({},c),{},{born:!!n.born&&Y(n.born)}));break;case"died":l(Object(g.a)(Object(g.a)({},c),{},{died:!(!n.died||!n.born)&&Z(n.born,n.died)}))}var t},v=function(e,t){a(Object(g.a)(Object(g.a)({},n),{},Object(I.a)({},e,t)))},N=n.born?W(n.born):U();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!R(n,c)){var t=function(e,t){var n=e.name,a=e.sex,r=e.born,s=e.died,c=e.motherName,l=e.fatherName,i=""===c?null:t.find((function(e){return e.name===c}))||null,o=""===l?null:t.find((function(e){return e.name===l}))||null;return{name:n,sex:a||"f",born:r||1400,died:s||1400,motherName:""===c?null:c,fatherName:""===l?null:l,slug:J(n,r||1400),mother:i,father:o}}(n,b);h(t)}},children:[Object(j.jsxs)("div",{className:"field is-grouped is-grouped-right",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)(A,{value:n.name,handleInputChange:v,validateFields:f,errors:c.name})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)(L,{sex:n.sex,handleInputChange:v})})]}),Object(j.jsxs)("div",{className:"field is-grouped is-grouped-right",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)(q,{title:"Born",fieldName:"born",value:n.born,min:_,max:U(),disabled:!1,handleInputChange:v,validateFields:f,hasError:c.born})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)(q,{title:"Died",fieldName:"died",value:n.died,min:n.born||_,max:N,disabled:!n.born,handleInputChange:v,validateFields:f,hasError:c.died})})]}),Object(j.jsxs)("div",{className:"field is-grouped is-grouped-right",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)(P,{title:"Mother",value:n.motherName,fieldName:"motherName",defaultOption:"Select mother...",parents:m,disabled:!n.born,handleInputChange:v})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)(P,{title:"Father",value:n.fatherName,fieldName:"fatherName",defaultOption:"Select father...",parents:x,disabled:!n.born,handleInputChange:v})})]}),Object(j.jsxs)("div",{className:"field is-grouped is-grouped-right",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"submit",className:"button is-link",disabled:R(n,c),children:"Add person"})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"button",className:"button is-link is-light",onClick:function(){return o(-1)},children:"Cancel"})})]})]})})},G=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found :("})},K=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"container is-max-desktop",children:[Object(j.jsx)(u,{}),Object(j.jsxs)(i.e,{children:[Object(j.jsxs)(i.c,{path:"/people",element:Object(j.jsx)(E,{}),children:[Object(j.jsx)(i.c,{path:"new",element:Object(j.jsx)($,{})}),Object(j.jsx)(i.c,{path:":selectedSlug",element:Object(j.jsx)(j.Fragment,{})})]}),Object(j.jsx)(i.c,{path:"/",element:Object(j.jsx)(b,{})}),Object(j.jsx)(i.c,{path:"/home",element:Object(j.jsx)(i.a,{to:"/"})}),Object(j.jsx)(i.c,{path:"*",element:Object(j.jsx)(G,{})})]})]})})};c.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(K,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.fceb3b0d.chunk.js.map