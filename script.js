const container = document.querySelector(".container");
const gridChoiceBtn = document.querySelector(".btn");

function createGrid(num1) {
  const grid = num1 * num1;
  const gridBoxSize = 100 / num1 + "%";
  let isDragging = false;

  for (i = 1; i < grid + 1; i++) {
    const gridBox = document.createElement("div");

    gridBox.classList.add("gridBox");
    gridBox.addEventListener("mousedown", () => {
      isDragging = true;
      gridBox.style.background = "black";
    });
    gridBox.addEventListener("mousemove", () => {
      if (isDragging) {
        gridBox.style.background = "black";
      }
    });
    gridBox.addEventListener("mouseup", () => {
      isDragging = false;
    });
    gridBox.style.width = gridBoxSize;
    gridBox.style.height = gridBoxSize;

    container.appendChild(gridBox);
  }
}

function getGridSize() {
  const gridSize = prompt(`choose grid size between 1-100 `);
  if (gridSize > 0 && gridSize <= 100) {
    container.textContent = "";
    return gridSize;
  } else {
    alert(`Please choose between 1-100`);
  }
}

gridChoiceBtn.addEventListener("click", () => {
  createGrid(getGridSize());
});

createGrid(16);
