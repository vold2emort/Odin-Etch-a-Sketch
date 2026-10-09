const container = document.querySelector("#container");
let no_of_squares = 16;
const reset_btn = document.querySelector("#reset");


const no_of_squares_btn = document.querySelector("#user-ask");

no_of_squares_btn.addEventListener("click", () => {
  let input = prompt("Enter the number of squares in a row");

  if (input === null || input.trim() === "") return;

  const num = Number(input);

  if (!Number.isInteger(num)) {
    alert("Enter a valid Integer.");
    return;
  }

  if (num > 100) {
    num = 100;
  } else if (num < 1) {
    num = 2;
  }

  createGrid(num);
});

// random color generator for hover
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

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

    for (let j = 0; j < gridSize; j++) {
      const div = document.createElement("div");
      div.classList.add("column");
      div.dataset.counter = 0;
      row.appendChild(div);
    }
    container.appendChild(row);
  }
}
createGrid(no_of_squares);

// hover code for each column
container.addEventListener("mouseover", (event) => {
  const column = event.target.closest(".column");

  if (column && container.contains(column)) {
    column.style.backgroundColor = getRandomColor();
    let counter = parseInt(column.dataset.counter);
    counter < 10 ? (column.dataset.counter = counter + 1) : null;
    column.style.opacity = counter / 10;
  }
});

reset_btn.addEventListener("click", () => {
    createGrid(16);
})