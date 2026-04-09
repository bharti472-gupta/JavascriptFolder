// NESTED-IF ELSE

//Q1.
//  let num = 4;
// let num = -7;
// let num = 0;
// if (num >= 0) {
//     if (num == 0) {
//         console.log("Zero");
//     }
//     else {
//         console.log("positive Number");
//     }
// }
// else{
//     console.log("Negative Number");

// }


// let num = 0;
// let num = 7;
// let num = -9;
// if (num > 0) {
//     console.log("Positive Number");
// }
// else{
//     if (num == 0) {
//         console.log("Zero");
//     }
//     else {
//         console.log("Negative Number");
//     }
// }


//Q2.
//  let num = 6;
// let num = 5;
//  let num = -3;
// let num = -6;
// if(num > 0){
//     if(num % 2 == 0){
//         console.log("Positive and Even");

//     }
//     else{
//         console.log(" Positive and Odd ");

//     }
// }
// else {
//     if (num % 2 == 0) {
//         console.log("Negative and Even");
//     } else {
//         console.log("Negative and Odd");
//     }
// }


//  FOR ZERO ALSO


// let num = 0;
// let num = 2;
// let num = 7;
// let num = -6;
// let num = -11;
//  if(num > 0){
//     if(num % 2 == 0){
//         console.log("Positive and Even");

//     }
//      else{
//         console.log(" Positive and Odd ");

//     }
//  }
// else {
//     if (num % 2 == 0) {
//         if(num == 0){
//          console.log("Zero");
//      } else {
//          console.log("Negative and Even");
//      }
//     }
//     else{
//         console.log("Negative and odd");

//     }
// }


//Q3.(DOUBT)
//  let num = 6;
// // let num = 5;
// // let num = -7;
// // let num = -8;
// if(num > 0){
//     if(num % 2 == 0){
//         console.log(" Largest , Positive and Even");

//     }
//     else{
//         console.log("Largest , Positive and Odd ");

//     }
// }
// else {
//     if (num % 2 == 0) {
//         console.log("Negative and Even");
//     } else {
//         console.log("Negative and Odd");
//     }
// }

//Q3.

// let a = 14;
// let b = -12;
// let a = -12;
// let b = 15;
// let a = -12;      //-12 is greater than -15 remember it and even so a is largest
// let b = -15;
// let a = -16;      //-11 is greater than -16 remember it and odd so b is largest
// let b = -11;

// let largest;

// if (a > b) {
//     largest = a;
// } else {
//     largest = b;
// }

// if (largest > 0) {
//     if (largest % 2 == 0) {
//         console.log(largest + " is greater, even, and positive");
//     } else {
//         console.log(largest + " is greater, odd, and positive");
//     }
// } else {
//     if (largest % 2 == 0) {
//         console.log(largest + " is greater, even, and negative");
//     } else {
//         console.log(largest + " is greater, odd, and negative");
//     }
// }

//Q4.(DOUBT - NEGATIVE NUMBER K LIYE?)
// let num = 247;
// if(num >= 100 && num <= 999){
//    if(num % 2 == 0){
//     console.log(" Three-Digit Even Number");
//    }
//    else{
//     console.log(" Three-Digit Odd Number");
//    }

// }
// else{
//     console.log("Not a Three-Digit Number");

// }

//Q5.
//Q6.

//Q7.

// let num = 18;
// let num = 10;
// let num = 9;
// let num = 25;
// if(num % 2 == 0){
//     if(num % 3 == 0){
//         console.log("Divisible by both");

//     }
//     else{
//         console.log("Divisible by 2 but not by 3");

//     }
// }
// else{
//     if(num % 3 == 0){
//         console.log("Divisible by 3 but not by 2");

//     }
//     else{
//         console.log("Not div by both");

//     }
// }

//  OR

// let num = 18;

// if (num % 2 == 0 && num % 3 == 0) {
//     console.log("Divisible by both");
// } else {
//     console.log("Not divisible by both");
// }

//Q8.
// let CP = 400;
// let SP = 400;
// if (SP > CP){
//     console.log("Profit");
// }
// else{
//     if(SP == CP){
//         console.log("No Profit No Loss");  
//     }
//     else{
//         console.log("Loss");  
//     }
// }

//Q9.

// let a = 10;
// let b = 20;
// let a = 15;
// let b = 15;
// if (a == b) {
//     console.log("Both are equal");
// }
// else {
//     if (a > b) {
//         console.log("a is greater");
//     }
//     else {
//         console.log(" b is greater");

//     }
// }