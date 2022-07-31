
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

var slider = document.getElementById("myRange");
var output = document.getElementById("range");
output.innerHTML = slider.value;


slider.oninput = function() {
  output.innerHTML = this.value;
}

console.log(makeGrid(slider.value,slider.value))