
//TEST-PRACTICE(20 MARKS)

// let arr = [2,3,4,5];
// let fac = 1;
// for(let i = 1; i <= arr[2]; i++){
//     fac = fac * i;
// }
// console.log(fac);


// let arr = [2, 4 ,  3 , 6 , 5 , 7 , 9];
// let count = 0;
// let count2 = 0;
// for(i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0 ){
//         count++;
//     }
//     else{
//         count2++;
//     }
// }
// console.log("even count = ",count);
// console.log("odd count = ",count2);

// let arr = [10 , 50 , 20];
// if(arr[0] > arr[1] && arr[2]){
//    console.log(arr[0], "is max");

// }
// else if(arr[1] > arr[0] && arr[2]){
//     console.log(arr[1], "is max");
// }
// else if(arr[2] > arr[0] && arr[1]){
//     console.log(arr[2], "is max");
// }
// else{
//     console.log("no one is max");

// }

//Sessions - Topics

//even and odd seperate arrays
// let arr = [11, 2, 33, 44, 12, 55, 6, 77];
// for(let i = 0; i < arr.length ; i++){
//     process.stdout.write(`${arr[i]}  `);
// }
// process.stdout.write("\n");
// let evenarr=[];
// let oddarr=[];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//        evenarr[evenarr.length]=arr[i];
//     }
//     else{
//         oddarr[oddarr.length]=arr[i];
//     }
// }

//  console.log("Arr : ",arr);
// console.log("EvenArr : ",evenarr);
// console.log("OddArr : ",oddarr);

//Merging
// let arr1 = [11, 22, 33];
// let arr2 = [99,88];
// console.log("Arr1 = ",arr1);
// console.log("Arr2 = ",arr2);
// let arr3 = [];
// for(let i = 0; i < arr1.length; i++){
//     arr3[arr3.length] = arr1[i];
// }
// for(let i = 0; i < arr2.length; i++){
//     arr3[arr3.length] = arr2[i];
// }
// console.log("arr3 = ",arr3);


//MAX AND MIN
// let arr = [11 , 22, 33, 3, 44, 21];
// let arr = [11 , 8, 33, 3, 2, 1];
// let max = -999999999;
// let min = 999999999;

// for(let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
//     if(min > arr[i]){
//         min = arr[i];
//     }
// }
// console.log(max);
// console.log(min);

//Reverse numbers
// let arr = [11, 12, 13, 14];
// let arr2 = [];
// console.log("Arr = ",arr);
// for(i = arr.length - 1; i >= 0; i--){
//     arr2[arr2.length]=arr[i];
// }
// console.log("Reverse elements = ",arr2);


//for in loop
// let arr = [11, 22, 33, 3, 44, 21];
// for(let i in arr){
//     console.log("i = ",i, "Element = ",arr[i]);

// }

//Output
// i =  0 Element =  11
// i =  1 Element =  22
// i =  2 Element =  33
// i =  3 Element =  3
// i =  4 Element =  44
// i =  5 Element =  21


//forEach loop
// let arr = [11, 22, 33, 3, 44, 21];
// arr.forEach(function(ele){
// console.log(ele);

// });

//Output
// 11
// 22
// 33
// 3
// 44
// 21

//OR
// let arr = [11, 22, 33, 3, 44, 21];
// arr.forEach((value)=>{
// console.log(value);

// });

//Output
// 11
// 22
// 33
// 3
// 44
// 21

//OR
// let arr = [11, 22, 33, 3, 44, 21];
// arr.forEach((value , index)=>{
// console.log(value, " : ",index);

// });

//Output
// 11  :  0
// 22  :  1
// 33  :  2
// 3  :  3
// 44  :  4
// 21  :  5

//OR
//  let arr = [11, 22, 33, 3, 44, 21];
// arr.forEach((value , index)=>console.log(value, " : ",index));
//Output
// 11  :  0
// 22  :  1
// 33  :  2
// 3  :  3
// 44  :  4
// 21  :  5

//Map
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let newarr = arr.map(function(ele){
// return ele * ele;
// });
// console.log(newarr);

//SEARCHING
// let arr = [11, 2, 5, 12];
// let num = 12;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == num){
//         console.log(num,"is found ");

//     }
// }

//ANOTHER METHOD
// let arr = [1,2,3,4,5];
// let num = 5;
// console.log(arr);
//  let flag = false;
// for(let i = 0; i < arr.length; i++){
// if(num == arr[i]){
//    flag = true;
//    console.log(flag);

//     break;
// }
// }
// if(flag == false){
//     console.log("Flag not found");

// }

//SORTING(ASCENDING ORDER)

// let arr = [11, 2, 13, 4, 15];
// let arr = [99 , 66, 1, 0 , 45];
// console.log("original order = ",arr);
// for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log("ascending order = ",arr);

// Output
// original order =  [ 11, 2, 13, 4, 15 ]
// ascending order =  [ 2, 4, 11, 13, 15 ]


// SORTING(DESCENDING ORDER)

// let arr = [99 , 66, 1, 0 , 45];
// console.log("original order = ",arr);
// for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] < arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }                                                                                                                                
//     }
// }
// console.log("Descending order = ",arr);

// Output
// original order =  [ 99, 66, 1, 0, 45 ]
// Descending order =  [ 99, 66, 45, 1, 0 ]

//PRACTICE SET - ARRAY QUESTIONS

//Q1.
// let n = Number(prompt("Enter Your Number = "));
// let arr = [];
// for(let i = 0; i < n; i++){
//      arr[i] = Number(prompt("Enter Your Number = "));
// }
// console.log("Arr = ",arr);

//Q2.
// let arr = [];
// let n = Number(prompt("Enter size of array:"));

// function input() {
//     for(let i = 0; i < n; i++) {
//         arr[i] = Number(prompt("Enter value:"));
//     }
// }

// function output() {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// input();
// output();

//Q3.
// let n =  Number(prompt("Enter Your Number = "));
// let sum = 0;
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = Number(prompt("Enter Your Number = "));
//     sum = sum + arr[i];
// }
// console.log("Sum = ", sum);

//Q4.
// let n = Number(prompt("Enter Your Number = "));
// let arr = [];
// let sum = 0;
// for(let i = 0; i < n; i++){
//     arr[i] = Number(prompt("Enter Your Number = "));
//     sum = sum + arr[i];
// }
//  let avg = sum / n;
// console.log("average =",avg);

//Q5.
// let n = Number(prompt("Enter Your Number = "));
// let arr = [];
// for(let i = 0; i < n; i++){
//     arr[i] = Number(prompt("Enter Your Number = "));
// }
// console.log("Original arr = ",arr);

// let revarr = [];

// for(let i = arr.length - 1; i >= 0; i--){
//     revarr[revarr.length] = arr[i];
// }
// console.log("Reversed arr = ",revarr);


//Q6.
// let n = Number(prompt("Enter Your Number = "));
// let arr = [];
// let product = 1;
// for(let i = 0; i < n; i++){
//     arr[i] = Number(prompt("Enter Your Number = "));
//     product = product * arr[i];
// }
// console.log("Product = ",product);


//Q7.
// let n = Number(prompt("Enter Your Number = "));
// let arr = [];
// let sum = 0;
// let count = 0;
// let sum2 = 0;
// let count2 = 0;
// for (i = 0; i < n; i++) {
//      arr[i] = Number(prompt("Enter Your Number = "));
//     if(arr[i] % 2 == 0){
//         console.log(arr[i]);
//         count++;
//         sum = sum + arr[i];

//     }
//     else{
//         console.log(arr[i]);
//         count2++;
//         sum2 = sum2 + arr[i];
//     }
// }
// console.log(sum);
// console.log(sum2);
// console.log(count);
// console.log(count2);
// let avg1 = sum / count;
// console.log("Average of even numbers = ",avg1);
// let avg2 = sum2 / count2;
// console.log("Average of odd numbers = ",avg2);

//Q8.
// let n = Number(prompt("Enter Your number"));
// let arr = [];
// for(let i = 0; i < n; i++){
//     arr[i] = Number(prompt("Enter Your number"));
//     if(arr[i] == 0 || arr[i] == 1 ){
//         console.log(arr[i]);
        
//     }
// }

//OR
// let n = Number(prompt("Enter Your number"));
// let arr = [];
// let newarr = [];
// for(let i = 0; i < n; i++){
//     arr[i] = Number(prompt("Enter Your number"));
//     if(arr[i] == 0 || arr[i] == 1 ){
//         newarr[newarr.length] = arr[i];
        
//     }
// }
// console.log(newarr);


//Q9.
// let n =  Number(prompt("Enter Your Array size"));
// let arr =[];
// for(let i = 0; i < n; i++){
//     arr[i] = Number(prompt("Enter Your array elements"));
// }
// console.log("Original Array = ",arr);

// let index = Number(prompt("Enter Your Index number"));
// console.log("Index Value = ",arr[index]);


//Q10.
// let arr1 = [4,9,7,2,11];
// let arr2 = [6,3,8,5];
// console.log("Arr1 = ",arr1);
// console.log("Arr2 = ",arr2);
// let arr3 = [];
// for(let i = 0; i < arr1.length; i++){
//     arr3[arr3.length] = arr1[i];
// }
// for(let i = 0; i < arr2.length; i++){
//     arr3[arr3.length] = arr2[i];
// }
// console.log("arr3 = ",arr3);




//Q11.
// let n = Number(prompt("Enter Your Number = "));
// let arr = [];
// let sumofeven = 0;
// let sumofodd = 0;
// for(let i = 0; i < n; i++){
//   arr[i] = Number(prompt("Enter Your Number = "));
//     if(arr[i] % 2 == 0){
//         sumofeven = sumofeven + arr[i];
//     }
//     else{
//         sumofodd = sumofodd + arr[i];
//     }
// }  
// console.log("Sum of even numbers = ",sumofeven);
// console.log("Sum of odd numbers = ",sumofodd);


//Q12.
// let n = Number(prompt("Enter Your Number = "));
// let arr = [];
// let evenarr = [];
// let oddarr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = Number(prompt("Enter Your Number = "));
//     if (arr[i] % 2 == 0) {
//         evenarr[evenarr.length] = arr[i];
//     }
//     else {
//         oddarr[oddarr.length] = arr[i];
//     }
// }
// console.log("Original Array = ", arr);
// console.log("Even Array = ", evenarr);
// console.log("Odd Array = ", oddarr);


//Q13.
// let n = Number(prompt("Enter Your Number = " ));
// let arr =[];
// let max = -99999999;
// let min = 99999999;
// for(let i = 0; i < n; i++){
//     arr[i] = Number(prompt("Enter Your Number = " ));
//     if(max < arr[i]){
//         max = arr[i];
//     }
//     if(min > arr[i]){
//         min = arr[i];
//     }
// }
// console.log("Largest element = ",max);
// console.log("Smallest element = ",min);

//Q14.
// let arr = [3,2,4,7,2,9,5,1,2];

// let repeat;

// for(let i = 0; i < arr.length; i++){

//     count = 1;

//     for(let j = i + 1; j < arr.length; j++){

//         if(arr[i] == arr[j]){
//             count++;
//             repeat = arr[i];
//         }
//     }

//     if(count > 1){
//         console.log(repeat , "is repeated, count =", count);
//         break;
//     }
// }


//Q15.
// let n = Number(prompt("Enter Your Number = "));
// let number = Number(prompt("Enter Your Number = "));
// let arr = [];
// let flag = false;
// for(let i = 0; i < n; i++){
//     arr[i] =  Number(prompt("Enter Your Number = "));
// }
// for(let i = 0; i < n; i++){
//     if(number == arr[i]){
//         flag = true;
//         console.log(flag);
//         break;
        
//     }
// }
// if(flag == false){
//     console.log("Number not found");
    
// }

//Q16.
// let arr = [2, 7, 9, 5, 6];
// console.log(arr);

// let revarr = [];
// for(let i = arr.length - 1; i >= 0; i--){
//   revarr[revarr.length] = arr[i];

// }
// console.log(revarr);

//Q17.
// let n = Number(prompt("Enter Your Number = "));
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = Number(prompt("Enter Your Number = "));
// }
// let originalArr = [...arr];    //...(dot) is spread operator which  open the array and copy items
// console.log(originalArr);

// for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log("Ascending order = ", arr);

//Q18.
// let n = Number(prompt("Enter Your Number = "));
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = Number(prompt("Enter Your Number = "));
// }
// let originalArr = [...arr];    //...(dot) is spread operator which  copies all elements into a new array
// console.log( "Orignal order = ",originalArr);

// for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//         if (arr[i] < arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log("Descending order = ", arr);

//Q19.
// let arr = [3,7,9,2,4];
// let num = 2;
// console.log("Original Array = ",arr);
// let newarr = [];
// for(let i = 0; i < arr.length; i++){
//     if(num == arr[i]){
//         continue;
//     }
//    newarr[newarr.length] = arr[i];

   
// }
// console.log("Newarr = ",newarr);