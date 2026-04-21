//LOCAL AND GLOBAL VARIABLES

//Example 1:-
// let a = 2;
// if(true){
//     let a = 100;
//     console.log(a);

// }
// console.log(a);

//Output
// 100
// 2


//Example 2:-
// let sp = 1; ep = 3;
// while(sp <= ep){
//     let a = 100;
//     if(true){
//         let a = 1;
//         console.log("if : a  = ",a);
//         a = a + 1;

//     }
//     console.log("while : a  = ",a);
//     sp++;
// }

// Output
// if : a  =  1
// while : a  =  100
// if : a  =  1
// while : a  =  100
// if : a  =  1
// while : a  =  100

// Example:-3
// sum of all numbers one by one

// let sp = 1; ep = 5;
// while(sp <= ep){

//     console.log("sp = ",sp);
//     let isp = 1;
//     let iep = sp;
//     let sum = 0;

//     while(isp <= iep){
//          sum = sum + isp;
//          isp++;
//     }
//   console.log("sum = ",sum);
//   sp++;
// }

//Output
// sp =  1
// sum =  1
// sp =  2
// sum =  3
// sp =  3
// sum =  6
// sp =  4
// sum =  10
// sp =  5
// sum =  15


//factorial of all numbers one by one
//  let sp = 1; ep = 5;
//  while(sp <= ep){

//     console.log("sp = ",sp);
//     let isp = 1;
//     let iep = sp;
//     let fac = 1;

//     while(isp <= iep){
//         fac = fac * isp;
//         isp++;
//     }

//     console.log("Fac = ",fac);
//     sp++;
//  }


//Output
// sp =  1
// Fac =  1
// sp =  2
// Fac =  2
// sp =  3
// Fac =  6
// sp =  4
// Fac =  24
// sp =  5
// Fac =  120

//CONTINUE EXAMPLE USING ALL THREE LOOPS

//WHILE LOOP

// let sp = 1; ep = 5;
// while (sp <= ep) {
//     if (sp % 2 == 0) {
//         sp++;
//         continue;
//     }
//     console.log("sp = ",sp);
//     sp++;

// }

//FOR LOOP

// for(let sp = 1, ep = 5; sp <= ep; sp++){
//     if(sp % 2 == 0){
//         continue;
//     }
//     console.log("sp = ",sp);

// }

//DO WHILE LOOP
// let sp = 1, ep = 5;
// do{
//     console.log("sp = ",sp);
//     sp++;
//     if(sp % 2 == 0){
//         sp++;
//         continue;
//     }

// }while(sp <= ep);


//Nested loops
// let sp = 2, ep = 3;
// while(sp <= ep){
//     console.log("sp = ",sp);
//     let num = sp;
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//         sum = sum + i;
//     }
//     console.log("sum = ",sum);
//     sp++;

// }


// for(let sp = 1, ep = 10; sp <= ep; sp++){
// let num = sp;
// let multi = 1;
// for(let j = 1; j <= num; j++){
//     multi = multi * j;
// }
// console.log( "Factorial of " + num + " is " + multi);

// }

// for(let i = 1; i <= 5; i++){
//    let sum = 0;
//    for(j = 1; j <= i; j++){
//     sum = sum + j;
//    }
//    console.log("sum  of  ", i ,"is" ,sum);

// }

// for(let i = 1; i <= 10; i++){
//     let sum = 0;
//     for(j = 1; j <= i; j++){
//      sum = sum + j;
//     }
//     console.log("sum  of  ", i ,"is" ,sum);

//  }


//PRACTICE SET LOOP BASICS - NESTED LOOPS

//Q1.
// let a = Number(prompt("Enter Your First Number : "));
// let b = Number(prompt("Enter Your Second Number : "));
// let sp = a;
// while (sp <= b) {
//     if (sp % 2 == 0) {
//         console.log(sp  +  ".Coding");

//     }
//     else {
//         console.log(sp  +  ".Age");

//     }
//     sp++;
// }


//  Output
//  2.Coding
//  3.Age
//  4.Coding
//  5.Age

//Q2.
//TABLE OF 2
//  let num =  Number(prompt("Enter Your  Number : "));
//  let num = 2;
// let sp = 1; ep = 10;
// for(sp;  sp <= ep; sp++){
//     console.log( "Table of " ,  num  , " * " , sp , " = " , (num * sp));

// }

//TABLE OF 1
// let num =  Number(prompt("Enter Your  Number : "));
// let sp = 1; ep = 10;
// for(sp;  sp <= ep; sp++){
//     console.log( "Table of " ,  num  , " * " , sp , " = " , (num * sp));

// }

//Q3.

// let sp = 1; ep = 100;
// while(sp <= ep){
//     if(sp % 5 == 0){
//         console.log(sp);
//     }
//     sp++;
// }

//Output
// 5
// 10
// 15
// 20
// 25
// 30
// 35
// 40
// 45
// 50
// 55
// 60
// 65
// 70
// 75
// 80
// 85
// 90
// 95
// 100

// for(let sp = 1, ep = 100; sp<= ep; sp++){
//     if(sp % 5 == 0){
//         console.log(sp);

//     }
// }


//Q4.
// let num = Number(prompt("Enter Your Number : "));
// let sum = 0;
// while(num > 0){
//     rem = num % 10;
//     sum = sum + rem;
//     num = parseInt(num / 10);

// }
// console.log("Sum All Digits : ",sum);

//Q5.
//  let num = Number(prompt("Enter Your Number : "));
//  //let num = 9842;
//  while(num > 0){
//     digit = num % 10;
//      num = parseInt(num / 10);
//      console.log(rem);

//  }
//  if(digit == 9){
//      console.log("First Digit is " , digit , "and last digit is 2 ");
//  }


//Q6.
//  let num = Number(prompt("Enter Your Number : "));
//  let num = 3215;
//  let max = 0;
//  let min = 9;
//  while(num > 0){
//      digit = num % 10;
//      num = parseInt(num / 10);
//      if(digit > max){
//          console.log( "Max digit = " ,max = digit);

//      }
//      else{
//          if(digit < min ){
//              console.log("Min digit = " ,min = digit);

//           }
//          else{
//              console.log("Max digit = " ,max , "and " , "Min digit = " ,min);

//          }
//       }
//   }


//Q7.




//BY SIR KA METHOD
//let num = Number(prompt("Enter Your Number : "));
// let num = 3215;
// let max = 0;
// let min = 9;
// while (num > 0) {
//     digit = num % 10;
//     num = parseInt(num / 10);
//     if (digit > max) {
//         console.log("Max digit = ", max = digit);

//     }
//     if (digit < min) {
//         console.log("Min digit = ", min = digit);

//     }
// }
// console.log(max);
// console.log(min);


//Q8.
// let num1 = 2; num2 = 4;
// let num1 = Number(prompt("Enter Your First Number = "));
// let num2 = Number(prompt("Enter Your Second Number = "));
// for(num1; num1 <= num2; num1++){
// for(let sp = 1, ep = 10; sp <= ep; sp++){
//     console.log("Table of ",num1 ,"*" , sp , "=" ,num1 * sp);

// }
// }


//Q9.
// let num1 = Number(prompt("Enter Your First Number = "));
// let num2 = Number(prompt("Enter Your Second Number = "));

// let num1 = 3; num2 = 6;
// let num1 = 4; num2 = 6;

// for(num1; num1 <= num2; num1++){
//     let count = 0;
//     for(let sp = 1; sp <= num1; sp++){
//         if(num1 % sp == 0){
//             count++;
//         }
//     }
//     if(count == 2){
//         console.log(num1, "is prime number ");

//     }
//     else{
//         console.log(num1, "is not prime number ");

//     }
// }


//Q10.


