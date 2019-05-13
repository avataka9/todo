import {defaultView} from "./view/defaultView";
'use strict';


export class Todo {
	constructor(config) {
		this.name = config.name || 'default name';
		this.description = config.description || 'default description';
		this.finished = config.finished || false;
		this._parent = config.parent;
		this.elem = undefined;
	}
	
	render() {
		let elem = document.createElement('div');
		elem.className = 'todo-item';
		elem.innerHTML = defaultView({
			name: this.name,
			description: this.description,
			finished: this.finished,
			onDelete: this.deleteItem
		});
		this.elem = elem;
		return this.elem;
	}
	
	deleteItem(e) {
		e.preventDefault();
		console.log('click');
		//document.querySelector(this._parent).removeChild(this.elem);
	}
	
}