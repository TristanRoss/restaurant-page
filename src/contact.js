import {makeContainer} from './container';
import {makeTabList} from './tabs';

function fillContact() {

    const h1 = document.createElement('h1');
    h1.textContent = "Contact";
    h1.style.fontSize = "50px";
    h1.style.width = "50%";
    h1.style.margin = "auto";
    h1.style.paddingTop = "200px";
    h1.style.textAlign = "center";

    const h2 = document.createElement('h2');
    h2.textContent = "555-555-5555";
    h2.style.fontSize = "40px";
    h2.style.width = "50%";
    h2.style.margin = "auto";
    h2.style.paddingTop = "200px";
    h2.style.textAlign = "center";

    const container = makeContainer();
    const ul = makeTabList();
    container.appendChild(ul);
    container.appendChild(h1);
    container.appendChild(h2);

    return container;
}

export {
    fillContact,
}