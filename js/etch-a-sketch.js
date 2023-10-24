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

let colorCount = 1;

function changeColor(obj) {
  switch (colorCount) {
    case 1:
      obj.style.backgroundColor = "#676769";
      colorCount++;
      break;
    case 2:
      obj.style.backgroundColor = "#505054";
      colorCount++;
      break;
    case 3:
      obj.style.backgroundColor = "#404041";
      colorCount++;
      break;
    case 4:
      obj.style.backgroundColor = "#303032";
      colorCount++;
      break;
    case 5:
      obj.style.backgroundColor = "#313135";
      colorCount++;
      break;
    case 6:
      obj.style.backgroundColor = "#202023";
      colorCount++;
      break;
    case 7:
      obj.style.backgroundColor = "#1d1d20";
      colorCount++;
      break;
    case 8:
      obj.style.backgroundColor = "#19191a";
      colorCount++;
      break;
    case 9:
      obj.style.backgroundColor = "#0c0c0d";
      colorCount++;
      break;
    case 10:
      obj.style.backgroundColor = "black";
      colorCount = 1;
      break;
  }
}

function clearDivs() {
  colorCount = 1;
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
  colorCount = 1;
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
}

createColumn(16);
