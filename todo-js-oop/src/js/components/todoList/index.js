import {Todo} from "../todo/index";
'use strict';

export class TodoList {
	constructor(config) {
		this._parent = config.parent;
		this._array = config.array;
	}
	
	render() {
		let elem = document.createElement('div');
		elem.className = 'todo-list';
		elem.appendChild(new Todo({
			parent: '.todo-list',
		}).render());
		document.querySelector(this._parent).appendChild(elem)
	}
}