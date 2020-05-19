import {fillHome} from './home';
import {fillContact} from './contact';

function deleteElements() {
    const div = document.querySelector('#content');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

document.body.style.padding = "0";
document.body.style.margin = "0";


const content = document.querySelector('#content');
content.appendChild(fillHome());
homeButton();
contactButton();

function homeButton() {
const home = document.querySelector('#home');
    home.addEventListener('click', () => {
        deleteElements();
        content.appendChild(fillHome());
        homeButton();
        contactButton();
    });
}

function contactButton() {
    const contact = document.querySelector('#contact');
    contact.addEventListener('click', () => {
        deleteElements();
        content.appendChild(fillContact());
        homeButton();
        contactButton();
    });
}