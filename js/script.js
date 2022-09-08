const grid = document.querySelector('.grid');
// grid must be a square canvas to add div "squares"
grid.style.cssText = "display: flex; flex-direction: column; width: 600px; height: 600px;";

for (let i = 0; i < 10; i++) {
    let gridDivRow = document.createElement('div');
    gridDivRow.style.cssText = "flex: 1 1 auto; display: flex;";
    grid.appendChild(gridDivRow);
    for (let j = 0; j < 10; j++) {
        let gridDivCol = document.createElement('div');
        gridDivCol.style.cssText = "flex: 1 1 auto;";
        gridDivRow.append(gridDivCol);
        gridDivCol.addEventListener('mouseover', function (e) {
            gridDivCol.style.backgroundColor = "black";
        });
    }
}