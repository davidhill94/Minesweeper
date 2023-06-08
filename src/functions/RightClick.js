import { addMineCount, minusMineCount } from '../functions/HandleMineCount';

export const handleRightClick=(e, w, h, grid, setGrid, item, setMineCount, setMinesRemaining)=>{
    e.preventDefault();
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (!newGrid[w][h].isClicked && !newGrid[w][h].isMarked) {
      newGrid[w][h].isMarked = true
      const cellDetails = document.getElementById([item.x, item.y]);
      cellDetails.classList.add("marked")
      minusMineCount(setMineCount)
      if(newGrid[w][h].value === "X") {
        setMinesRemaining(prevState => prevState - 1);
      }
    } else if (!newGrid[w][h].isClicked && newGrid[w][h].isMarked) {
        newGrid[w][h].isMarked = false
      const cellDetails = document.getElementById([item.x, item.y]);
      cellDetails.classList.remove("marked")
      addMineCount(setMineCount)
    }
    setGrid(newGrid);
    console.log(newGrid[w][h]);
}