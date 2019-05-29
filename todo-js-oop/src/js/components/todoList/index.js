'use strict';

export class TodoList {
  constructor(config) {
    this._TodoItem = config.TodoItem;
    this._nearParent = config.nearParent;
    this.createNewTodoFromEvent = this.createNewTodoFromEvent.bind(this);
    // this.deleteTodo = this.deleteTodo.bind(this);
    this._container = this._createContainer(config.name);
  };
  
  renderTodoItemsFromJSON(json) {
    /*body.innerHTML = json.todos.reduce((all, currentItem) => all + `${
      new this._TodoItem().render(currentItem)
      }`, '');*/

    json.forEach((currentItem) => this._container.children[1].appendChild(this.createNewTodo(currentItem.name, currentItem.description, currentItem.finished)));

    return this;
  };
  
  createNewTodo(name, description, finished) {
		let todo = new this._TodoItem({
			nearParent: this._container.children[1],
			name: name,
      description: description,
      finished: finished
		}).render();
		todo.setDeleteHandler = this.deleteTodo(todo.getContainer());
		return todo.getContainer();
  };
  
  deleteTodo(child) {
    console.log(this._container.children[1]);
    console.log(child);
    
    return function() {this._container.children[1].removeChild(child)};
  }
  
  createNewTodoFromEvent(event) {
    let name = event.target.firstElementChild.value;
    let todo = this.createNewTodo(name);
		this._container.children[1].appendChild(todo);
		event.preventDefault();
	};
	
	_createContainer(name) {
		let elem = document.createElement('div');
		elem.className = 'todo-list';
		
		let head = document.createElement('div');
		head.className = 'todo-list__head';
		let title = document.createElement('div');
		title.className = 'todo-list__title';
		title.textContent = `${name}`;
		head.appendChild(title);
		
		let newTodo = document.createElement('form');
		newTodo.className = 'new-todo';
		let newTodoInput = document.createElement('input');
		newTodoInput.className = 'new-todo__input';
		newTodoInput.type = 'text';
		newTodo.appendChild(newTodoInput);
		let newTodoButton = document.createElement('button');
		newTodoButton.className = 'new-todo__button';
		newTodoButton.textContent = 'Add';
		newTodo.appendChild(newTodoButton);
		newTodo.action = "#";
		newTodo.method = "POST";
		newTodo.onsubmit = this.createNewTodoFromEvent;
  
		head.appendChild(newTodo);
		
		let body = document.createElement('div');
		body.className = 'todo-list__body';
		
		elem.appendChild(head);
		elem.appendChild(body);
		
		return elem;
	};

  getContainer() {
    return this._container;
  };
	
}