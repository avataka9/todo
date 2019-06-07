import "./../scss/normalize.scss";
import "./../scss/core.scss";
import "./../scss/style.scss";
import "./../img/plus.svg";
'use strict';

export class TodoApp {
	constructor (config) {
		this._TodoList = config.TodoList;
		this._TodoItem = config.TodoItem;
    this._addButtonHandler = this._addButtonHandler.bind(this);
		this._container = this._createContainer();
		this._wrapper = this._container.firstElementChild.firstElementChild.firstElementChild;
	}
	
	_createContainer() {
		let app = document.createElement('div');
		app.className = 'app';
    let body = document.createElement('div');
    body.className = 'app__body';
		let wrapper = document.createElement('div');
		wrapper.className = 'app__wrapper';
    let scrollbar = document.createElement('div');
    scrollbar.className = 'app-scrollbar';
    let lists = document.createElement('div');
    lists.className = 'app__lists';
		let add = document.createElement('div');
		add.className = 'app__add-list';
		add.innerHTML = `<img class="app__plus" src="./../img/plus.svg">`;
		add.onclick = this._addButtonHandler;

		body.appendChild(wrapper);
		wrapper.appendChild(lists);
    wrapper.appendChild(add);
    app.appendChild(body);
    app.appendChild(scrollbar);

		return app;
	}
	
	getContainer() {
		return this._container;
	}

	_addButtonHandler(event) {
		if (event.type === "click") {
      this._wrapper.appendChild(this.createList().getContainer());
      this._container.dispatchEvent(new CustomEvent('needToUpdateSlider', {bubbles: true, detail: { width: this._wrapper.parentElement.offsetWidth }}));
		} else if (event.type === "mouseenter") {

		} else if (event.type === "mouseleave") {

    }
	}

	createList(name) {
    return new this._TodoList({
      TodoItem: this._TodoItem,
      nearParent: this._wrapper,
      name: name || 'default name'
    })
	}
	
	renderTodoListsFromJSON(json) {
		let lists =	json.map((currentList) => this.createList(currentList.name).renderTodoItemsFromJSON(currentList.todos));
		lists.forEach((list) => this._wrapper.appendChild(list.getContainer()));
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