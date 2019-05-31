'use strict';

export class TodoList {
  constructor(config) {
    this._TodoItem = config.TodoItem;
    this._nearParent = config.nearParent;
    this.createNewTodoFromEvent = this.createNewTodoFromEvent.bind(this);
    this.editText = this.editText.bind(this);
    // this.deleteTodo = this.deleteTodo.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this._container = this._createContainer(config.name);
  };

  editText({target}) {
  	//let clone = target.cloneNode(true);
  	//clone.ondblclick = this.editText;
		let text = target;
    let replaced = text;
    let parent = target.parentElement;


		let input = document.createElement('input');
		input.type = 'text';
		input.value = text.textContent;
		input.onchange = function () {
			text.textContent = input.value;
			//parent.insertBefore(clone, parent.firstChild);
			//parent.removeChild(input);
			replaced = parent.replaceChild(text, input)
    };

		replaced = parent.replaceChild(input, text)
    //parent.insertBefore(input, parent.firstChild);
    //parent.removeChild(target);
	}

  deleteTodo(child,event) {

    this._container.children[1].removeChild(child);
  }

  deleteList() {
    this._nearParent.removeChild(this._container)
	}

  createNewTodoFromEvent(event) {
    let name = event.target.firstElementChild.value;
    let todo = this.createNewTodo(name);
    this._container.children[1].appendChild(todo);
    event.target.firstElementChild.value = '';
    event.preventDefault();
  };

  createNewTodo(name, description, finished) {
    let todo = new this._TodoItem({
      nearParent: this._container.children[1],
      name: name,
      description: description,
      finished: finished,
			editText: this.editText
    });
    let todoContainer = todo.getContainer();
    todo.deleteHandler = this.deleteTodo.bind(this, todoContainer);
    todo.render();
    return todoContainer;
  };

  _createContainer(name) {
		let elem = document.createElement('div');
		elem.className = 'todo-list';

    let deleteButton = document.createElement('input');
    deleteButton.className = 'todo-item__delete';
    deleteButton.type = 'button';
    deleteButton.value = 'delete';
    deleteButton.onclick = this.deleteList;


		let head = document.createElement('div');
		head.className = 'todo-list__head no-swipe';
		let title = document.createElement('div');
		title.className = 'todo-list__title';
		title.textContent = `${name}`;
		title.ondblclick = this.editText;
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

		elem.appendChild(deleteButton);
		elem.appendChild(head);
		elem.appendChild(body);

		return elem;
	};

  getContainer() {
    return this._container;
  };

  renderTodoItemsFromJSON(json) {
		/*body.innerHTML = json.todos.reduce((all, currentItem) => all + `${
		 new this._TodoItem().render(currentItem)
		 }`, '');*/

    json.forEach((currentItem) => this._container.children[1].appendChild(this.createNewTodo(currentItem.name, currentItem.description, currentItem.finished)));

    return this;





  };

}