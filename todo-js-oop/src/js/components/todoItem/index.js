import {defaultView} from "./view/defaultView";
'use strict';


export class TodoItem {
	constructor(config) {
    this._nearParent = config.nearParent;
		this._name = config.name || 'default name';
		this._description = config.description || 'write your description';
		this._finished = config.finished || false;
		this._container = this.createContainer(config.name);
		// this.deleteSelf = this.deleteSelf.bind(this);
	}
	
	createContainer() {
		let elem = document.createElement('div');
		return elem;
	}
	
	getContainer() {
		return this._container;
	}

	// deleteSelf() {
	// 	this._nearParent.removeChild(this._container)
	// }
	
	render() {
		/*this._container.innerHTML = defaultView({
			name: this._name,
			description: this._description,
			finished: this._finished,
			deleteSelf: this.deleteSelf
		});*/
		this._container.className = `todo-item ${this._finished ? 'todo-item--finished':''}`;
		
		let checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.className = "todo-item__checkbox";
		checkbox.checked = this._finished;
		
		let name = document.createElement('div');
		name.className = 'todo-item__name';
		name.textContent = this._name;
		let description = document.createElement('div');
		description.className = 'todo-item__description';
		description.textContent = this._description;
		
		let deleteButton = document.createElement('input');
		deleteButton.className = 'todo-item__delete';
		deleteButton.type = 'button';
		deleteButton.value = 'delete';
		deleteButton.onclick = this.deleteHandler;

		this._container.appendChild(checkbox);
		this._container.appendChild(name);
		this._container.appendChild(description);
		this._container.appendChild(deleteButton);
		
		return this;
	}
}