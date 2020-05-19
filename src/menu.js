import {makeContainer} from './container';
import {makeTabList} from './tabs';

function fillMenu() {
    const empty = document.createElement('h1');
    empty.style.padding = "75px";
    empty.style.margin = "0";

    const wrapper = document.createElement('div');
    wrapper.style.width = "65%";
    wrapper.style.margin = "auto";
    wrapper.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    wrapper.style.height = "600px";

    const taco = document.createElement('h1');
    taco.textContent = "Chicken Tacos";
    taco.style.margin = "0";
    taco.style.paddingTop = "20px";
    wrapper.appendChild(taco);

    const tacoDescription = document.createElement('p');
    tacoDescription.textContent = "Delicious fake tacos filled with chicken, fresh lettuce, salsa, mustard, and macaroni and cheese.";
    tacoDescription.style.margin = "auto";
    tacoDescription.style.width = "75%";
    tacoDescription.style.fontStyle = "italic";
    wrapper.appendChild(tacoDescription);

    const tacoPrice = document.createElement('p');
    tacoPrice.textContent = "$12.95";
    tacoPrice.style.margin = "0";
    tacoPrice.style.padding = "0";
    wrapper.appendChild(tacoPrice);

    const burrito = document.createElement('h1');
    burrito.textContent = "Big Boi Burritos";
    burrito.style.margin = "0";
    burrito.style.paddingTop = "20px";
    wrapper.appendChild(burrito);

    const burritoDescription = document.createElement('p');
    burritoDescription.textContent = "You think you know burritos? Think again. Chow down on these bad bois and question your immortality. Pork. Lettuce. Cheese. Rice. Beans. You know the deal.";
    burritoDescription.style.margin = "auto";
    burritoDescription.style.width = "75%";
    burritoDescription.style.fontStyle = "italic";
    wrapper.appendChild(burritoDescription);

    const burritoPrice = document.createElement('p');
    burritoPrice.textContent = "$14.95";
    burritoPrice.style.margin = "0";
    burritoPrice.style.padding = "0";
    wrapper.appendChild(burritoPrice);

    const alfredo = document.createElement('h1');
    alfredo.textContent = "Chicken Alfredo";
    alfredo.style.margin = "0";
    alfredo.style.paddingTop = "20px";
    wrapper.appendChild(alfredo);

    const alfredoDescription = document.createElement('p');
    alfredoDescription.textContent = 'You might be thinking "Why is there chicken alfredo at my favorite Mexican restaurant?" Don\'t think. Just enjoy the epicness that is our chicken alfredo with fettuccine, oregano, and hot sauce.';
    alfredoDescription.style.margin = "auto";
    alfredoDescription.style.width = "75%";
    alfredoDescription.style.fontStyle = "italic";
    wrapper.appendChild(alfredoDescription);

    const alfredoPrice = document.createElement('p');
    alfredoPrice.textContent = "$14.95";
    alfredoPrice.style.margin = "0";
    alfredoPrice.style.padding = "0";
    wrapper.appendChild(alfredoPrice);

    const smallMenu = document.createElement('p');
    smallMenu.textContent = "It's a small menu deal with it."
    smallMenu.style.paddingTop = "30px";
    wrapper.appendChild(smallMenu);

    const container = makeContainer();
    const ul = makeTabList();
    container.appendChild(ul);
    container.append(empty);
    container.append(wrapper);

    return container;
}

export {
    fillMenu,
}