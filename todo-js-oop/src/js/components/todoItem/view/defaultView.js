'use strict';

export function defaultView(config) {
	let template = `
			<input type="checkbox" class="todo-item__status ${config.finished?'checked':''}" ${config.finished?'checked':''}>
			<div class="todo-item__name">${config.name}</div>
			<div class="todo-item__description">${config.description}</div>
			<input class="todo-item__delete" type="button" onclick="${config.onDelete}" value="Delete">
	`;
	
	
	return template;
}