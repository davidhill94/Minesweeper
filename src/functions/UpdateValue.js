//Updates cell value if surrounding cells are a mine
export const updateValue = (width, height, board) => {
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            //checking to see if cell is not a mine
            if (board[h][w].value >= 0) {
                //checking top
                if (h > 0 && board[h - 1][w].value === "X") {
                    board[h][w].value++
                }
                //checking top right
                if (h > 0 &&
                    w < width - 1 &&
                    board[h - 1][w + 1].value === "X") {
                    board[h][w].value++
                }
                //checking right
                if (w < width - 1 && board[h][w + 1].value === "X") {
                    board[h][w].value++
                }
                //checking bottom right
                if (h < height - 1 &&
                    w < width - 1 &&
                    board[h + 1][w + 1].value === "X") {
                    board[h][w].value++
                }
                //checking bottom
                if (h < height - 1 && board[h + 1][w].value === "X") {
                    board[h][w].value++
                }
                //checking bottom left
                if (h < height - 1 &&
                    w > 0 &&
                    board[h + 1][w - 1].value === "X") {
                    board[h][w].value++
                }
                //checking left
                if (w > 0 && board[h][w - 1].value === "X") {
                    board[h][w].value++
                }
                //checking top left
                if (h > 0 &&
                    w > 0 && 
                    board[h - 1][w - 1].value === "X") {
                    board[h][w].value++
                }
            }
        }
    }
}