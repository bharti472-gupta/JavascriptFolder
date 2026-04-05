//UNARY OPERATORS

//INCREMENT

//POST
//Q1.

// let a = 5;

// console.log("a = ",a);

// a ++;

// console.log("a = ",a);

// a ++;

// console.log("a = ",a);

// Output:-
// a =  5
// a =  6
// a =  7

// let a = 5;

// console.log("a = ",a);

// console.log("a = ",a ++ , a);

// console.log("a = ",a);

// Output:
// a =  5
// a =  5  6
// a =  6


//Q2.
// let a = 5;

// console.log("a = ",a);

// a ++;

// console.log("a = ",a);

// console.log("a = ",a ++);

// a ++;

// console.log("a = ",a);

//Output:
// a =  5
// a =  6
// a =  6
// a =  8


//PRE

//Q1.

// let a = 10;

// console.log("a = ",a);

// ++ a;

// console.log("a = ",a);

// Output:
// a =  10
// a =  11


//Q2.

//SOLVED IN COPY

//COMPARISION OPERATOR

// console.log(5 > 1);   //true
// console.log(5 >= 5);  //true
// console.log(4 < 6);  //true
// console.log(9 <= 9);  //true
// console.log(9 < 1);    //false
// console.log(1 > 1);     //false


// console.log(1 == 1);   //true
// console.log(9 == 67);   //false
// console.log(67  == "67");  //true
// console.log(67  === 67);   //true
// console.log(67  === "67");  //false
// console.log(1 != 4);    //true
// console.log(1 != 1);    //false
// console.log(1 != "1");    //false
// console.log(1 !== 4);      //true
// console.log(1 !== "4");     //true
// console.log("1" !== "1");      //false
// console.log(1 !== "1");    //true


//PRACTICE SET
//SECTION - 1 (UNARY OPERATORS)

//Q1.
// let a = 5;
// console.log("Before = ",a);   //5
// a++;
// console.log("a = ",a++);  //6
// console.log("after = ",a);    //7

//Q2.
// let b = 5;
// console.log("before = ",b);   //5
// --b;
// console.log("b = ",--b);  //3
// console.log("after = ",b);    //3

//Q3.

//  let a = 5;

//   a++;

//   console.log("Post - increment result :", a++);//6

//   ++a;

//   console.log("Pre - increment result :", ++a);//9

// Output:
// Post - increment result : 6
// Pre - increment result : 9


//  let a = 5;
//  console.log("Post - increment result :", a++);
//  console.log("Pre - increment result :", ++a);

// output:
//  Post - increment result : 5
//  Pre - increment result : 7

//Q4.

// let a = 10;

// console.log("Integer Operations :");
// console.log("a = ",a);    //10
// console.log("a = ",a++);   //10
// console.log("a = ",a);      //11
// console.log("a = ",++a);    //12
// console.log("a = ",a--);    //12
// console.log("a = ",a);       //11
// console.log("a = ",--a);     //10


//BIGINT
// let b = 100000n;

//  console.log("Integer Operations :");
//  console.log("Initial b = ",b);    //100000n
//   console.log("Post - increment = ",b++);   //100000n
//  console.log("After = ",b);      //100001n
//  console.log("Pre - increment = ",++b);    //100002n
//  console.log("Post - decrement = ",b--);    //100002n
//  console.log("After = ",b);       //100001n
//  console.log("Pre - decrement = ",--b);     //100000n

//FLOAT

// let c = 2.5;

// console.log("Integer Operations :");
// console.log("Initial c = ", c);    
// console.log("Post - increment = ", c++);   
// console.log("After = ", c);      
// console.log("Pre - increment = ", ++c);  
// console.log("Post - decrement = ", c--);    
// console.log("After = ", c);      
// console.log("Pre - decrement = ", --c);  

// Output:
// Integer Operations :
// Initial c =  2.5
// Post - increment =  2.5
// After =  3.5
// Pre - increment =  4.5
// Post - decrement =  4.5
// After =  3.5
// Pre - decrement =  2.5

//DOUBLE 

//  let d = 10.75;
 
//  console.log("Integer Operations :");  
//  console.log("Initial d = ", d);    
//  console.log("Post - increment = ", d++);   
//  console.log("After = ", d);      
//  console.log("Pre - increment = ", ++d); 
//  console.log("Post - decrement = ", d--);   
//  console.log("After = ", d);    
//  console.log("Pre - decrement = ", --d);

//  Output:
//  Integer Operations :
//  Initial d =  10.75
//  Post - increment =  10.75
//  After =  11.75
//  Pre - increment =  12.75
//  Post - decrement =  12.75
//  After =  11.75
//  Pre - decrement =  10.75

//Q5.

// let x = 5;

// console.log("x = ",x);    //5
// x++;

// console.log("x = ",x);     //6
// ++x;

// console.log("x = ",x);     //7
// x--;

// console.log("x = ",x);   //6
// --x;

// console.log("x = ",x);     //5



// let x = 5;

// console.log("x = ", x++);  //5

// console.log("x = ", ++x);  //7

// console.log("x = ", x--);  //7

// console.log("x = ", --x);  //5


//Q6.

// let x = 5;
// let result = x++ + ++x + --x + x--;    //5 + 7 + 6 + 6
// console.log("Result = ",result);
// console.log("x = ",x);

// Output:
// Result =  24
// x =  5


//Q7.

// let a = 10;
// console.log(a++);  //10
// console.log(++a);  //12
// console.log(a--);   //12
// console.log(--a);   //10

//COMPARISION OPEARTORS

//SECTION-2

//Q8.

// console.log("Using == : ? ");
// console.log(5 == 5);   //true
// console.log("Using === : ? ");
// console.log(5 === 5);   //true


//Q9.

// console.log(9 < 12);
// console.log(" 9 is less than 12");


// console.log(9 > 12);
// console.log(" 12 is greater than 9");


// console.log(9 == 12);
// console.log(" 9 is not equal to 12");

// Output:
// true
//  9 is less than 12
// false
//  12 is greater than 9
// false
//  9 is not equal to 12

// let a = 9;
// let b = 12;

// if (a > b) {
//     console.log(a, "is greater than", b);
// } 
// else if (a < b) {
//     console.log(a, "is less than", b);
// } 
// else {
//     console.log(a, "is equal to", b);
// }

//Q10.

// console.log(10 != 20);   //true
// console.log(10 !== 20 );   //true
// console.log(10 !== "20" );  //true
// console.log("10" !== "10" );  //false
// console.log(10 !== "10" );    //true

//Q11.
// console.log(10 != 20); //true
// console.log(10 == 20); //false
// console.log(10 <= 10);  //true
// console.log(10 <= 20);   //true
// console.log(10 >= 20);   //false
// console.log(10 > 20);    //false
// console.log(10 < 20);    //true

//SECTION-3

//DATA TYPE COMPARISION

//Q12.
// let a = 100000n;
// let b = 100000n;

// console.log("a == b :", a == b);    // true
// console.log("a === b :", a === b);   //true
// console.log("a != b :", a != b);     //false
// console.log("a !== b :", a !== b);   //false
// console.log("a > b :", a > b);       //false
// console.log("a < b :", a < b);       //false
// console.log("a >= b :", a >= b);     //true
// console.log("a <= b :", a <= b);     //true

//Q13.
// let a = 5.5;
//  let b = 3.3;

//  console.log("a == b :", a == b);    // false
//  console.log("a === b :", a === b);   //false
//  console.log("a != b :", a != b);     //true
//  console.log("a !== b :", a !== b);   //true
//  console.log("a > b :", a > b);       //true
//  console.log("a < b :", a < b);       //false
//  console.log("a >= b :", a >= b);     //true
//   console.log("a <= b :", a <= b);    //false


//Q14.
//   let a = 100.25;
//   let b = 100.25;
 
//   console.log("a == b :", a == b);    // true
//   console.log("a === b :", a === b);   //true
//   console.log("a != b :", a != b);     //false
//   console.log("a !== b :", a !== b);   //false
//   console.log("a > b :", a > b);       //false
//   console.log("a < b :", a < b);       //false
//   console.log("a >= b :", a >= b);     //true
//    console.log("a <= b :", a <= b);    //true


//Q15.

//    let a = true;
//    let b = false;
  
//    console.log("a == b :", a == b);    // false
//    console.log("a === b :", a === b);   //false
//    console.log("a != b :", a != b);     //true
//    console.log("a !== b :", a !== b);   //true
//    console.log("a > b :", a > b);       //true
//    console.log("a < b :", a < b);       //false
//    console.log("a >= b :", a >= b);     //true
//    console.log("a <= b :", a <= b);    //false

//SECTION - 4

//Q16.dubt?





//Q17.
//  console.log("5" == 5);   //true
//  console.log("5" === 5);   //false

//Q18.doubt?
// console.log(10 >= "5");  //true

//Q19.doubt?

//  console.log(null == undefined);  //true
//  console.log(null === undefined);  //false

//Q20.
// console.log(true == 1);   //true
// console.log(true === 1);  //false
// console.log(false == 0);  //true
// console.log(false === 0);  //false

//Q21.
// let x = 5;
// console.log(x++ + ++x);   // 5 + 7 = 12


//Q22.
// let a = 5;
// let b = 10;
// console.log(a++ < ++b);   //true
// console.log(--a == b--);  //false
// console.log(a >= b);      //false
 

//Q23.
// doubt ?




































