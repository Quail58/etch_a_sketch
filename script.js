
const grid = document.getElementById("grid");

function makeGrid(rows, cols){       
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', function changeBlack() {cell.style.backgroundColor = 'black';});
        grid.appendChild(cell).className = "grid-item";
    }  
}

console.log(makeGrid(16,16))