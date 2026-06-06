//REDUCE

// let arr = [1,2,3,4];
// let ans = arr.reduce((acc, ele) => (acc + ele),0)
// console.log("ans = ",ans);

// let arr = [1,2,3,4];
// let ans = arr.reduce((multi, ele) => (multi * ele),1)
// console.log("ans = ",ans);

// let arr = [1, 2, 3, 4];
// let ans = arr.reduce((multi, ele) => {
//     console.log("Multi = ",multi ,"ele = ",ele);

//     return (multi * ele)
// }
//         , 1)

// console.log("ans = ",ans);

//FILTER

// let arr = [1,2,3,4,11,22,333,44,55,66];
// console.log(arr);

// let newarr = arr.filter(function(ele) {
//     if(ele % 2 == 0)
//         return ele;
// })
// console.log(newarr);


// let arr = [1,2,3,4,11,22,333,44,55,66];
// console.log(arr);

// let newarr = arr.filter(function(ele) {
//     if(ele % 2 == 1)
//         return ele;
// })
// console.log(newarr);

//MUTATING
//PUSH

// let arr = [11,22,33];
// console.log("arr = ",arr);
// arr.push(60,80,90);
// console.log("arr = ",arr);

//POP

// let arr = [11,22,33];
// console.log("arr = ",arr);
// arr.pop();
// console.log("arr = ",arr);
// arr.pop();
// console.log("arr = ",arr);

//UNSHIFT

// let arr = [11,22,33,66,99,432];
//  console.log("arr = ",arr);
// arr.unshift(44,78,90);
// console.log("arr = ",arr);

//SHIFT

// let arr = [33,78,56,44,56,99];
// console.log("arr = ",arr);
// arr.shift();
// console.log("ans = ",arr);
// arr.shift();
// console.log("ans = ",arr);

//SPLICE

// let arr = [55,99,22,13,24,56,67,90];
// arr.splice(1,5,67,89);
// console.log("ans = ",arr);

// let arr = [55,99,22,13,24,56,67,90];
// arr.splice(3,0,67,89);
// console.log("ans = ",arr);

// let arr = [55,99,22,13,24,56,67,90];
// arr.splice(3,1,67,89);
// console.log("ans = ",arr);

//SORT

// let arr = [22,88,66,77,55,33,1];
// console.log("ans = ",arr);
// arr.sort((a,b) => a - b );
// console.log("ans = ",arr);

// let arr = [22,88,66,77,55,33,1];
// console.log("ans = ",arr);
// arr.sort((a,b) => b - a );
// console.log("ans = ",arr);

//REVERSE

// let arr = [101,11,45,22,5,33,9,44];
// console.log("arr = ",arr);
// arr.reverse();
// console.log("arr = ",arr);


//NON - MUTATING

//CONCAT

// let arr1 = [1,2,3];
// let arr2 = [11,22,33];
// console.log("arr1 = ",arr1);
// console.log("arr2 = ",arr2);
// let arr3 = arr1.concat(arr2);
// console.log("arr3 = ",arr3);

//SLICE

// let arr = [101,11,45,22,5,33,9,44];
// console.log("arr = ",arr);
// let newarr = arr.slice(1,5);
// console.log("newarr = ",newarr);


//SPREAD OPERATOR 

//  let arr = [11,33,55,66,99];
// console.log(...arr);
// console.log(...[arr]);

// let arr = [11,33,55,66,99];
// let newarr = [arr];
// console.log(newarr);

// let arr = [11,33,55,66,99];
// let newarr = [...arr];
// console.log(newarr);

// let arr1 = [22,67,89,45];
// console.log("arr1 = ",arr1);

// let arr2 = [22,67,89,45];
// console.log("arr2 = ",arr2);

// let arr3 = [...arr1 , ...arr2];
// console.log("arr3 = ",arr3);


// REST OPERATOR

// function fun(...arr){
//     arr.forEach((ele) => console.log(ele))

// }

// fun(22,44,66,77,88)

//FIND

// let arr = [5,6,45,8,9];
// let ans = arr.find(num =>
//      num > 12);
// console.log(ans);

//Array()
// let arr = [5,6,45,8,9];
// let arr = (5,6,45,8,9);
// let arr = new Array(6, 6,8,9);
// console.log(Array.isArray(arr));

// let arr = new Array(6);  
// console.log(arr);

//Array.from()
// let str = "Cagers";
// let arr = Array.from(str);
// console.log(arr);

//Array.of()
// let arr =Array.of(6); 
// console.log(arr);

//Practice set - mordern loops and array methods

//Q1.
// let arr = [10, 20 , 30];
// for(let ele of arr){
//     console.log(ele);

// }

//Q2.
// let arr = [5, 10, 15];
//  for(let ele in arr){
// console.log(" i = ",ele , "element = ",arr[ele]);
//  }

//Q3.
// let arr = [2,3,4];
// arr.forEach(function(ele){
//     console.log(ele * ele);

// });


//Q4.
// let arr = [10,20,30];
// console.log(arr);
// let newarr = arr.map(function(ele){
//     return ele + ele;
// });
// console.log(newarr);

//Q5.
// let arr = [2,3,4];
// console.log(arr);
// let newarr = arr.map(function(ele){
//     return ele * ele * ele;
// });
// console.log(newarr);

//Q6.
// let arr = [10,25,30,15];
// let newarr = arr.filter(function(ele){
//    return ele > 20;
// })
// console.log(newarr);

//Q7.
// let arr = [1,2,3,4,5,6];
// let newarr = arr.filter(function(ele){
//     if(ele % 2 == 0)
//    return ele;
// })
// console.log(newarr);

//Q8.
// let arr = [10,20,30];
// let ans = arr.reduce((sum,ele) => (sum + ele) , 0);
// console.log("Sum of all elements = ",ans);

//Q9.
// let arr = [5,15,25,10];

// let ans = arr.reduce((max, ele) => {

//     if(max < ele){
//         return ele;
//     }
//     else{
//         return max;
//     }

// }, -999999999);

// console.log(ans);

//Q10.
// let arr = [1,2,3];
// console.log(arr);

// let newarr = [...arr];
// console.log(newarr);


//Q11.
// let arr1 = [1,2,3];
// console.log(arr1);

// let arr2 = [4,5,6];
// console.log(arr2);

// let arr3 = [...arr1 , ...arr2];
// console.log(arr3);


//Q12.

// function add(...arr){
//     let sum = 0;
//     arr.forEach((ele) => console.log(sum = sum + ele))

// }
//  add(10,20,30,40)


//OR
//  function add(...arr){

//     let sum = 0;

//     arr.forEach((ele) => {
//         sum = sum + ele;
//     });

//     console.log(sum);
// }

// add(10,20,30,40);


//Q13.
// let str  = "hello";
// let newstr = Array.isArray(str);
// console.log(newstr);

//Q14.
// let str = "JS";
// let newstr = Array.from(str);
// console.log(newstr);

//Q15.
// let arr = Array.of(5);
// console.log(arr);


















































































































































































































































































































































































































































































































































































































































































































