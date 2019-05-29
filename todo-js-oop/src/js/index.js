import {TodoList} from "./components/todoList/index";
import {TodoItem} from "./components/todoItem/index";
import data from "./../data/todoList.json";
import "./../scss/normalize.scss";
import "./../scss/core.scss";
import "./../scss/style.scss";
'use strict';


let entry = document.createElement("div");
entry.className = "entry";
document.body.appendChild(entry);

class TodoApp {
	constructor (config) {
		this._TodoList = config.TodoList;
		this._TodoItem = config.TodoItem;
	}

	renderTodoLists(json) {
	  let elem = document.createElement('div');
	  elem.className = 'app';

	  json.forEach((currentList) => elem.appendChild(new this._TodoList({
      TodoItem: this._TodoItem,
      delegateParent: elem
    }).renderTodoItems(currentList)));

	  return elem;

	  /*return json.map((item) => new this._TodoList({
      TodoItem: this._TodoItem
    }).renderTodoItem(currentList))*/

    /*return json.reduce((all, currentList) => all + `${
    	new this._TodoList({
				TodoItem: this._TodoItem
			}).renderTodoItem(currentList)
    }`,'');*/
	}
}

entry.appendChild(
	new TodoApp({
    TodoList: TodoList,
    TodoItem: TodoItem
	}).renderTodoLists(data)
);

