//PRACTICE SET

//Q1.

// function subtract(num1 , num2){
//     let sub = num1 - num2;
//     return sub;
// }
// let ans = subtract(45 , 15);
// console.log("Sub = ",ans);


//Q2.

// function multiplication(num1 ,num2){
//     let multi = num1 * num2;
//     console.log(multi);

// }
// multiplication(150 , 2);


//Q3.

// let a = Number(prompt("Enter Your Number = "));
// let b = Number(prompt("Enter Your Number = "));
// function add(){
//     let sum = a + b;
//     return sum;
// }
// let ans = add();
// console.log("add = ",ans);

//Q4.

// let a = Number(prompt("Enter Your Number = "));
// let b = Number(prompt("Enter Your Number = "));
// function multiply(){
//     let product = a * b;
//     return product;
// }
// let ans = multiply();
// console.log("product= ",ans);


//Q5.
// let a = Number(prompt("Enter Your Number = "));
// function multiplication(){
//     let sp = 1, ep = 10;
//     while(sp <= ep){
//         console.log( " 3  * " , sp  , "=" ,a * sp);
//         sp++;

//     }
// }
// multiplication();

//Q6.


// let num = 4;
// let a = 3;

// for(let n = 1; n<= num; n++){
//     process.stdout.write(" ");
// }
// for(let m = 1; m<=1; m++){
//     process.stdout.write("*");
// }
// process.stdout.write("\n");
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


//BY USING FUNCTION
// function pattern(num, a) {

//     for (let n = 1; n <= num; n++) {
//         process.stdout.write(" ");
//     }
//     for (let m = 1; m <= 1; m++) {
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
//     for (let i = 1; i <= num; i++) {
//         for (let j = i; j <= num; j++) {
//             process.stdout.write(" ");
//         }
//         for (let k = 1; k <= a; k++) {
//             process.stdout.write("*");
//         }
//         a = a + 2;
//         process.stdout.write("\n");

//     }

// }
// pattern(4 , 3);


//Q7.
// let num = Number(prompt("Enter Your Number = "));
// let count = 0;
// let rev = 0;
// let temp = num;
// function digitcount(rn) {
//     while (num > 0) {
//         num = parseInt(num / 10);
//         count++;
//     }
//     console.log("Digit count = ", count);
//     rn();
// }
// digitcount(reversenumber)
// function reversenumber() {
//     while (temp > 0) {
//         rem = temp % 10;
//         rev = rev * 10 + rem;
//         temp = parseInt(temp / 10);
//     }
//     console.log("Reverse Number = ", rev);

// }

//without call back function
// let num = Number(prompt("Enter Your Number = "));
// let count = 0;
// let rev = 0;
// let temp = num;

// function reversenumber() {
//     while (num > 0) {
//         rem = num % 10;
//         rev = rev * 10 + rem;
//         num = parseInt(num / 10);
//     }
//     console.log("Reverse Number = ", rev);

// }
// function digitcount() {
//     while (temp > 0) {
//         temp = parseInt(temp / 10);
//         count++;
//     }
//     console.log("Digit count = ", count);
//    reversenumber();
// }
// digitcount();


//Q5.
//passing to  a function
// let a = Number(prompt(" Enter Your Number = "));
// function input(){
//     let sp = 1, ep = 10;
//     while (sp <= ep) {
//         console.log(a * sp);
//         sp++;

//     }
// }
// function multiplication(){
//     input();
// }

// multiplication();

//Q3.
//passing to  a function

// let a = Number(prompt(" Enter Your Number = "));
// let b = Number(prompt(" Enter Your Number = "));
// function sum() {
//     let sum = a + b;
//     return sum;
// }

// function addition(){
//     let ans = sum();
//     console.log(" Sum = " ,ans);
    
// }
// addition();

//Q9.

// let a = Number(prompt(" Enter Your Number = "));
// let count = 0;
// function prime(){
//     let sp = 1, ep = a;
//     while (sp <= ep) {
//         if(a % sp == 0){
//             count++;
//         }
//         sp++;
//     }
//     if(count == 2){
//         console.log("yes it is prime ");
        
//     }
//     else{
//         console.log("it is not prime");
        
//     }
// }
// prime();


//Q10.

// let num1 = Number(prompt("Enter Your Number = "));
// let num2 = Number(prompt("Enter Your Number = "));
// function primenumber(){

//  for(num1; num1 <= num2; num1++){
//         let count = 0;
//         for(let sp = 1; sp <= num1; sp++){
//             if(num1 % sp == 0){
//                 count++;
//             }
//         }
//         if(count == 2){
//             console.log(num1, "is prime number ");
    
//         }
//         else{
//             console.log(num1, "is not prime number ");
    
//         }
//     }
    
// }
// primenumber();