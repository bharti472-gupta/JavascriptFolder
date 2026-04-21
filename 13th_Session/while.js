//LOOP PRACTICE SET

//WHILE LOOP

//Q1.

// let str = "Coding Age";
// let sp = 1; 
// let ep = 10;
// while(sp <= ep){
// console.log(str);
// sp = sp + 1;
// }

//Q2.

//  let num = Number(prompt("Enter Your Number : "));
//  let sp = 1; 
//  let ep = 100;
// while(sp <= ep){
//  console.log(num);
//  sp = sp + 1;
//  }

//Q3.
//  let ep = Number(prompt("Enter Your Number : "));
//  let sp = 1; 
//  while(sp <= ep){
//  console.log(sp);
//  sp = sp + 1;
//  }

//Q4.
// let ep = Number(prompt("Enter Your Number : "));
// let sp = 5; 
// while(sp >= ep){
// console.log(sp);
// sp = sp - 1;
// }

//Q5.
// let sp = 97;
// let ep = 122;
// while(sp <= ep){
//     console.log("Alpha : " , sp);
//     sp = sp + 1; 
// }

//Q9.
// let sp = 1;
// let ep = Number(prompt("Enter Your Number : "));
// let sum = 0;
// while (sp <= ep) {
//     sum = sum + sp;
//     sp = sp + 1;  
// }
// console.log("Sum : ",sum);

//Q10.

// let sp = 1;
// let ep =  Number(prompt("Enter Your Number : "));
// let fac = 1;
// while(sp <= ep){
//     fac = fac * sp;
//     sp = sp + 1;
// }
// console.log("Multi = ",fac);

//Q11.

// let num = Number(prompt("Enter Your Number : "));
// let sp = 1;
// while(sp <= num){
//     if(sp % 2 == 0){
//         console.log("Even Number = ",sp);

//     }
//     sp = sp + 1;
// }

//Q12.

// let num = Number(prompt("Enter Your Number : "));
// let sp = 2;
// while (sp <= num) {
//     if (sp % 2 == 1) {
//         console.log("Odd Number = ", sp);

//     }
//     sp = sp + 1;
// }

//Q13.

// let num1 = Number(prompt("Enter Your First Number : "));
// let num2 = Number(prompt("Enter Your Second Number : "));
// while(num1 <= num2){
//     if(num1 % 2 == 0){
//         console.log("Even Number = ",num1);

//     }
//     num1 = num1 + 1;
// }

//Q14.
// let a = Number(prompt("Enter Your First Number : "));
// let b = Number(prompt("Enter Your Second Number : "));
// while(a <= b){
//     if(a % 2 == 1){
//         console.log("Odd Number = ",a  );

//     }
//     a = a + 1;
// }

//Q15.
// let a = Number(prompt("Enter Your First Number : "));
// let b = Number(prompt("Enter Your Second Number : "));
// let sum = 0;
// while(a <= b){
//     if(a % 2 == 0){
//         sum = sum + a;

//     }
//     a = a + 1;

// }

// console.log("Sum of even numbers = ",sum);


//Q16.

// let a = Number(prompt("Enter Your First Number : "));
// let b = Number(prompt("Enter Your Second Number : "));
// let sum = 0;
// while(a <= b){
//     if(a % 2 == 1){
//         sum = sum + a;

//     }
//     a = a + 1;

// }

// console.log("Sum of odd numbers = ",sum);



//Q17.

// let a = Number(prompt("Enter Your First Number : "));
// let b =  Number(prompt("Enter Your First Number : "));
// let sum = 0;

// while(a <= b){
//     sum = sum + a;
//     a = a + 1; 
// }
// let average = sum / 5;
// console.log("Average = ",average);


//Q18.

// let base = Number(prompt("Enter Your Base : "));
// let power = Number(prompt("Enter Your Power : "));
// let sp = 1;
// let result = 1;
// while(sp <= power){
// result = result * base;
// sp = sp + 1;

// }
// console.log("Result = ",result);


//Q19.
// let num = Number(prompt("Enter Your Number = "));
// let count = 0;
// while(num > 0){
//     num = parseInt(num / 10);
//     count = count + 1;
// }
// console.log("Digit count = ",count);

//Q20.

// let num = Number(prompt("Enter Your Number = "));
// let count = 0;
// let rev = 0;
// while(num > 0){
// let rem = num % 10;
// rev = rev * 10 + rem;
// num = parseInt(num / 10);
// count = count + 1;
// }
// console.log("Reverse Number = ",rev);


//Q21.
// let sp = 1;
// let ep = 10;
// while(sp <= ep){
//     if(sp % 3 == 0){
//         sp++;
//         continue;
//     }
//     console.log(sp);
//     sp++;
// }

//Output
// 1
// 2
// 4
// 5
// 7
// 8
// 10



//Q22.
//  let num =  Number(prompt("Enter Your Number = "));
//  while(num > 0){
//     console.log("You entered Number ; ",num);
//     num = Number(prompt("Enter Your Number = "));
//  }
// console.log("Found a negative number to stop the loop");


//Q23.
// let a = Number(prompt("Enter Your First Number = "));
// let b = Number(prompt("Enter Your Second Number = "));
// let sp = 5;
// let count = 0;
// while(sp < b){
//     count++;
//     sp++;
// }
// console.log("Count = ",count);

//Q24.
// let num1 = Number(prompt("Enter Your First Number = "));
// let num2 = Number(prompt("Enter Your Second Number = "));
// let sp = 1;
// while(sp <= num1){
//     if((num1 % sp == 0) && (num2 % sp == 0)){
//         console.log(`${sp} is the greatest common factor of ${num1} and ${num2}`);

//     }
//     sp++;
// }



//Q25.
// let num = 7;
// let sp = 1; count = 0;
// while (sp <= num) {
//     if (num % sp == 0) {
//         count++;
//     }
//     sp = sp + 1;
// }

// if (count == 2) {
//     console.log(num, "is Prime number ");

// }
// else {
//     console.log(num, "is not Prime number ");

// }



// let num = 10;
// let sp = 1; count = 0;
// while (sp <= num) {
//     if (num % sp == 0) {
//         count++;
//     }
//     sp = sp + 1;
// }

// if (count == 2) {
//     console.log(num, "is Prime number ");

// }
// else {
//     console.log(num, "is not Prime number ");

// }


//FROM 2 TO N-1
//  let num = 10;
//  let sp = 2; ep = num - 1;
//  let count = 0;
//  while (sp <= ep) {
//      if (num % sp == 0) {
//          count++;
//      }
//      sp = sp + 1;
//  }

//  if (count == 0) {
//     console.log(num, "is Prime number ");

//  }
// else {
//     console.log(num, "is not Prime number ");

//  }


//BY USING BREAK
// let num = 1000;
// let sp = 2; ep = num - 1;
// let count = 0;
// while (sp <= ep) {
//     if (num % sp == 0) {
//         count++;
//         // break;
//     }
//     sp = sp + 1;
// }

// if (count == 0) {
//     console.log(num, "is Prime number ",count);

// }
// else {
//     console.log(num, "is not Prime number ",count);

// }