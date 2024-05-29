const divContainer = document.querySelector("div.container");
const buttonGridSize = document.querySelector("button");
const GRID_SIZE = 1600;

function createGrid(n = 16) {
    for (let i = 0; i < n; i++) {
        const divRow = document.createElement("div");
        for (let j = 0; j < n; j++) {
            const divSquare = document.createElement("div");
            divSquare.style.width = divSquare.style.height = 
                `${GRID_SIZE / n}px`;
            divSquare.classList.add("col");
            divRow.append(divSquare);
        }
        divContainer.append(divRow);
    }
}

function changeGrid() {
    let input = +prompt("Enter the new grid size (nxn)");
    while (input > 100 || input < 0 || Number.isNaN(input)) {
        input = +prompt("Please enter a valid grid size less than 100");
    }
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.lastChild);
    }
    createGrid(input);
}

function randomRGB() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

divContainer.addEventListener('mouseover', (event) => {
    if ([...event.target.classList].includes("col")) {
        event.target.style.backgroundColor = randomRGB();
    } 
});

buttonGridSize.addEventListener('click', changeGrid);

createGrid();