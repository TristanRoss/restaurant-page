import {fillPage} from './fillPage';

let list = fillPage();
document.body.style.padding = "0";
document.body.style.margin = "0";
const content = document.querySelector('#content');
const container = document.createElement('div');
container.appendChild(list[0]);
container.appendChild(list[1]);
container.style.backgroundImage = "url('../food.jpg')";
container.style.backgroundSize = "cover";
container.style.backgroundRepeat = "no-repeat";
container.style.height = "1000px";
container.style.color = "white";
container.style.textShadow = "1px 1px 5px black";
container.style.textAlign = "center";
content.appendChild(container);