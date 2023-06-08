export const emptyClick = (arr, w, h, item, setCheckArr, checkArr) => {

    let newArr = checkArr;
    let nw = w;
    let nh = h;

    //Checks if surrounding cells have been clicked and if not it changes surrounding cells to isClicked = true if value is not a mine, and pushes all cells with a value of 0 into a new array (newArr)
    if (item.value === 0) {
        //top
        if (arr[nw][nh].x > 0) {
            if (arr[nw - 1][nh].value === 0 && !arr[nw - 1][nh].isClicked) {
                newArr.push([arr[nw - 1][nh].x, arr[nw - 1][nh].y])
                arr[nw - 1][nh].isClicked = true
            } else if (arr[nw - 1][nh].value !== "X") {
                arr[nw - 1][nh].isClicked = true
            }
        }
        //top right
        if (arr[nw][nh].x > 0 && arr[nw][nh].y < arr[0].length - 1) {
            if (arr[nw - 1][nh + 1].value === 0 && !arr[nw - 1][nh + 1].isClicked) {
                newArr.push([arr[nw - 1][nh + 1].x, arr[nw - 1][nh + 1].y])
                arr[nw - 1][nh + 1].isClicked = true
            } else if (arr[nw - 1][nh + 1].value !== "X") {
                arr[nw - 1][nh + 1].isClicked = true
            }
        }
        //right
        if (arr[nw][nh].y < arr[0].length - 1) {
            if (arr[nw][nh + 1].value === 0 && !arr[nw][nh + 1].isClicked) {
                newArr.push([arr[nw][nh + 1].x, arr[nw][nh + 1].y])
                arr[nw][nh + 1].isClicked = true
            } else if (arr[nw][nh + 1].value !== "X") {
                arr[nw][nh + 1].isClicked = true
            }
        }
        //bottom right
        if (arr[nw][nh].x < arr.length - 1 && arr[nw][nh].y < arr[0].length - 1) {
            if (arr[nw + 1][nh + 1].value === 0 && !arr[nw + 1][nh + 1].isClicked) {
                newArr.push([arr[nw + 1][nh + 1].x, arr[nw + 1][nh + 1].y])
                arr[nw + 1][nh + 1].isClicked = true
            } else if (arr[nw + 1][nh + 1].value !== "X") {
                arr[nw + 1][nh + 1].isClicked = true
            }
        }
        //bottom
        if (arr[nw][nh].x < arr.length - 1) {
            if (arr[nw + 1][nh].value === 0 && !arr[nw + 1][nh].isClicked) {
                newArr.push([arr[nw + 1][nh].x, arr[nw + 1][nh].y])
                arr[nw + 1][nh].isClicked = true
            } else if (arr[nw + 1][nh].value !== "X") {
                arr[nw + 1][nh].isClicked = true
            }
        }
        //bottom left
        if (arr[nw][nh].x < arr.length - 1 && arr[nw][nh].y > 0) {
            if (arr[nw + 1][nh - 1].value === 0 && !arr[nw + 1][nh - 1].isClicked) {
                newArr.push([arr[nw + 1][nh - 1].x, arr[nw + 1][nh - 1].y])
                arr[nw + 1][nh - 1].isClicked = true
            } else if (arr[nw + 1][nh - 1].value !== "X") {
                arr[nw + 1][nh - 1].isClicked = true
            }
        }
        //left
        if (arr[nw][nh].y > 0) {
            if (arr[nw][nh - 1].value === 0 && !arr[nw][nh - 1].isClicked) {
                newArr.push([arr[nw][nh - 1].x, arr[nw][nh - 1].y])
                arr[nw][nh - 1].isClicked = true
            } else if (arr[nw][nh - 1].value !== "X") {
                arr[nw][nh - 1].isClicked = true
            }
        }
        //top left
        if (arr[nw][nh].x > 0 && arr[nw][nh].y > 0) {
            if (arr[nw - 1][nh - 1].value === 0 && !arr[nw - 1][nh - 1].isClicked) {
                newArr.push([arr[nw - 1][nh - 1].x, arr[nw - 1][nh - 1].y])
                arr[nw - 1][nh - 1].isClicked = true
            } else if (arr[nw - 1][nh - 1].value !== "X") {
                arr[nw - 1][nh - 1].isClicked = true
            }
        }

        //check to see which cells have isClicked = true, and adds a class relevant to the cell value
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr[j].length; k++) {
                if (arr[j][k].isClicked === true && arr[j][k].value === 0) {
                    const cellDetails = document.getElementById([arr[j][k].x, arr[j][k].y]);
                    cellDetails.classList.add("empty")
                }
                if (arr[j][k].isClicked === true && arr[j][k].value > 0) {
                    const cellDetails = document.getElementById([arr[j][k].x, arr[j][k].y]);
                    cellDetails.classList.add("number")
                }
            }
        }
    }

    //Loops through newArr (all of which have value of 0) to check surrounding cells and whether to push into newArr if surrounding cell value is 0.
    for(let i = 0; i < newArr.length; i++){
        nw = newArr[i][0];
        nh = newArr[i][1];
        //Checks surrounding cells to see if they meet condition to reveal or pass surrounding cells into the newArr array
        if (item.value === 0) {
            //top
            if (arr[nw][nh].x > 0) {
                if (arr[nw - 1][nh].value === 0 && !arr[nw - 1][nh].isClicked) {
                    newArr.push([arr[nw - 1][nh].x, arr[nw - 1][nh].y])
                    arr[nw - 1][nh].isClicked = true
                } else if (arr[nw - 1][nh].value !== "X") {
                    arr[nw - 1][nh].isClicked = true
                }
            }
            //top right
            if (arr[nw][nh].x > 0 && arr[nw][nh].y < arr[0].length - 1) {
                if (arr[nw - 1][nh + 1].value === 0 && !arr[nw - 1][nh + 1].isClicked) {
                    newArr.push([arr[nw - 1][nh + 1].x, arr[nw - 1][nh + 1].y])
                    arr[nw - 1][nh + 1].isClicked = true
                } else if (arr[nw - 1][nh + 1].value !== "X") {
                    arr[nw - 1][nh + 1].isClicked = true
                }
            }
            //right
            if (arr[nw][nh].y < arr[0].length - 1) {
                if (arr[nw][nh + 1].value === 0 && !arr[nw][nh + 1].isClicked) {
                    newArr.push([arr[nw][nh + 1].x, arr[nw][nh + 1].y])
                    arr[nw][nh + 1].isClicked = true
                } else if (arr[nw][nh + 1].value !== "X") {
                    arr[nw][nh + 1].isClicked = true
                }
            }
            //bottom right
            if (arr[nw][nh].x < arr.length - 1 && arr[nw][nh].y < arr[0].length - 1) {
                if (arr[nw + 1][nh + 1].value === 0 && !arr[nw + 1][nh + 1].isClicked) {
                    newArr.push([arr[nw + 1][nh + 1].x, arr[nw + 1][nh + 1].y])
                    arr[nw + 1][nh + 1].isClicked = true
                } else if (arr[nw + 1][nh + 1].value !== "X") {
                    arr[nw + 1][nh + 1].isClicked = true
                }
            }
            //bottom
            if (arr[nw][nh].x < arr.length - 1) {
                if (arr[nw + 1][nh].value === 0 && !arr[nw + 1][nh].isClicked) {
                    newArr.push([arr[nw + 1][nh].x, arr[nw + 1][nh].y])
                    arr[nw + 1][nh].isClicked = true
                } else if (arr[nw + 1][nh].value !== "X") {
                    arr[nw + 1][nh].isClicked = true
                }
            }
            //bottom left
            if (arr[nw][nh].x < arr.length - 1 && arr[nw][nh].y > 0) {
                if (arr[nw + 1][nh - 1].value === 0 && !arr[nw + 1][nh - 1].isClicked) {
                    newArr.push([arr[nw + 1][nh - 1].x, arr[nw + 1][nh - 1].y])
                    arr[nw + 1][nh - 1].isClicked = true
                } else if (arr[nw + 1][nh - 1].value !== "X") {
                    arr[nw + 1][nh - 1].isClicked = true
                }
            }
            //left
            if (arr[nw][nh].y > 0) {
                if (arr[nw][nh - 1].value === 0 && !arr[nw][nh - 1].isClicked) {
                    newArr.push([arr[nw][nh - 1].x, arr[nw][nh - 1].y])
                    arr[nw][nh - 1].isClicked = true
                } else if (arr[nw][nh - 1].value !== "X") {
                    arr[nw][nh - 1].isClicked = true
                }
            }
            //top left
            if (arr[nw][nh].x > 0 && arr[nw][nh].y > 0) {
                if (arr[nw - 1][nh - 1].value === 0 && !arr[nw - 1][nh - 1].isClicked) {
                    newArr.push([arr[nw - 1][nh - 1].x, arr[nw - 1][nh - 1].y])
                    arr[nw - 1][nh - 1].isClicked = true
                } else if (arr[nw - 1][nh - 1].value !== "X") {
                    arr[nw - 1][nh - 1].isClicked = true
                }
            }
    
            //check to see which cells have isClicked = true, and adds a class relevant to the cell value
            for (let j = 0; j < arr.length; j++) {
                for (let k = 0; k < arr[j].length; k++) {
                    if (arr[j][k].isClicked === true && arr[j][k].value === 0) {
                        const cellDetails = document.getElementById([arr[j][k].x, arr[j][k].y]);
                        cellDetails.classList.add("empty")
                    }
                    if (arr[j][k].isClicked === true && arr[j][k].value > 0) {
                        const cellDetails = document.getElementById([arr[j][k].x, arr[j][k].y]);
                        cellDetails.classList.add("number")
                    }
                }
            }
        }
    }
}