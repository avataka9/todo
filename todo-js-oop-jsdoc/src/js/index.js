import {TodoList} from "./components/todoList/index";
import {TodoItem} from "./components/todoItem/index";
import {TodoApp} from "./app";
import data from "./../data/todoList.json";
import { Swiper, Scrollbar } from 'swiper/dist/js/swiper.esm.js';
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

Swiper.use([Scrollbar]);
const slider = new Swiper(APP.getContainer(), {
  freeMode: true,
  direction: 'horizontal',
  slidesPerView: 'auto',
  grabCursor: true,
  noSwipingClass: 'no-swipe',
  observer: true,
  wrapperClass: 'app__body',
	slideClass: 'app__wrapper',
  scrollbar: {
    el: '.app-scrollbar',
		hide: true,
    dragClass: 'app-scrollbar__drag',
  },
});

window.addEventListener("needToUpdateSlider", function (event) {
	if (event.detail.width >= slider.width) {
    slider.setTranslate(-(event.detail.width - slider.width));
  }
});


