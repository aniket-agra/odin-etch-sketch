let numSquares = 64;

// canvas properties must stay fixed regardless of button actions
const canvas = document.querySelector('.grid');

//create the default canvas first
for (let i = 0; i < numSquares; i++) {
    let canvasRow = document.createElement('div');
    canvasRow.style.cssText = "flex: 1 1 auto; display: flex;";
    canvasRow.classList.add("row");
    canvas.appendChild(canvasRow);
    for (let j = 0; j < numSquares; j++) {
        let canvasCol = document.createElement('div');
        canvasCol.style.cssText = "flex: 1 1 auto;";
        canvasRow.append(canvasCol);
        canvasCol.addEventListener('mouseover', function (e) {
            canvasCol.style.backgroundColor = "black";
        });
    }
}

// stuff should happen after button is clicked too
const resButton = document.querySelector("button");
resButton.addEventListener('click', function (e) {
    let userInput = parseInt(prompt("Enter number of squares on one side of grid:", 64));
    // console.log(userInput !== null);
    if (userInput > 100) {
        alert("Please enter a number lesser than 100!");
        return;
    }
    if (!isNaN(userInput))    numSquares = parseInt(userInput);
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => canvas.removeChild(row));
    console.log(numSquares);
    for (let i = 0; i < numSquares; i++) {
        let canvasRow = document.createElement('div');
        canvasRow.style.cssText = "flex: 1 1 auto; display: flex;";
        canvasRow.classList.add("row");
        canvas.appendChild(canvasRow);
        for (let j = 0; j < numSquares; j++) {
            let canvasCol = document.createElement('div');
            canvasCol.style.cssText = "flex: 1 1 auto;";
            canvasRow.append(canvasCol);
            canvasCol.addEventListener('mouseover', function (e) {
                canvasCol.style.backgroundColor = "black";
            });
        }
    }
});

