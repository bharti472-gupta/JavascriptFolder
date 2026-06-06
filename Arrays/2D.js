// let arr = [[2, 4, 5, 8], [7, 8, 9]];
// console.log("arr = ", arr);
// console.log("Arr = ", arr[0]);
// console.log("Arr = ", arr[1]);
// for (let i = 0; i < arr.length; i++) {
//     console.log("arr = ", i, " = ", arr[i]);
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

//Matrix
// let arr = [[2, 4, 5, 8], [7, 8, 9]];
// console.log("arr = ", arr);
// console.log("Arr = ", arr[0]);
// console.log("Arr = ", arr[1]);
// for (let i = 0; i < arr.length; i++) {
//     console.log("arr = ", i, " = ", arr[i]);
//     for (let j = 0; j < arr[i].length; j++) {
//         process.stdout.write(arr[i][j] + "  ");
//     }
//     console.log();

// }

//Q1.
let n = Number(prompt("Enter Your Rows = "));
let m =  Number(prompt("Enter Your Columns = "));
let arr = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        arr[j] = Number(prompt("Enter Your column element = "));
        console.log(arr[i][j]);
    }
   
    
}
