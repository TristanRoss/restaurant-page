function makeContainer() {
    const container = document.createElement('div');
    container.style.backgroundImage = "url('../food.jpg')";
    container.style.backgroundSize = "cover";
    container.style.backgroundRepeat = "no-repeat";
    container.style.height = "1000px";
    container.style.color = "white";
    container.style.textShadow = "1px 1px 5px black";
    container.style.textAlign = "center";

    return container;
}

export {
    makeContainer,
}