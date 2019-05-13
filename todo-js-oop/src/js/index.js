import {TodoList} from "./components/todoList/index";
'use strict';


let entry = document.createElement('div');
entry.className = 'app';
document.body.appendChild(entry);

new TodoList({
	parent: '.app'
}).render();