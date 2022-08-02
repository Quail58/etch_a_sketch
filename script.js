
const grid = document.getElementById("grid");

// makes the grid for etch a sketch
function makeGrid(rows, cols){       
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', function changeBlack() {cell.style.backgroundColor = 'black';});
        grid.appendChild(cell).className = "grid-item";
    }  
}

// displays the value of the slider on screen
var slider = document.getElementById("myRange");
var output = document.getElementById("range");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

//runs the grid when the website loads, at the value of what the slider is set to by default
console.log(makeGrid(slider.value,slider.value))