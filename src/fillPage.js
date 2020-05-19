function fillPage() {
    let elementList = [];
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.textContent = "The Groove";
    h1.style.padding = "50px";
    h1.style.fontSize = "45px";
    h1.style.marginTop = "0px";
    p.textContent = "At The Groove, you'll find the best tasting fictional food on the market. With 100% fresh fake food, and world class lying, The Groove is sure not to disappoint. Why? Well because The Groove isn't a real place."
    p.style.fontSize = "25px";
    p.style.padding = "20px";
    p.style.marginTop = "100px";
    p.style.fontWeight = "bold";
    elementList.push(h1);
    elementList.push(p);
    return elementList;
}

export {
    fillPage,
}
