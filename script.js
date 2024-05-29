const divContainer = document.querySelector("div.container");

function createGrid(n = 16) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const divSquare = document.createElement("div");
            divSquare.style.width = "100px";
            divSquare.style.height = "100px";
            divSquare.style.border = "1px solid black";
            divContainer.append(divSquare);
        }
    }
}

createGrid();