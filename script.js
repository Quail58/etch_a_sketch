// const gridBox = document.createElement('div');
// gridBox.setAttribute('id','gridBox');
// const grid = document.getElementById('grid');
// grid.appendChild(gridBox);

const grid = document.getElementById("grid");

function makeGrid(rows, cols){
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        grid.appendChild(cell).className = "grid-item";
    }
}

console.log(makeGrid(16,16));