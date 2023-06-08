import React, { useEffect } from 'react';
import { FaBomb, FaFlag } from 'react-icons/fa';
import { CellContainer } from './CellStyles';
import { handleCellClick } from '../../functions/CellClick';
import { handleRightClick } from '../../functions/RightClick';

const Cell = ({ item, setGrid, grid, gameOver, handleGameOver, handleMineClicked, setMineCount, checkArr, setCheckArr, difficulty, setMinesRemaining }) => {

  useEffect(() => {
    if (gameOver === true) {
      const cellDetails = document.getElementById([item.x, item.y]);
      cellDetails.classList.remove("number")
      cellDetails.classList.remove("mine")
      cellDetails.classList.remove("empty")
      cellDetails.classList.remove("marked")
      
      handleGameOver(false);
    }
  }, [gameOver])


  return (
    <CellContainer 
    onContextMenu={(e) => handleRightClick(e, item.x, item.y, grid, setGrid, item, setMineCount, setMinesRemaining)}
    id={[item.x, item.y]}
    onClick={(e) => handleCellClick(e, item.x, item.y, grid, setGrid, item, handleMineClicked, setMineCount, setCheckArr, checkArr)}
    item={item}
    difficulty={difficulty}
    >
      {item.isMarked ? <FaFlag /> : 
      item.isClicked && item.value === "X" ? <FaBomb /> :
      item.value}
    </CellContainer>
  )
}

export default Cell