let numSquares = 64;
const resButton = document.querySelector("button");
resButton.addEventListener('click', function (e) {
    let userInput = parseInt(prompt("Enter number of squares on one side of grid:", 64));
    // console.log(userInput !== null);
    if (!isNaN(userInput))    numSquares = parseInt(userInput);
    console.log(numSquares);
});


const grid = document.querySelector('.grid');
// grid must be a square canvas to add div "squares"
grid.style.cssText = "display: flex; flex-direction: column; width: 600px; height: 600px;";

for (let i = 0; i < numSquares; i++) {
    let gridDivRow = document.createElement('div');
    gridDivRow.style.cssText = "flex: 1 1 auto; display: flex;";
    grid.appendChild(gridDivRow);
    for (let j = 0; j < numSquares; j++) {
        let gridDivCol = document.createElement('div');
        gridDivCol.style.cssText = "flex: 1 1 auto;";
        gridDivRow.append(gridDivCol);
        // gridDivCol.addEventListener('mouseover', function (e) {
        //     gridDivCol.style.backgroundColor = "black";
        // });
    }
}