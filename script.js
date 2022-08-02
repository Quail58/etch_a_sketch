
const grid = document.getElementById("grid");

const reset = document.getElementsByClassName("reset");

let pencilColor = "black";

// makes the grid for etch a sketch
function makeGrid(rows, cols){       
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        // event listener to see if the mouse is over and change the color of the box        
        cell.addEventListener('mouseover', function changeBlack() {cell.style.backgroundColor = pencilColor;});
        grid.appendChild(cell).className = "gridItem";
    }  
}



// clears the grid and then resets it to original value
function clearGrid() {
  while(grid.firstChild){
    grid.removeChild(grid.lastChild);
  }
  makeGrid(slider.value,slider.value);
}

// function that cycles through a random color
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
}
// randomize pencil color



// displays the value of the slider on screen
var slider = document.getElementById("myRange");
var output = document.getElementById("range");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

//runs the grid when the website loads, at the value of what the slider is set to by default
console.log(makeGrid(slider.value,slider.value));