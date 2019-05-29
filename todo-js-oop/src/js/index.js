import {TodoList} from "./components/todoList/index";
import {TodoItem} from "./components/todoItem/index";
import data from "./../data/todoList.json";
import {TodoApp} from "./app";
'use strict';


let entry = document.createElement("div");
entry.className = "entry";
document.body.appendChild(entry);



const APP = new TodoApp({
	TodoList: TodoList,
	TodoItem: TodoItem
});
APP.renderTodoListsFromJSON(data);

entry.appendChild(APP.getContainer());


