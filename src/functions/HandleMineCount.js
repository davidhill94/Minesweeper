export const addMineCount = (setMineCount) => {
  setMineCount(prevState => prevState + 1)
}
export const minusMineCount = (setMineCount) => {
  setMineCount(prevState => prevState - 1)
}