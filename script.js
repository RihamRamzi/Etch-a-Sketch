const container = document.querySelector(".container");

function createGrid(num1) {
  const grid = num1 * num1;
  const gridBoxSize = 100 / num1 + "%";

  for (i = 1; i < grid + 1; i++) {
    gridBox = document.createElement("div");

    gridBox.classList.add("gridBox");
    (function (gridBox) {
      gridBox.addEventListener("mousemove", () => {
        gridBox.classList.add("locked");
      });
    })(gridBox);
    gridBox.style.width = gridBoxSize;
    gridBox.style.height = gridBoxSize;

    container.appendChild(gridBox);
  }
}

createGrid(16);
