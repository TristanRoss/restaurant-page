import {makeContainer} from './container';

function fillPage() {
    const h1 = document.createElement('h1');
    h1.textContent = "The Groove";
    h1.style.padding = "50px";
    h1.style.fontSize = "45px";
    h1.style.marginTop = "0px";

    const p = document.createElement('p');
    p.textContent = "At The Groove, you'll find the best tasting fictional food on the market. With 100% fresh fake food, and world class lying, The Groove is sure not to disappoint. Why? Well because The Groove isn't a real place."
    p.style.fontSize = "25px";
    p.style.padding = "20px";
    p.style.marginTop = "100px";
    p.style.fontWeight = "bold";
    

    const container = makeContainer();
    container.appendChild(h1);
    container.appendChild(p);

    return container;
}

export {
    fillPage,
}
