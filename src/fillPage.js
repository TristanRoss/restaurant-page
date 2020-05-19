function fillPage() {
    let elementList = [];
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');
    h1.textContent = "The Groove";
    img.src = "../food.jpg";
    img.alt = "Food on a table";
    p.textContent = "At The Groove, you'll find the best tasting fictional food on the market. With 100% fresh fake food, and world class lying, The Groove is sure not to disappoint. Why? Well because The Groove isn't a real place."
    elementList.push(h1);
    elementList.push(img);
    elementList.push(p);
    return elementList;
}

export {
    fillPage,
}
