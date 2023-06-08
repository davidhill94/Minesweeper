//Randomizes Mine Locations
export const randomizeMines = (width, height, mines, board, mineLocation) => {
    let mineCount = 0;
      while(mineCount < mines){
        let x = Math.floor(Math.random() * (width));
        let y = Math.floor(Math.random() * (height));
        console.log(x, y)
        //Placing mines on grid & updating mineLocation array
        if(board[x][y].value === 0) {
          board[x][y].value = "X"
          mineLocation.push([x, y])
          mineCount++
        }
        console.log(`mineLocation: ${mineLocation}`)
      }
}