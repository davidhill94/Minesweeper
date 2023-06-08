import { addMineCount } from '../functions/HandleMineCount';
import { emptyClick } from './EmptyClick';

export const handleCellClick = (e, w, h, grid, setGrid, item, handleMineClicked, setMineCount, setCheckArr, checkArr) => {
  let newGrid = JSON.parse(JSON.stringify(grid));
  if (newGrid[w][h].isMarked) {
    const cellDetails = document.getElementById([item.x, item.y]);
    newGrid[w][h].isMarked = false;
    cellDetails.classList.remove("marked");
    addMineCount(setMineCount)
  }
  if (newGrid[w][h].value === "X") {
    newGrid[w][h].isClicked = true
    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid.length; j++) {
        if (newGrid[i][j].value === "X") {
          newGrid[i][j].isClicked = true;
          newGrid[i][j].isMarked = false;
          const cellDetails = document.getElementById([newGrid[i][j].x, newGrid[i][j].y]);
          cellDetails.classList.add("mine")
          cellDetails.classList.remove("marked")
        }
      }
    }
    handleMineClicked(true);

  } else if (newGrid[w][h].value > 0) {
    newGrid[w][h].isClicked = true
    const cellDetails = document.getElementById([item.x, item.y]);
    cellDetails.classList.add("number")
  } else if (newGrid[w][h].value === 0) {
    newGrid[w][h].isClicked = true
    const cellDetails = document.getElementById([item.x, item.y]);
    cellDetails.classList.add("empty")
  }
  setGrid(newGrid)
  emptyClick(newGrid, w, h, item, setCheckArr, checkArr)
}
