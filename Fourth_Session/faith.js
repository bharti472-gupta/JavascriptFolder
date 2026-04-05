
// Data type Conversions

// str + str - string
// output = 566
// let str = "5" + "66"
// console.log(str);


// str + num - string
// output = 55
// let str = "5" + 5
// console.log(str);


// str - num -> integer
// output = 0
// let str = "5" - 5
// console.log(str);


// str * num - integer
// output = 36
// let str = "6" * 6
// console.log(str);


// str / num - integer
// output = 4
// let str = "8" / 2
// console.log(str);


// str % num - integer
// output = 0
// let str = "9" % 3
// console.log(str);


// output = 1
// let str = "9" % 2
// console.log(str);



// let str = "55";
//  console.log("str : ",str);
//  console.log(typeof(str));
// output:
// str :  55
// string


//  let str = "55";
//  console.log("str : ",str);
//  console.log(typeof(str));
//  let num = str;
//  console.log("num : ",num);
//  console.log(typeof(num));
//  output:
// str :  55
// string
// num :  55
// string

// String to number
// let str = "55";
// console.log("str : ", str);
// console.log(typeof (str));
// let num = Number(str);
// console.log("num : ", num);
// console.log(typeof (num));
// Output:
// str :  55
// string
// num :  55
// number


// String to integer
// let str = "558";
// console.log("str : ", str);
// console.log(typeof (str));
// let num = parseInt(str);
// console.log("num : ", num);
// console.log(typeof (num));
// Output:
// str :  558
// string
// num :  558
// number

// String to float
// let str = "55.1230";
// console.log("str : ", str);
// console.log(typeof (str));
// let num = parseFloat(str);
// console.log("num : ", num);
// console.log(typeof (num));
// Output:
// str :  55.1230
// string
// num :  55.123
// number


// let num = 889;
// console.log("num :",num);
// console.log(typeof(num));
// let str = num;
// console.log("str :",str);
// console.log(typeof(str));
// Output:
// num : 889
// number
// str : 889
// number



// number to string
// let num = 889;
// console.log("num :", num);
// console.log(typeof (num));
// let str = String(num);
// console.log("str :", str);
// console.log(typeof (str));
// Output:
// num : 889
// number
// str : 889
// string


// number to string with  .tostring()
//  let num = 889;
//  console.log("num :", num);
//  console.log(typeof (num));
//  let str = num.toString();
//  console.log("str :", str);
//  console.log(typeof (str));
// Output:
//  num : 889
// number
// str : 889
// string


// number to boolean
// let num = 889;
// console.log("num :", num);
// console.log(typeof (num));
// let boolean = Boolean(num);
// console.log("boolean :", boolean);
// console.log(typeof (boolean));
// Output:
// num: 889
// number
// boolean: true
// boolean


// let num = 0;
// console.log("num :", num);
// console.log(typeof (num));
// let boolean = Boolean(num);
// console.log("boolean :", boolean);
// console.log(typeof (boolean));
// Output:
// num : 0
// number
// boolean : false
// boolean


// String to boolean
// let str = "bharti";
// console.log("str :", str);
// console.log(typeof (str));
// let boolean = Boolean(str);
// console.log("boolean :", boolean);
// console.log(typeof (boolean));
// Output:
// str : bharti
// string
// boolean : true
// boolean

// let str = null;
// console.log("str :", str);
// console.log(typeof (str));
// let boolean = Boolean(str);
// console.log("boolean :", boolean);
// console.log(typeof (boolean));
// Output:
// str : null
// object
// boolean : false
// boolean


// let str = "";
// console.log("str :", str);
// console.log(typeof (str));
// let boolean = Boolean(str);
// console.log("boolean :", boolean);
// console.log(typeof (boolean));
// Output:
// str : 
// string
// boolean : false
// boolean


// Practice set of data type conversions

// Question 1
// number to string
// let num = 100;
// let str = String(num);
// console.log("str :",str);
// console.log(typeof(str));
// Output:
// str : 100
// string

// let num = String(100);
// console.log("num :",num , "Type :", typeof(num));
// let num = 100;
// console.log(num.toString());
// console.log(typeof(num.toString()));


// Question 2
// boolean to string
// let value = true;
// let str = String(value);
// console.log("str :",str);
// console.log(typeof(str));
// Output:
// str : true
// string

// let value = String(true);
// console.log("Value :",value , "Type :",typeof(value));

// let value = true;
// console.log(value.toString() , typeof(value.toString()));


// Question 3
// number to string using .toString
// let num = 200;
// console.log(num.toString());
// console.log(typeof num.toString());
// Output:
// 200
// string

// let num = 200;
// console.log(num.toString() , typeof(num.toString()));



// Question 4
// string to number
// let str = "55";                  //using uranary
// let num = + "55";
// console.log(num);
// console.log(typeof(num));
// Output:
// 55
// number


// anoter method using Number
// let str = "55";
// let num = Number(str);
// console.log(num);
// console.log(typeof(num));
// Output:
// 55
// number


// using parseInt
// let str = "55";
// let num = parseInt(str);
// console.log(num);
// console.log(typeof (num));
// Output:
// 55
// number

// let str = Number("55");
// console.log("str :",str , "Type :",typeof(str));

// let str = parseInt("55");
// console.log("str :",str , "Type :",typeof(str));

// let str = parseFloat("55.990");
// console.log("str :",str , "Type :",typeof(str));


// Question 5
// string to integer
// let str = "10.75";
// let num = parseInt(str);
// console.log(num);
// console.log(typeof (num));
// Output:
// 10
// number

// let str = parseInt("10.75");
// console.log("Value :",str , "Type :",typeof(str));



// Question 6
// string to decimal number
// let str = "42.75";
// let num = parseFloat(str);
// console.log(num);
// console.log(typeof (num));
// Output:
//  42.75
//  number


// let str =parseFloat("42.75");
// console.log("Value :",str , "Type :",typeof(str));


// Question 7
// string to number using unary operator.
// let str = "25";
// let num = + str;
// console.log(num);
// console.log(typeof (num));
// Output:
//  25
// number


// let str = "25";
// let num = + str;
// console.log (num , typeof (num));

// let str = + "25";
// console.log("Value :",str , "Type :", typeof(str));



// Question 8
// different values into boolean.
// let a = 1;
// let bool = Boolean(a);
// console.log("bool :",bool);
// console.log(typeof(bool));


// let b = 0;
// let bool1 = Boolean(b);
// console.log("bool1 :",bool1);
// console.log(typeof(bool1));

// let c = "Hello";
// let bool2 = Boolean(c);
// console.log("bool2 :",bool2);
// console.log(typeof(bool2));


// let d = "";
// let bool3 = Boolean(d);
// console.log("bool3 :",bool3);
// console.log(typeof(bool3));

// Output:
// bool : true
// boolean
// bool1 : false
// boolean
// bool2 : true
// boolean
// bool3 : false
// boolean


// Question 9
// check type coercion with addition
 //Implicit conversion as js converts it automatically cuz + means  string concatination means right side string makes the left side integer also string .and combines both
// let result = "5" + 3;             
// console.log(result);
// console.log(typeof(result));
// Output:
// 53
// string


// Question 10
// check type coercion with subtraction
// Implicit conversion as js converts it automatically and it is a number conversion an it performs the required opeartions.
// let result = "5" - 2;
// console.log(result);
// console.log(typeof(result));
 // Output:
//  3
// number


// Question 11
// string with text into number.
// let str = "10px";
// let num = parseInt(str);
// console.log(num);
// Output:
// 10

// anoter method
// let str = parseInt("10px");
// console.log(str);
// Output:
// 10




// Question 13
// check truthy and falsy values.
// let a = Boolean(0);
// console.log(a);

// let b = Boolean("0");
// console.log(b);

// let c = Boolean(null);
// console.log(c);

// let d = Boolean([]);
// console.log(d);

// Output:
// false
// true
// false
// true


// Question 14
// compare Number() and parseInt().
// let str = Number("15px");
// console.log(str);
// Output:
// NaN

// let str = parseInt("15px");
// console.log(str);
// Output:
// 15


// Question 15
// empty string into number.
// let str = Number("");
// console.log(str);
// Output:
// 0























