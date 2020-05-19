// import {makeContainer} from './container';

function makeTabList() {
    const ul = document.createElement('ul');
    ul.style.listStyleType = "none";
    ul.style.margin = "0px";
    ul.style.padding = "20px";
    ul.style.float = "right";

    const homeLi = document.createElement('li');
    homeLi.style.display = "inline";
    const home = document.createElement('button');
    home.id = "home";
    home.textContent = "Home";
    home.style.display = "inline";
    home.style.margin = "10px";
    home.style.padding = "5px";
    home.style.fontSize = "17px";
    home.style.color = "white";
    home.style.fontFamily = "'Roboto', sans-serif"
    home.style.border = "1px solid white";
    home.style.borderRadius = "1px";
    home.style.backgroundColor = "#1c1c1c";
    home.addEventListener('mouseenter', () => {
        home.style.backgroundColor = "black";
    });
    home.addEventListener('mouseleave', () => {
        home.style.backgroundColor = "#1c1c1c";
    });
    homeLi.appendChild(home);

    const contactLi = document.createElement('li');
    contactLi.style.display = "inline";
    const contact = document.createElement('button');
    contact.id = "contact";
    contact.textContent = "Contact";
    contact.style.margin = "10px";
    contact.style.padding = "5px";
    contact.style.fontSize = "17px";
    contact.style.color = "white";
    contact.style.fontFamily = "'Roboto', sans-serif"
    contact.style.border = "1px solid white";
    contact.style.borderRadius = "1px";
    contact.style.backgroundColor = "#1c1c1c";
    contact.addEventListener('mouseenter', () => {
        contact.style.backgroundColor = "black";
    });
    contact.addEventListener('mouseleave', () => {
        contact.style.backgroundColor = "#1c1c1c";
    });
    contactLi.appendChild(contact);

    const menuLi = document.createElement('li');
    menuLi.style.display = "inline";
    const menu = document.createElement('button');
    menu.id = "menu";
    menu.textContent = "Menu";
    menu.style.display = "inline";
    menu.style.margin = "10px";
    menu.style.padding = "5px";
    menu.style.fontSize = "17px";
    menu.style.color = "white";
    menu.style.fontFamily = "'Roboto', sans-serif"
    menu.style.border = "1px solid white";
    menu.style.borderRadius = "1px";
    menu.style.backgroundColor = "#1c1c1c";
    menu.addEventListener('mouseenter', () => {
        menu.style.backgroundColor = "black";
    });
    menu.addEventListener('mouseleave', () => {
        menu.style.backgroundColor = "#1c1c1c";
    });
    menuLi.appendChild(menu);

    ul.appendChild(homeLi);
    ul.appendChild(contactLi);
    ul.appendChild(menuLi);

    return ul;
}

export {
    makeTabList,
}