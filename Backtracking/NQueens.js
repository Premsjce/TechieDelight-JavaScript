/**
 *  Print all Possible combination solutions for N-Queens problem
 *  Link : https://www.techiedelight.com/print-possible-solutions-n-queens-problem/
 *  
 *  Could be solved using Backtracking
 */

//Just to pretty print the matrix output
function printMatrix(mat) {
    console.log(mat);
}

function nQueenAlgo(mat, currentRow) {
    let length = mat.length;
    if (currentRow == length) {
        printMatrix(mat);
        return;
    }

    for (let currentCol = 0; currentCol < length; currentCol++) {
        if (isSafeToPlace(mat, currentRow, currentCol)) {
            mat[currentRow][currentCol] = 'Q';
            nQueenAlgo(mat, currentRow + 1);
            mat[currentRow][currentCol] = '-';
        }
    }
}


function isSafeToPlace(mat, row, col) {
    let len = mat.length;
    //Check for same Column
    for (let currentRow = 0; currentRow < len; currentRow++) {
        if (mat[currentRow][col] == 'Q') {
            return false;
        }
    }

    //Check for Backward Dialgonal (\)
    for (let currentRow = row, currentCol = col; currentRow >= 0 && currentCol >= 0; currentRow--, currentCol--) {
        if (mat[currentRow][currentCol] == 'Q') {
            return false;
        }
    }


    //Check for Forward Dialgonal (\)
    for (let currentRow = row, currentCol = col; currentRow >= 0 && currentCol < len; currentRow--, currentCol++) {
        if (mat[currentRow][currentCol] == 'Q') {
            return false;
        }
    }
    return true;
}

function nQueenSolution(N) {
    let mat = [];
    for (let row = 0; row < N; row++) {
        let currentRow = [];
        for (let col = 0; col < N; col++) {
            currentRow.push('-');
        }
        mat.push(currentRow);
    }
    console.log(mat);
    let currentRow = 0;
    nQueenAlgo(mat, currentRow);
}

nQueenSolution(6);

