import {makeContainer} from './container';
import {makeTabList} from './tabs';

function fillHome() {
    const h1 = document.createElement('h1');

    h1.textContent = "The Groove";
    h1.style.fontSize = "50px";
    h1.style.width = "50%";
    h1.style.margin = "auto";
    h1.style.paddingTop = "200px";
    h1.style.textAlign = "center";

    const p = document.createElement('p');
    p.textContent = "At The Groove, you'll find the best tasting fictional food on the market. With 100% fresh fake food, and world class lying, The Groove is sure not to disappoint. Why? Well because The Groove isn't a real place."
    p.style.fontSize = "25px";
    p.style.padding = "70px";
    p.style.marginTop = "100px";
    p.style.fontWeight = "bold";
    

    const container = makeContainer();
    const ul = makeTabList();
    container.appendChild(ul);
    container.appendChild(h1);
    container.appendChild(p);

    return container;
}

export {
    fillHome,
}
