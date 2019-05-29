import {defaultView} from "./view/defaultView";
'use strict';


export class TodoItem {
	constructor(config) {
    this._delegateParent = config.delegateParent;
    console.log(this._delegateParent)
	}
	
	render(json) {
		let elem = document.createElement('div');
		elem.className = 'todo-item';
		elem.innerHTML = defaultView({
			name: json.name,
			description: json.description,
			finished: json.finished,
		});
		return elem;
	}

}