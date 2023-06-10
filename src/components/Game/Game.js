import React, { useState } from 'react'
import Board from '../Board/Board'
import MineCount from '../MineCount/MineCount';
import { beginnerDifficulty, hardDifficulty, intermediateDifficulty } from '../../functions/ChangeDifficulty';
import { GameContainer } from './GameStyles';
import Settings from '../Settings/Settings';
import Logo from '../Logo/Logo';
import InstructionsModal from '../Instructions/InstructionsModal';

const Game = () => {

    const [height, setHeight] = useState(9);
    const [width, setWidth] = useState(9);
    const [mines, setMines] = useState(10);
    const [mineCount, setMineCount] = useState(10)
    const [gameOver, setGameOver] = useState(false);
    const [mineClicked, setMineClicked] = useState(false);
    const [difficulty, setDifficulty] = useState("beginner");
    const [minesRemaining, setMinesRemaining] = useState(10);
    const [instructionsModal, setInstructionsModal] = useState(false);
    const [toggle, setToggle] = useState(false);
 
const handleGameOver = (bool) => {
  setGameOver(bool);
}

const handleMineClicked = (bool) => {
  setMineClicked(bool)
}

  return (
    <GameContainer>
      <Logo />
    <Board 
    height={height} 
    width={width} 
    mines={mines}
    gameOver={gameOver} 
    handleGameOver={handleGameOver}
    mineClicked={mineClicked}
    handleMineClicked={handleMineClicked}
    mineCount={mineCount}
    setMineCount={setMineCount}
    difficulty={difficulty}
    setMinesRemaining={setMinesRemaining}
    minesRemaining={minesRemaining}
    toggle={toggle}
    />
    <MineCount 
    mineCount={mineCount}
    setInstructionsModal={setInstructionsModal}
    instructionsModal={instructionsModal}
    toggle={toggle}
    setToggle={setToggle}
    />
    <Settings 
    setHeight={setHeight}
    setWidth={setWidth}
    setMines={setMines}
    setMineCount={setMineCount}
    setMinesRemaining={setMinesRemaining}
    beginnerDifficulty={beginnerDifficulty}
    intermediateDifficulty={intermediateDifficulty}
    hardDifficulty={hardDifficulty}
    setDifficulty={setDifficulty}
    mineClicked={mineClicked}
    />
    <InstructionsModal 
    instructionsModal={instructionsModal} 
    setInstructionsModal={setInstructionsModal}
    />
    </GameContainer>
  )
}

export default Game