import "./../scss/normalize.scss";
import "./../scss/core.scss";
import "./../scss/style.scss";
'use strict';

export class TodoApp {
	constructor (config) {
		this._TodoList = config.TodoList;
		this._TodoItem = config.TodoItem;
		this._container = this._createContainer();
	}
	
	_createContainer() {
		let elem = document.createElement('div');
		elem.className = 'app';
		return elem;
	}
	
	getContainer() {
		return this._container;
	}
	
	renderTodoListsFromJSON(json) {
		let lists =	json.map((currentList) => new this._TodoList({
			TodoItem: this._TodoItem,
			nearParent: this._container,
			name: currentList.name
		}).renderTodoItemsFromJSON(currentList.todos));
		lists.forEach((list) => this._container.appendChild(list.getContainer()));
		return this;
		
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