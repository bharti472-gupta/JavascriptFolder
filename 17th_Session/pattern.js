//PATTERN PRINTING

//1.
// for(let i = 1; i <= 10; i++){
//     process.stdout.write(`${i}  `);

// }

//Output
// 1  2  3  4  5  6  7  8  9  10 

//2.
// let num = 10;
// for(let i = 1; i <= num; i++){
//     process.stdout.write(`${i}. \n`);

// }
//Output
// 1. 
// 2. 
// 3. 
// 4. 
// 5. 
// 6. 
// 7. 
// 8. 
// 9. 
// 10.



//3.
// for(let i = 1; i <= 10; i++){
//     process.stdout.write("*  ");

// }

//OUTPUT
// *  *  *  *  *  *  *  *  *  *  


//4.(IN ONE ROW MULTIPLE COLUMNS IS CREATED)
// for(let i = 1; i <= 5; i++){
//     process.stdout.write("*  ");

// }

//OUTPUT
// *  *  *  *  * 


//5.(IN ONE COLUMN MULTIPLE ROWS)
// for(let i = 1; i <= 5; i++){
//     process.stdout.write("*  \n");

// }

//Output
// *  
// *  
// *  
// *  
// * 

//6.

// let num = 4;
// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {
//         process.stdout.write("* ")
//     }
//     process.stdout.write(` \n`)
// }

//Output
// * * * *  
// * * * *  
// * * * *  
// * * * * 

//LOOP PATTERN BASICS

//Q1.

// let n = 3;
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         process.stdout.write("* ");
//     }
//     process.stdout.write("\n");
// }


//Output
// * * * 
// * * * 
// * * * 

//Q2.

// let n = 3;
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("* ");
//     }
//     process.stdout.write("\n");
// }

//Output
// * 
// * * 
// * * *

//Q3.

// let n = 1;
// for(let i = 3; i >= n; i--){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("* ");
//     }
//     process.stdout.write("\n");
// }

//Output
// * * * 
// * * 
// *

//2ND METHOD

// let n = 3;
// for(let i = 1; i <= n; i++){
//     for(let j = i ; j <= n; j++){
//         process.stdout.write("* ");
//     }
//     process.stdout.write("\n");
// }

//Output
// * * * 
// * * 
// * 

//3RD METHOD

// let n = 3;
// let a = 3;
// for(let i = 1; i <= 3; i++){
//     for(let j = 1; j <= a; j++){
//         process.stdout.write("*");
//         process.stdout.write(" ");
//     }
//     a = a - 1;
//     process.stdout.write("\n");
// }


//Output
// * * * 
// * * 
// * 

//Q4.
// let n = 3;
// for(let i = 1; i <= n; i++){
//     for(let j = i ; j <= n; j++){
//         process.stdout.write(" ");
//     }
//     for(let k = 1; k <= i; k++){
//         process.stdout.write("*");
//     }

// process.stdout.write("\n");

// }

//Output
//    *
//   **
//  ***

//Q5.
//BY TAKING SIX LOOPS😂
// let a = 1;
// for (let i = 1; i <= 1; i++) {
//     for (let j = 1; j <= 3; j++) {
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");

//     for (let k = 1; k <= i; k++) {
//         process.stdout.write(" ");
//     }
//     i++;
//     for (let m = 1; m <= i; m++) {
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");

//     for (let l = 1; l <= i; l++) {
//         process.stdout.write(" ");
//     }
//     for (let p = 1; p <= a; p++) {
//         process.stdout.write("*");
//     }
// }

//Output
// ***
//  **
//   *


//BY TAKING VARIABLES
// let a = 1;
// let sp = 1;
// let ep = 3;
// for (let i = 1; i <= sp; i++) {
//     for (let j = 1; j <= ep ; j++) {
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");

//     for (let k = 1; k <= i; k++) {
//         process.stdout.write(" ");
//     }
//     i++;
//     for (let m = 1; m <= i; m++) {
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");

//     for (let l = 1; l <= i; l++) {
//         process.stdout.write(" ");
//     }
//     for (let p = 1; p <= a; p++) {
//         process.stdout.write("*");
//     }
// }

//BY ONLY THREE LOOPS
// let n = 3;
// let a = 3;
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(" ");
//     }
//     for (let k = 1; k <= a; k++) {
//         process.stdout.write("*");
//     }
//     a = a - 1
// ;
//     process.stdout.write("\n");
// }

//Output
// ***
//  **
//   *

//Q6.

// let num = 3;
// let a = 1;
// for(let i  = 1; i <= num; i++){
//     for(let j = i; j <= num; j++){
//         process.stdout.write(" ");
//     }
//     for(let k = 1; k <= a; k++ ){
//         process.stdout.write(" ");
//         process.stdout.write("*");
//     }
//     a = a + 1;
//     process.stdout.write("\n");

//  }

//Output
//
//   *
//  * *
// * * *

// let num = 1;
// for (let i = 1; i <= num; i++) {
//     process.stdout.write(" ");
//     process.stdout.write(" ");
//     process.stdout.write("*");
//     process.stdout.write("\n");

//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(" ");
//         process.stdout.write("*");
//         process.stdout.write(" ");
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
//     for(let k = 1; k <= i ;k++){
//         process.stdout.write("*");
//         process.stdout.write(" ");
//         process.stdout.write("*");
//         process.stdout.write(" ");
//         process.stdout.write("*");
//     }
// }



//Q7.
// let m = 3;
// let a = 3;
// for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(" ");
//     }
//     for (let k = 1; k <= a; k++) {
//         process.stdout.write("*");
//         process.stdout.write(" ");

//     }
//     a = a - 1;
//     process.stdout.write("\n");
// }

//Output
// * * * 
//  * * 
//   * 

//Q8.
// let num = 3;
// let a = 1;
// for(let i  = 1; i <= num; i++){
//     for(let j = i; j <= num; j++){
//         process.stdout.write(" ");
//     }
//     for(let k = 1; k <= a; k++ ){
//         process.stdout.write("*");
//     }
//     a = a + 2;
//     process.stdout.write("\n");

//  }

//   *
//  ***
// *****


//Q9.

// let n = 3;
// let a = (n * 2) - 1;
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(" ");
//     }
//     for(let k = 1; k <= a; k++){
//         process.stdout.write("*");
//     }
//     a = a - 2;
//     process.stdout.write("\n");
// }

// *****
//  ***
//   *

//Q10.

// let n = 4;
// for(let i = 1; i <= 4; i++){
//     for(let j = 1; j <= n+1; j++){
//         if(j % 2 == 0){
//            process.stdout.write("#"); 
//            process.stdout.write(" ");
//         }
//         else{
//             process.stdout.write("*"); 
//             process.stdout.write(" "); 
//         }
//     }
//     process.stdout.write("\n"); 
// }

//Output
// * # * # * 
// * # * # * 
// * # * # * 
// * # * # * 


//Q11.

// let n = 3;
// let a = 1;
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         process.stdout.write(a.toString() + "  ");
//         a++;
//     }
//     process.stdout.write("\n"); 
// }

//Output
// 1  2  3  
// 4  5  6  
// 7  8  9

//Q12.

// let n = 3;
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (j % 2 == 0) {
//             process.stdout.write("*");
//             process.stdout.write(" ");
//         }
//         else {
//             process.stdout.write("#");
//             process.stdout.write(" ");
//         }
//     }
//     process.stdout.write("\n");
// }


//Output
// # * # 
// # * # 
// # * # 

//Q13.
// let n = 3;
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n + 2; j++) {
//         if (i == 2) {
//             if (j % 2 == 0) {
//                 process.stdout.write("*");
//                 process.stdout.write(" ");
//             }
//             else {
//                 process.stdout.write("#");
//                 process.stdout.write(" ");
//             }
//         }
//         else {
//             if (j % 2 == 0) {
//                 process.stdout.write("#");
//                 process.stdout.write(" ");
//             }
//             else {
//                 process.stdout.write("*");
//                 process.stdout.write(" ");
//             }
//         }
//     }
//     process.stdout.write("\n");
// }

//Output
// * # * # * 
// # * # * # 
// * # * # * 

//Q14.

// let n = 3;
// let a = 1;
// for(let i = 1; i <= 3; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(a.toString() + "  ");
//          a++;
//     }
//     process.stdout.write("\n");
// }

//Output
// 1
// 2  3
// 4  5  6

//Q15.

// let n = 3;
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (i >= 2) {
//             if (j % 2 == 0) {
//                 process.stdout.write("#");
//                 process.stdout.write(" ");
//             }
//             else {
//                 process.stdout.write("*");
//                 process.stdout.write(" ");
//             }
//         }
//         else {
//             if (j % 2 == 0) {
//                 process.stdout.write("*");
//             }
//             else {
//                 process.stdout.write("#");
//             }
//         }
//     }
//     process.stdout.write("\n");
// }

//Output
// #
// * #
// * # * 


//Q16.
// let n = 3;
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("*");
//         process.stdout.write(" ");
//     }
//     process.stdout.write("\n");
// }

// let m = 3;
// let a = 2;
// for(let i = 1; i <= 3; i++){
//     for(let j = 1; j <= a; j++){
//         process .stdout.write("*");
//         process.stdout.write(" ");
//     }
//     a = a - 1;
//     process.stdout.write("\n");
// }

// * 
// * * 
// * * * 
// * * 
// * 

//Q17.
// let n = 3;
// for(let i = 1; i <= n; i++){
//     for(let j = i ; j <= n; j++){
//         process.stdout.write(" ");
//     }
//     for(let k = 1; k <= i; k++){
//         process.stdout.write("*");
        
//     }

// process.stdout.write("\n");

// }

// let m = 2;
// let a = 2;
// let b = 2;
// for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= b; j++) {
//         process.stdout.write(" ");
//     }
//     b = b + 1;
//     for (let k = 1; k <= a; k++) {
//         process.stdout.write("*");
//     }
//     a = a - 1;
//     process.stdout.write("\n");
// }


//Output
//   *
//  **
// ***
//  **
//   *


//Q18.
// let num = 3;
// let a = 1;
// for(let i  = 1; i <= num; i++){
//     for(let j = i; j <= num; j++){
//         process.stdout.write(" ");
//     }
//     for(let k = 1; k <= a; k++ ){
//         process.stdout.write(" ");
//         process.stdout.write("*");
//     }
//     a = a + 1;
//     process.stdout.write("\n");

// }

// let m = 2;
// let c = 3;
// let b = 2;
// for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= c; j++) {
//         process.stdout.write(" ");
       
//     }
//     c = c + 1;
//     for (let k = 1; k <= b; k++) {
//         process.stdout.write("*");
//         process.stdout.write(" ");

//     }
//     b = b - 1;
//     process.stdout.write("\n");
// }


//   *
//  * *
// * * *
//  * * 
//   * 

//Q19.

// let num = 3;
// let a = 1;
// for(let i  = 1; i <= num; i++){
//     for(let j = i; j <= num; j++){
//         process.stdout.write(" ");
//     }
//     for(let k = 1; k <= a; k++ ){
//         process.stdout.write("*");
//     }
//     a = a + 2;
//     process.stdout.write("\n");

//  }

// let n = 2;
// let b = (n * 2) - 1;
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         process.stdout.write(" ");
//     }
//     for(let k = 1; k <= b; k++){
//         if(b == 1 ){
//             process.stdout.write(" ");
//             process.stdout.write("*");
//         }
//         else{
//         process.stdout.write("*");
//         }
//      }
//     b = b - 2;
//     process.stdout.write("\n");
// }

//Output
//   *
//  ***
// *****
//  ***
//   *


//Another method

// let num = 3;
// let a = 1;
// for(let i  = 1; i <= num; i++){
//     for(let j = i; j <= num; j++){
//         process.stdout.write(" ");
//     }
//     for(let k = 1; k <= a; k++ ){
//         process.stdout.write("*");
//     }
//     a = a + 2;
//     process.stdout.write("\n");

//  }

// num--;

// let b = (num * 2) - 1;
// for(let i = 1; i <= num; i++){
//     for(let j = 1; j <= num; j++){
//         process.stdout.write(" ");
//     }
//     for(let k = 1; k <= b; k++){
//         if(b == 1 ){
//             process.stdout.write(" ");
//             process.stdout.write("*");
//         }
//         else{
//         process.stdout.write("*");
//         }
//      }
//     b = b - 2;
//     process.stdout.write("\n");
// }