import React from 'react'
import { GameOverModal, GameOverText, ResetBtn } from './GameOverStyles'

const GameOver = ({ mineClicked, handleReset, minesRemaining, mineCount }) => {
  return (
    mineClicked ?
    <GameOverModal>
        <GameOverText>Game Over - You Lost!</GameOverText>
        <ResetBtn onClick={handleReset}>Reset</ResetBtn>
      </GameOverModal>
      :
    minesRemaining === 0 && mineCount === 0 ?
    <GameOverModal>
        <GameOverText>You Won!</GameOverText>
        <ResetBtn onClick={handleReset}>Reset</ResetBtn>
    </GameOverModal>
    :
    <></>
  )
}

export default GameOver