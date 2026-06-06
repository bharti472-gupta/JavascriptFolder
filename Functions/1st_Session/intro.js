//INTRODUCTION

//LET'S GET STARTED

//1.
// function evenOddNum(num){
//     if(num % 2 == 0){
//         console.log(" Even Number");

//     }
//     else{
//         console.log("odd Number");

//     }
// }

// evenOddNum(10);


//2.
// function sum(num1 , num2){
//      sum = num1 + num2;
//      console.log(sum);
// }

// sum(2 , 5);


//3.
// function sum(num1 , num2){
//      sum = num1 + num2;

// }

// sum(2 , 5);
// console.log(sum);


//4.

// function sumoftwonum(num1 , num2){
//     let sum = num1 + num2;


//     return sum;
// }
//  sum = sumoftwonum(22 , 33);
//  console.log("sum = ",sum);


//  sum = sumoftwonum(29 , 93);
//  console.log("sum = ",sum);

//5.
//TAKE SOMETHING AND RETURN SOMETHING
// function sumoftwonum(num1 , num2){
//     let sum = num1 + num2;
//     return sum;
// }
// let ans = sumoftwonum(22, 33);
// console.log("sum = ",ans);

// ans = sumoftwonum(26, 13);
// console.log("sum = ",ans);


//6.
//TAKE NOTHING AND RETURN SOMETHING

// function evenOdd(){
//     let num = 12;
//     if(num % 2 == 0){

//        return"Even Number";

//     }
//     else{

//         return"Odd Number";

//     }
// }

// let ans = evenOdd();
// console.log(ans);


//7.
//TAKE SOMETHING AND RETURN NOTHING

// function p_n_Number(num){
//     if(num == 0){
//         console.log("zero");
//     }
//    else if(num > 0){
//     console.log("+ve number");
//    }
//    else{
//     console.log("-ve number");
//    }
// }

// p_n_Number(4);
// p_n_Number(-8);
// p_n_Number(0);

//8.
//TAKE NOTHING AND RETURN NOTHING

// function primeNumber(){
//     let num = 8;
//     let i;
//     for(i = 2; i < num; i++){
//         if(num % i == 0){
//             console.log("Not prime number");
//             break;

//         }
//     }
//     if(i == num){
//         console.log(" prime number");
//     }
// }
// primeNumber();

//PARAMETER WITH DEFAULT VALUE
//without default value

// function message(name){
//     console.log("Hello , ",name);

// }
// message("Rahul");

//with default value

// function message(name = "XYZ"){
//         console.log("Hello , ",name);

//     }
//     message();


// FUNCTION EXPRESSION - FUNCTION WITHOUT NAME
// const fun = function(a, b){
//     console.log(a+ b);

// }
// console.log(fun);
// console.log(typeof(fun));


// const fun = function(a, b){
//     console.log(a + b);

// }
// fun(8, 9);
// fun(5, 9);

//OR
// const funs = function(a, b){
//     return (a + b);

// }
// console.log(funs(8, 9));
// console.log(funs(5, 9));


//OR
// const funs = function(a, b){
//     return (a + b);

// }
// let res = funs(4, 9);
// console.log(res);

//OR
// let funs = function(a, b){
//     return (a + b);

// }
// let res = funs(4, 9);
// console.log(res);


//ARROW EXPRESSION
// const fun = (a, b) => {
//     console.log(a + b);

// }
// fun(5 , 6);

// let fun = (a , b)=>{
//     console.log(a * b);

// }
// fun(3, 7);


//SHORT ARROW EXPRESSION
// let sqr = (num)=> num * num;
// let ans = sqr(5);
// console.log(ans);


// let fun = (a , b)=> a * b;
// let ans = fun(5,7);
// console.log(ans);


//NESTED FUNCTION
// function maya(){
//     function bhaya(){
//         let sp = 1, ep = 5;
//         while(sp <= ep){
//             console.log(sp);
//             sp++;

//         }
//     }
//     bhaya();
// }
// maya();

//PRACTICE
//as making fac global
//  let fac = 1;
// function factorial(sp, ep) {
//     while (sp <= ep) {
//         fac = fac * sp;
//         sp++;
//     }
//     console.log(fac);

// }
// factorial(1 , 4);
// factorial(1 , 5);


//Output
// 24
// 2880

//as making fac local
// function factorial(sp, ep) {
//     let fac = 1;
//     while (sp <= ep) {
//         fac = fac * sp;
//         sp++;
//     }
//     console.log(fac);

// }
// factorial(1 , 4);
// factorial(1 , 5);
// factorial(1 , 6);

//output
// 24
// 120
// 720

