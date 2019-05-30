import {TodoList} from "./components/todoList/index";
import {TodoItem} from "./components/todoItem/index";
import {TodoApp} from "./app";
import data from "./../data/todoList.json";
// import Swiper from "./../vendor/swiper/swiper"
// import * as Swiper from "./../vendor/dist/js/swiper"
import Swiper from 'swiper';
'use strict';


let entry = document.createElement("div");
entry.className = "entry";
document.body.appendChild(entry);



const APP = new TodoApp({
	TodoList: TodoList,
	TodoItem: TodoItem
});
APP.renderTodoListsFromJSON(data);
entry.appendChild(APP.getContainer());

const slider = new Swiper(APP.getContainer(), {
  freeMode: true,
  //direction: 'horizontal',
  slidesPerView: 'auto',
  //observer: true,
  //observeSlideChildren: true,
});

slider.update();

window.addEventListener("needToUpdateSlider", function () {
  slider.update();
  console.log('updated');
});


