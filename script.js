const container = document.querySelector("#container");

// random color generator for hover
function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let  color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(gridSize) {
    container.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for ( let j = 0; j < gridSize; j++) {
            const div = document.createElement("div");
            div.classList.add("column");
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}
createGrid(16);

// hover code for each column
