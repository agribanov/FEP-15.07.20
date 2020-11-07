(()=>{"use strict";var t={740:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(645),o=n.n(i)()((function(t){return t[1]}));o.push([t.id,".task-list {\n    margin-bottom: 20px;\n}\n.task-item {\n    color: #555;\n    border: 1px solid #bbb;\n    cursor: pointer;\n    padding: 10px 20px;\n    margin: 5px 0;\n    font-size: 20px;\n    background-color: lightyellow;\n}\n\n.task-item.done {\n    background-color: lightgreen;\n}\n.delete-btn {\n    float: right;\n}\n",""]);const s=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(o[r]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},379:(t,e,n)=>{var i,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function r(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},i=[],o=0;o<t.length;o++){var a=t[o],l=e.base?a[0]+e.base:a[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=r(d),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(s[u].references++,s[u].updater(h)):s.push({identifier:d,updater:v(h,e),references:1}),i.push(d)}return i}function l(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var s=n.nc;s&&(i.nonce=s)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var r=o(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var c,d=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function u(t,e,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var s=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function h(t,e,n){var i=n.css,o=n.media,s=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var f=null,p=0;function v(t,e){var n,i,o;if(e.singleton){var s=p++;n=f||(f=l(e)),i=u.bind(null,n,s,!1),o=u.bind(null,n,s,!0)}else n=l(e),i=h.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var o=r(n[i]);s[o].references--}for(var l=a(t,e),c=0;c<n.length;c++){var d=r(n[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=l}}}}},e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{class t{constructor(t){console.log("TodoListView created"),this.config=t,this.$el=this.initView()}initView(){return $('<div id="taskList" class="task-list u-full-width"></div>').on("click",".task-item",(t=>this.onItemClick(t))).on("click",".delete-btn",(t=>this.onDeleteClick(t)))}render(t){this.$el.html(t.map(this.getTodoTemplate).join("\n"))}getTodoTemplate(t){return`<div class="task-item u-full-width ${t.isDone?"done":""}" data-todo-id="${t.id}">\n                    ${t.title}\n                    <span class="delete-btn">✘</span>\n                </div>`}onItemClick(t){const e=$(t.target).data("todoId");this.config.onToggle(e)}onDeleteClick(t){t.stopPropagation();const e=$(t.target).closest(".task-item").data("todoId");this.config.onDelete(e)}}class e{constructor(t){this.config=t,this.$el=this.initView(),this.$taskInput=this.$el.find("#taskNameInput")}initView(){return $('<form id="addTaskForm">\n                    <div class="row">\n                        <div class="ten columns">\n                            <input\n                                type="text"\n                                id="taskNameInput"\n                                class="u-full-width"\n                            />\n                        </div>\n                        <div class="two columns">\n                            <input type="submit" class="u-full-width" value="Add" />\n                        </div>\n                    </div>\n                </form>').on("submit",(t=>this.onFormSubmit(t)))}onFormSubmit(t){t.preventDefault();const e={title:this.$taskInput.val()};this.config.onSave(e),this.clear()}clear(){this.$taskInput.val("")}}const i="https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos";class o{constructor(){console.log("collection created",i),this.list=[]}getList(){return fetch(i).then((t=>t.json())).then((t=>this.list=t))}toggle(t){const e=this.list.find((e=>e.id==t));return e.isDone=!e.isDone,fetch(`${i}/${t}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}delete(t){return this.list=this.list.filter((e=>e.id!=t)),fetch(`${i}/${t}`,{method:"DELETE"})}add(t){return t.isDone=!1,fetch(""+i,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((t=>this.list.push(t)))}}class s{constructor(){this.listview=new t({onToggle:this.onToggle.bind(this),onDelete:t=>this.onDelete(t)}),this.formView=new e({onSave:t=>this.onSave(t)}),$(".container").append(this.listview.$el).append(this.formView.$el),this.collection=new o,this.collection.getList().then((()=>this.renderList()))}onToggle(t){console.log("this",this),this.collection.toggle(t),this.renderList()}onDelete(t){this.collection.delete(t),this.renderList()}onSave(t){this.collection.add(t).then((()=>this.renderList()))}renderList(){this.listview.render(this.collection.list)}}var r=n(379),a=n.n(r),l=n(740);a()(l.Z,{insert:"head",singleton:!1}),l.Z.locals,$((()=>{console.log("hello world"),new s}))})()})();