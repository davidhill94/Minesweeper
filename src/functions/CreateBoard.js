//Creates board
export const createBoard = (width, height, board, setGrid, handleGameOver) => {
    for (let x = 0; x < height; x++) {
        let subBoard = [];
        for (let y = 0; y < width; y++) {
          subBoard.push({
            value: 0,
            isClicked: false,
            isMarked: false,
            x: x,
            y: y
          });
        }
        board.push(subBoard);
        setGrid(board);
      }
}