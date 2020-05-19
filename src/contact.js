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
    h2.textContent = "(555)-555-5555";
    h2.style.fontSize = "30px";
    h2.style.width = "50%";
    h2.style.margin = "auto";
    h2.style.paddingTop = "50px";
    h2.style.textAlign = "center";
    h2.style.letterSpacing = "3px";

    const h2Two = document.createElement('h2');
    h2Two.textContent = "P. Sherman, 42 Wallaby Way, Fakeland";
    h2Two.style.fontSize = "30px";
    h2Two.style.textAlign = "center";
    h2Two.style.margin = "0";

    const h2Three = document.createElement('h2');
    h2Three.textContent = "notarealemail@fakemail.fake";
    h2Three.style.fontSize = "30px";
    h2Three.style.textAlign = "center";
    h2Three.style.margin = "0";

    const container = makeContainer();
    const ul = makeTabList();
    container.appendChild(ul);
    container.appendChild(h1);
    container.appendChild(h2);
    container.appendChild(h2Two);
    container.appendChild(h2Three);

    return container;
}

export {
    fillContact,
}