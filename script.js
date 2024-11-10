const container = document.querySelector(".container");
const gridChoiceBtn = document.querySelector(".btn");

function createGrid(num1) {
  const grid = num1 * num1;
  const gridBoxSize = 100 / num1 + "%";
  let isDragging = false;

  for (i = 1; i < grid + 1; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("gridBox");
    let opacityValue = 0.1;

    gridBox.addEventListener("mousedown", () => {
      isDragging = true;
      opacityValue += 0.1;
      gridBox.style.background = `rgba(0, 0, 0, ${opacityValue})`;
    });

    gridBox.addEventListener("mousemove", () => {
      if (isDragging) {
        opacityValue += 0.1;
        gridBox.style.background = `rgba(0, 0, 0, ${opacityValue})`;
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

function randomColor(opacity) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

gridChoiceBtn.addEventListener("click", () => {
  createGrid(getGridSize());
});

createGrid(16);

console.log(randomColor(0.1));
