
const grid = document.getElementById("grid");

const reset = document.getElementsByClassName("reset");

let pencilColor = "black";

// makes the grid for etch a sketch
function makeGrid(rows, cols){       
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        cell.style.backgroundColor = "white";
        // event listener to see if the mouse is over and change the color of the box        
        cell.addEventListener('mouseover', function changeBlack() {cell.style.backgroundColor = pencilColor;});
        grid.appendChild(cell).className = "gridItem";
    }  
}



clears the grid
function clearGrid() {
  while(grid.firstChild){
    grid.removeChild(grid.lastChild);
  }
  makeGrid(slider.value,slider.value);
}


// displays the value of the slider on screen
var slider = document.getElementById("myRange");
var output = document.getElementById("range");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

//runs the grid when the website loads, at the value of what the slider is set to by default
console.log(makeGrid(slider.value,slider.value));