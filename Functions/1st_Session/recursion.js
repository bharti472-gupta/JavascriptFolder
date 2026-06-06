//1.
// function msg(){
//     console.log("Coding Age ");
//     msg();

// }
// msg();


//2.
// let sp = 1;
// function msg(){
//     if(sp == 5){
//         return;
//     }
//     console.log(sp++, " .Coding Age ");
//     msg();

// }
// msg();


//3.
// let sp = 1;

// function msg(){
//     if(sp == 5){
//         return sp;   // or return 5
//     }
//     console.log(sp++, " .Coding Age ");
//     return msg();   // ✅ important
// }

// console.log(msg());


//4.
//sum of all digits
// function sumofallNum(num){
//     if(num == 1){
//         return 1;
//     }
//     return num + sumofallNum(num - 1);
// }

// let ans = sumofallNum(3);
// console.log(ans);

//5.
// factorial of number
// function Factorialof(num){
//     if(num == 1){
//         return 1;
//     }
//     return num *  Factorialof(num - 1);
// }

// let ans = Factorialof(5);
// console.log(ans);


//6.
// print one to ten
// let sp = 1;
// let ep = 11;
// function msg(){
//     if(sp == ep){
//         return;
//     }
//     console.log(sp);
//     sp++;

//     msg();

// }
// msg();

//OR

// let sp = 1;
// let ep = 10;
// function msg(){
//     if(sp > ep){
//         return;
//     }
//     console.log(sp);
//     sp++;

//     msg();

// }
// msg();


//DIGIT COUNT
//RETURN TYPE
// function digitcount(num){
//     if(num == 0){
//         return 0;
//     }
//     return 1  + digitcount(num = parseInt(num / 10));
// }
//  let ans = digitcount(12345);
//  console.log(ans);

//OR
// function digitcount(num, count){
//     if(num == 0){
//         return count;
//     }
//     return digitcount(num = parseInt(num / 10), count + 1);
// }
//  let ans = digitcount(12345 , 0);
//  console.log(ans);

 

//NON-RETURN TYPE
// let count = 0;
//  let num = 123456789;
// function digitcount(){
//     if(num == 0){
//         return;
//     }
//     num = parseInt(num / 10);
//     count++;
//     digitcount();
// }
//   digitcount();
//   console.log("Digit count = " ,count);


//REVERSE NUMBER

//NON-RETURN TYPE
// let rev = 0;
// let num = 123456;
// function reversenumber(){
//     if(num == 0){
//         return;
//     }
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = parseInt(num / 10);
//     reversenumber();

// }
// reversenumber();
// console.log(rev);

// RETURN TYPE
// function reversenumber(num) {
//     if (num == 1) {
//         return 1;
//     }

//     let rem = num % 10;
//     let rev = 0 * 10 + rem;
//     return rev.toString() + reversenumber(num = parseInt(num / 10));

// }
// let ans = Number(reversenumber(1234567));
// console.log(ans);



// function reversenumber(num , rev) {
//     if (num == 0) {
//         return rev;
//     }

//     let rem = num % 10;
    
//     return reversenumber(num = parseInt(num / 10), rev = rev * 10 + rem);

// }
// let ans =reversenumber(1234 , 0);
// console.log(ans);



//POWER BASE
// let pb = 1;
// let base = 2;
// let power = 5;
// let count = 0;
// function powerbase(){
//     if(count == power){
//         return;
//     }
//     pb = pb * base;
//     count++;
//     powerbase();

// }
// powerbase();
// console.log(pb);


//optimized
// let sp = 1;
// let base = 2;
// let power = 5;

// function powerbase(){
    
//     if(sp > power){
//         return;
//     }
//     exp = base ** sp;
//     sp++;
//     powerbase();

// }
// powerbase();
// console.log(exp);

//or
// let sp = 1;
// let base = 2;
// let power = 5;
// let exp;
// function powerbase(){
    
//     if(sp > power){
//         return;
//     }
//     exp = base ** sp;
//     sp++;
//     powerbase();
    

// }
// powerbase();
// console.log(exp);

//PRIME NUMBER
//non return-type
// let num = 3;
// let sp = 1;
// let ep = num;
// let count = 0;
// function primenumber(){
//     if(sp > ep){
//         return;
//     }
//     if(num % sp == 0){
//         count++;
//     }
//     sp++;
//     primenumber();
// }
// primenumber();
// if(count == 2){
//     console.log(num, "is prime number");
    
// }
// else{
//     console.log(num, "is not prime number");
    
// }

//FIBONACCI SERIES
// let num = 8;
// let sp = 1, ep = num - 2;
// let a = 0; b = 1;
// for(sp ; sp <= 1; sp++){
//     console.log(a);
//     console.log(b);

// for(sp; sp <= 2; sp++){
//     sum = a + b;
// }
// console.log(sum);

// for(sp; sp <= ep; sp++){
//     a = b;
//     b = sum;
//     sum = a + b;
//     console.log(sum);
// }
// }













