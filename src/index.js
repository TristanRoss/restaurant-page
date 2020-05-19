import {fillHome} from './home';

document.body.style.padding = "0";
document.body.style.margin = "0";
const content = document.querySelector('#content');
content.appendChild(fillHome());