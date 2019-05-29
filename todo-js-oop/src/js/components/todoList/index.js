'use strict';

export class TodoList {
  constructor(config) {
    this._TodoItem = config.TodoItem;
    this._delegateParent = config.delegateParent;
  }



  renderTodoItems(json) {
    let elem = this.renderList(json.name);

    /*body.innerHTML = json.todos.reduce((all, currentItem) => all + `${
      new this._TodoItem().render(currentItem)
      }`, '');*/

    json.todos.forEach((currentItem) => elem.children[1].appendChild(new this._TodoItem({
      delegateParent: this._delegateParent
    }).render(currentItem)));

    return elem;
  }

  renderList(name) {
    let elem = document.createElement('div');
    elem.className = 'todo-list';
    let head = document.createElement('div');
    head.className = 'todo-list__head';
    let title = document.createElement('div');
    title.className = 'todo-list__title';
    title.textContent = `${name}`;
    head.appendChild(title);

    let newTodo = document.createElement('div');
    newTodo.className = 'new-todo';
    let newTodoInput = document.createElement('input');
    newTodoInput.className = 'new-todo__input';
    newTodoInput.type = 'text';
    newTodo.appendChild(newTodoInput);
    let newTodoButton = document.createElement('input');
    newTodoButton.className = 'new-todo__button';
    newTodoButton.type = 'button';
    newTodoButton.value = 'Add';
    newTodo.appendChild(newTodoButton);

    head.appendChild(newTodo);
    elem.appendChild(head);
    let body = document.createElement('div');
    body.className = 'todo-list__body';
    elem.appendChild(body);


    return elem;
  }
}