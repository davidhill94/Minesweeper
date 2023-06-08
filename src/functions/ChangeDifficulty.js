export const beginnerDifficulty = (setHeight, setWidth, setMines, setMineCount, setMinesRemaining, setDifficulty) => {
    setHeight(prevState => prevState = 9)
    setWidth(prevState => prevState = 9)
    setMines(prevState => prevState = 10)
    setMineCount(prevState => prevState = 10)
    setMinesRemaining(prevState => prevState = 10)
    setDifficulty("beginner");
  }

export const intermediateDifficulty = (setHeight, setWidth, setMines, setMineCount, setMinesRemaining, setDifficulty) => {
    setHeight(prevState => prevState = 16)
    setWidth(prevState => prevState = 16)
    setMines(prevState => prevState = 40)
    setMineCount(prevState => prevState = 40)
    setMinesRemaining(prevState => prevState = 40)
    setDifficulty("intermediate");
  }
export const hardDifficulty = (setHeight, setWidth, setMines, setMineCount, setMinesRemaining, setDifficulty) => {
    setHeight(prevState => prevState = 21)
    setWidth(prevState => prevState = 21)
    setMines(prevState => prevState = 99)
    setMineCount(prevState => prevState = 99)
    setMinesRemaining(prevState => prevState = 99)
    setDifficulty("hard")
  }