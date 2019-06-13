'use strict';
import {TaskManager} from "./app"

let entryPoint = document.createElement('div');
document.appendChild(entryPoint);

const TaskManager = new TaskManager();


entryPoint.appendChild(TaskManager);