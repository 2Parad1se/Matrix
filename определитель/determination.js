let determinant;
let mainDiagonal = 1;
let collateralDiagonal = 1;

arr1 = [[00]];

arr2 = [[00, 01], 
        [10, 11]];

arr3 = [[00, 01, 02], 
        [10, 11, 12], 
        [20, 21, 22]];

arr4 = [[00, 01, 02, 03],
        [10, 11, 12, 13],
        [20, 21, 22, 23],
        [30, 31, 32, 33]];

arr =  [[1, 2,],
        [4, 5,]];

arr =  [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]];

let ln = arr.length;

determination();

function determination() {

    if (arr.length == 2) {
    
    for (let i = 0; i < ln; i++) {
        for (let j = 0; j < ln; j++) {
            if (i == j) {
                mainDiagonal *= arr[i][j];
                }
            if (arr.length - 1 == i + j ) {
                collateralDiagonal *= arr[i][j];
                }
            }
        determinant = mainDiagonal - collateralDiagonal;
        }
    } else {
        
        
    }

}

console.log(determination());
// console.log(arr1[0][0]);
// console.log(arr3[1][1]);
// console.log(arr4.length);



// if (arr.length == 1) {
//     determinant = arr[0][0];
// } 
// console.log(mainDiagonal);
// console.log(collateralDiagonal);