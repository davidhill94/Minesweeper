//Sets all cells to isClicked and sets relevant styling class
export const handleAll = (grid) => {
    let newGrid = JSON.parse(JSON.stringify(grid));
    for (let i = 0; i < newGrid.length; i++) {
        for (let j = 0; j < newGrid[i].length; j++) {
            if (newGrid[i][j].value === "X") {
                const cellDetails = document.getElementById([newGrid[i][j].x, newGrid[i][j].y]);
                cellDetails.classList.add("mine")
                cellDetails.classList.remove("marked")
                newGrid[i][j].isClicked = true;
                newGrid[i][j].isMarked = false;
            } else if (newGrid[i][j].value === 0) {
                const cellDetails = document.getElementById([newGrid[i][j].x, newGrid[i][j].y]);
                cellDetails.classList.add("empty")
                cellDetails.classList.remove("marked")
                newGrid[i][j].isClicked = true;
            } else {
                const cellDetails = document.getElementById([newGrid[i][j].x, newGrid[i][j].y]);
                cellDetails.classList.add("number")
                cellDetails.classList.remove("marked")
                newGrid[i][j].isClicked = true;
            }
        }
    }
}