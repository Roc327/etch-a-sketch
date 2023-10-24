function createColumn(size) {
  for (let i = 0; i < size; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("column");
    document.getElementById("grid_container").appendChild(newDiv);
    createRow(size, i);
  }
}

function createRow(size, i) {
  for (let j = 0; j < size; j++) {
    let newRow = document.createElement("div");
    // newRow.textContent = `${i + 1}x${j + 1}`;
    newRow.classList.add("cell-row");
    newRow.setAttribute("id", `cell-${i}x${j}`);
    newRow.setAttribute("onmouseover", "changeColor(this)");
    let columns = document.querySelectorAll(".column");
    columns[i].appendChild(newRow);
  }
}

function changeColor(obj) {
  obj.style.backgroundColor = "black";
}

function clearDivs() {
  const colElement = document.querySelectorAll(".column");
  const rowElement = document.querySelectorAll("cell-row");
  for (const element of rowElement) {
    element.remove();
  }
  for (const element of colElement) {
    element.remove();
  }
}

function clearClick() {
  let cells = document.querySelectorAll(".cell-row");
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "#e5e7eb";
  }
}

function handleSquaresButton() {
  clearDivs();
  let squares = prompt("How many squares in each row and column: ");
  if (squares > 100) {
    squares = prompt("Must be 100 or less, please renter an amount: ");
  }
  createColumn(squares);
  //setHeight();
}

createColumn(16);
