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

createGrid();

divContainer.addEventListener('mouseover', (event) => {
    if ([...event.target.classList].includes("col")) {
        event.target.classList.toggle("hover");
    } 
})