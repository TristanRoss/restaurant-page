import {fillPage} from './fillPage';

let list = fillPage();
const container = document.querySelector('#content');
container.appendChild(list[0]);
container.appendChild(list[1]);
container.appendChild(list[2]);