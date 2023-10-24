function createColumn(size) {
  for (let i = 0; i < size; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("column");
    // newDiv.style.width = 600 / size + "px";
    document.getElementById("grid_container").appendChild(newDiv);
    createRow(size, i);
  }
}

function createRow(size, i) {
  for (let j = 0; j < size; j++) {
    let newRow = document.createElement("div");
    newRow.textContent = `${i + 1}x${j + 1}`;
    newRow.classList.add("cell-row");
    newRow.setAttribute("id", `cell-${i}x${j}`);
    // newRow.style.height = 600 / size + "px";
    let columns = document.querySelectorAll(".column");
    columns[i].appendChild(newRow);
  }
}

createColumn(16);
