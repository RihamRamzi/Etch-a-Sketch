const container = document.querySelector(".container");

function createGrid(num1) {
  const grid = num1 * num1;
  for (i = 1; i < grid + 1; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("gridBox");
    container.appendChild(gridBox);
  }
}

createGrid(10);
