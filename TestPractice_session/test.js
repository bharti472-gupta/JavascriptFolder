
// VARIABLE PRACTICE SET


// Q1.


// let a = String(10);
// console.log("a = ",a , "Type = ",typeof(a));

// let b = String(5.5);
// console.log("b = ",b , "Type = ",typeof(b));

// let c = Number("A");
// console.log("c = ",c , "Type = ",typeof(c));


// let d = Boolean(10);
// console.log("d = ",d , "Type = ",typeof(d));

// let e = Boolean(5.5);
// console.log("e = ",e , "Type = ",typeof(e));

// let f = Boolean("A");
// console.log("f = ",f , "Type = ",typeof(f));

// Output:
// a =  10 Type =  string
// b =  5.5 Type =  string
// c =  NaN Type =  number
// d =  true Type =  boolean
// e =  true Type =  boolean
// f =  true Type =  boolean

// let a = 10;
// console.log("Value =", a.toString(), "Type = ", typeof (a.toString()));

// let b = 5.5;
// console.log("Value =", b.toString(), "Type = ", typeof (b.toString()));

// Output:
// Value = 10 Type =  string
// Value = 5.5 Type =  string


// Q2.

// let a = 10;
// console.log("Value = ",a , "Type = ",typeof(a));

// let b = "bharti";
// console.log("Value = ",b , "Type = ",typeof(b));

// let bool = true;
// console.log("Value = ",bool , "Type = ",typeof(bool));

// let x;
// console.log("Value = ",x , "Type = ",typeof(x));

// let y = null;
// console.log("Value = ",y , "Type = ",typeof(y));

// Output:
// Value =  10 Type =  number
// Value =  bharti Type =  string
// Value =  true Type =  boolean
// Value =  undefined Type =  undefined
// Value =  null Type =  object


// Q3.

// let a = 3;
//  let b = 5;
//  let sum = a + b;
//  console.log("Sum : ",sum , "Type :",typeof(sum));

//  Output:
//  Sum :  8 Type : number



// Q4.

// let a = 9;
// let b = 7;
// c = a;
// a = b;
// b = c;
// console.log("a = ",a , "Type = ",typeof(a) , "b = ",b , "Type = ",typeof(b));

// Output:
// a =  7 Type =  number b =  9 Type =  number

// Q10.

// let num = parseInt("7.85");
// console.log("Value =",num , "Type = ",typeof(num));

// Output:
// Value = 7 Type =  number


// Q12.

// let a = 10;
// let b = 4.5;
// let c = "Z";

// console.log("a = ",a , "Type = ",typeof(a) , "b = ",b , "Type = ",typeof(b) , "c = ",c , "Type = ",typeof(c));

// Output:
// a =  10 Type =  number b =  4.5 Type =  number c =  Z Type =  string

// Q13.

// let name = "A";
// let age = 18;
// let percentage = 92.5;
// console.log("Name = ",name , "Type = ",typeof(name), "Age = ",age , "Type = ",typeof(age), "Percentage = ",percentage , "Type = ",typeof(percentage));

// Output:
// Name =  A Type =  string Age =  18 Type =  number Percentage =  92.5 Type =  number



// DATA TYPE CONVERSIONS PRACTICE SET


//Q1.

// let num = String(100);
// console.log("Value = ",num , "Type = ",typeof(num));

// console.log("Value = ",num.toString() , "Type = ",typeof(num.toString()));

// Output:
// Value =  100 Type =  string
// Value =  100 Type =  string



//Q2.

// let value = String(false);
// console.log("Value = ",value , "Type = ",typeof(value));

// console.log("Value = ",value.toString() , "Type = ",typeof(value.toString()));

// Output:
// Value =  false Type =  string
// Value =  false Type =  string


// let value = String(500);
// console.log("Value = ", value, "Type = ", typeof (value));

// console.log("Value = ", value.toString(), "Type = ", typeof (value.toString()));

// Output:
// Value = 500 Type = string
// Value = 500 Type = string

//Q3. same as Q1.

//Q4.

// let str = Number("55");
// console.log("Number = ",str , "Type = ",typeof(str));

// let str1 = parseInt("55");
// console.log("Number = ",str1 , "Type = ",typeof(str1));

// Output:
// Number =  55 Type =  number
// Number =  55 Type =  number

// let str2 = parseFloat("55.8798600000000");
// console.log("Number = ",str2 , "Type = ",typeof(str2));

// Output:
// Number =  55.87986 Type =  number


//Q5.

// let str3 = parseInt("45.89");
// console.log("Number = ",str3 , "Type = ",typeof(str3));

// Output:
// Number =  45 Type =  number


//Q6.

// let str4 = parseFloat("23.56");
// console.log("Number = ",str4 , "Type = ",typeof(str4));

// Output:
// Number =  23.56 Type =  number

//Q7.

// let str = + "45";
// console.log("Value =",str , "Type = ",typeof(str));

// Output:
// Value = 45 Type =  number

//Q8.

// let bool = Boolean(1);
// console.log("Value =",bool , "Type = ",typeof(bool));

// let bool1 = Boolean(0);
// console.log("Value =",bool1 , "Type = ",typeof(bool1));

// let bool2 = Boolean("Hello");
// console.log("Value =",bool2 , "Type = ",typeof(bool2));

//  let bool3 = Boolean("");
// console.log("Value =",bool3 , "Type = ",typeof(bool3));

//  let bool4 = Boolean(true);
//  console.log("Value =",bool4 , "Type = ",typeof(bool4));

//  let bool5 = Boolean(false);
//  console.log("Value =",bool5 , "Type = ",typeof(bool5));

//  let bool6 = Boolean({});
// console.log("Value =",bool6 , "Type = ",typeof(bool6));

//  let bool7 = Boolean([]);
//  console.log("Value =",bool7 , "Type = ",typeof(bool7));

//  let bool8 = Boolean(undefined);
//  console.log("Value =",bool8 , "Type = ",typeof(bool8));

//  let bool9 = Boolean(null);
//  console.log("Value =",bool9 , "Type = ",typeof(bool9));


// Output:
// Value = true Type =  boolean
// Value = false Type =  boolean
// Value = true Type =  boolean
// Value = false Type =  boolean
// Value = true Type =  boolean
// Value = false Type =  boolean
// Value = true Type =  boolean
// Value = true Type =  boolean
// Value = false Type =  boolean
// Value = false Type =  boolean


//Q9.

// let res = "5" + 5;
// console.log("Value = ",res , "Type = ",typeof(res));

//Q10.

// let res1 = "7" - 5;
// console.log("Value = ",res1 , "Type = ",typeof(res1));

// Output:
// Value =  55 Type =  string
// Value =  2 Type =  number

//Q11.

// let str5 = Number("10px");
// console.log("Value = ",str5 , "Type = ",typeof(str5));

// let str6 = parseInt("10px");
// console.log("Value = ",str6 , "Type = ",typeof(str6));

// Output:
// Value =  NaN Type =  number
// Value =  10 Type =  number


//Q12.

// let str7 = Number("abc");
// console.log("Value = ",str7 , "Type = ",typeof(str7));

// Output:
// Value =  NaN Type =  number

//Q13.
//  let a = Boolean(0);
//  console.log("Value = ",a , "Type = ",typeof(a));

//  let b = Boolean("0");
//  console.log("Value = ",b , "Type = ",typeof(b));

//  let c = Boolean(null);
//  console.log("Value = ",c, "Type = ",typeof(c));

//  let d = Boolean([]);
//  console.log("Value = ",d , "Type = ",typeof(d));

// Output:
//  Value =  false Type =  boolean
// Value =  true Type =  boolean
// Value =  false Type =  boolean
// Value =  true Type =  boolean

//Q14.

// let str9 = Number("15px");
// console.log("Value = ",str9 , "Type = ",typeof(str9));

// let str10 = parseInt("15px");
// console.log("Value = ",str10 , "Type = ",typeof(str10));

// Output:
// Value =  NaN Type =  number
// Value =  15 Type =  number


//Q15.

// let str = Number("");
// console.log("Value = ",str , "Type = ",typeof(str));

// Output:
// Value =  0 Type =  number


//Q16.

// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean("false"));
// console.log(Boolean(null));

// Output:
// false
// false
// true
// false

//Q17.

// let a = Number("25");
// console.log("Value = ",a , "Type = ",typeof(a));

// let a1 = parseInt("25");
// console.log("Value = ",a1 , "Type = ",typeof(a1));

// let b = String(true);
// console.log("Value = ",b , "Type = ",typeof(b));
// console.log("Value = ",b.toString() , "Type = ",typeof(b.toString()));

// let b1 = Number(true);
// console.log("Value = ",b1 , "Type = ",typeof(b1));

// let b2 = Number(false);
// console.log("Value = ",b2 , "Type = ",typeof(b2));

// let b3 = + (false);
// console.log("Value = ",b3 , "Type = ",typeof(b3));

// let b4 = + (true);
// console.log("Value = ",b4 , "Type = ",typeof(b4));

// let b5 = 3 + (true);
// console.log("Value = ",b5 , "Type = ",typeof(b5));

// let b6 = 3 + (false);
// console.log("Value = ",b6 , "Type = ",typeof(b6));

// let best = "55" + (true);
// console.log("Value = ",best , "Type = ",typeof(best));


// Output:
// Value =  25 Type =  number
// Value =  25 Type =  number
// Value =  true Type =  string
// Value =  true Type =  string
// Value =  1 Type =  number
// Value =  0 Type =  number
// Value =  0 Type =  number
// Value =  1 Type =  number
// Value =  4 Type =  number
// Value =  3 Type =  number
// Value =  55true Type =  string


//Q18.

// let str = parseInt("100kg");
// console.log("Value = ",str , "Type = ",typeof(str));

// let str2 = parseFloat("100kg");
// console.log("Value = ",str , "Type = ",typeof(str));

// Output:
// Value =  100 Type =  number
// Value =  100 Type =  number

// let str = parseFloat("100px");
// console.log("Value = ",str , "Type = ",typeof(str));

// Output:
// Value =  100 Type =  number



//INPUT AND OUTPUT PRACTICE SET

//Q1.

// let number = Number(prompt("Enter Your Number : "));
// console.log("Number = ",number , "Type = ",typeof(number));

// Output:
// Number =  22 Type =  number

// let number = Number(prompt("Enter Your Number : "));
// console.log("You entered = ",number , "Type = ",typeof(number));

//Output:
// You entered =  44 Type =  number

//Q2.

// let num1 = Number(prompt("Enter Your First Number : "));
// console.log("Num1 : ",num1 , "Type : ",typeof(num1));

// let num2 = Number(prompt("Enter Your Second Number : "));
// console.log("Num2 : ",num2 , "Type : ",typeof(num2));

// let sum = num1 + num2;
// console.log("Sum : ",sum , "Type : ",typeof(sum));

//Output:
// Num1 :  22 Type :  number
// Num2 :  33 Type :  number
// Sum :  55 Type :  number
