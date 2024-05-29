const divContainer = document.querySelector("div.container");

function createGrid(n = 16) {
    for (let i = 0; i < n; i++) {
        const divRow = document.createElement("div");
        for (let j = 0; j < n; j++) {
            const divSquare = document.createElement("div");
            divSquare.classList.add("col");
            divSquare.id = `${i}-${j}`
            divRow.append(divSquare);
        }
        divContainer.append(divRow);
    }
}

function randomRGB() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

createGrid();

divContainer.addEventListener('mouseover', (event) => {
    if ([...event.target.classList].includes("col")) {
        event.target.style.backgroundColor = randomRGB();
    } 
})