const container = document.querySelector(".container");

function createGrid(num1) {
  const grid = num1 * num1;
  const gridBoxSize = 100 / num1 + "%";
  let isDragging = false;

  for (i = 1; i < grid + 1; i++) {
    const gridBox = document.createElement("div");

    gridBox.classList.add("gridBox");
    gridBox.addEventListener("mousedown", () => {
      isDragging = true;
      gridBox.classList.add("locked");
    });
    gridBox.addEventListener("mousemove", () => {
      if (isDragging) {
        gridBox.classList.add("locked");
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

createGrid(16);
