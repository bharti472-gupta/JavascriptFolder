// ELSE-IF STATEMENTS PRACTICE SET

//Q1.
// let G = 65;
// let G = 34;
// if (G >= 80) {
//     console.log("Grade A");
// }
// else if (G >= 60 && G <= 79) {
//     console.log("Grade B");
// }
// else if (G >= 40 && G <= 59) {
//     console.log("Grade C");
// }
// else {
//     console.log("Fail");
// }

//Q2.DOUBT
// let ch = '#';
// let ch = 'h';

// if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
//     console.log("Alphabet");
// } else if (ch >= '0' && ch <= '9') {
//     console.log("Digit");
// } else {
//     console.log("Special Character");
// };

// }

//Q3.
// let age = 9;
// if(age >= 0 && age <= 12){
//     console.log("Child");

// }
//  else if(age >= 13 && age <= 19){
//     console.log("Teen");

// }
// else{
//     console.log("Adult");

// }

//Q4.

// let salary = 32000;
// if (salary < 10000) {
//     console.log("0%");

// }
// else if (salary < 30000) {
//     console.log("10%");

// }
// else if (salary < 50000) {
//     console.log("20%");

// }
// else {
//     console.log("30%");

// }

//Q5.
// let units = 210;
// let bill;

// if (units <= 100) {
//     bill = units * 5;
// } 
// else if (units <= 200) {
//     bill = (100 * 5) + ((units - 100) * 6);
// } 
// else {
//     bill = (100 * 5) + (100 * 6) + ((units - 200) * 7);
// }

// console.log("₹" + bill);

// ✅ Key Idea: We are NOT changing units

// 👉 units is always 210
// We are just breaking it into parts (slabs)

// 🔥 Think of it like real life (VERY IMPORTANT)

// Electricity bill works like pricing slabs, not one formula.

// For 210 units:

// Slab 	Units	 Rate	  Cost
// First	100  	 ₹5	      500
// Next	    100	     ₹6	      600
//Remaining	10	     ₹7	       70

// 👉 Total = 500 + 600 + 70 = 1170

// 🔍 Now see your code carefully
// bill = (100 * 5) + (100 * 6) + ((units - 200) * 7);

// 👉 Here’s what’s happening:

// 🔹 Part 1
// 100 * 5

// → Fixed first 100 units
// → ALWAYS 100 (not from variable)

// 🔹 Part 2
// 100 * 6

// → Fixed next 100 units

// 🔹 Part 3
// (units - 200) * 7

// 👉 This is the key part

// units = 210
// units - 200 = 10

// So:

// 10 * 7 = 70
// ⚡ Important Insight

// 👉 We are NOT looping or reducing units
// 👉 We are just calculating portions mathematically

// 🧠 Think like this
// Total units = 210

// First 100 → fixed
// Next 100 → fixed
// Remaining → units - 200
// 💡 Simple Analogy

// Imagine buying mangoes:

// First 100 kg → ₹5/kg
// Next 100 kg → ₹6/kg
// Rest → ₹7/kg

// If you buy 210 kg:

// 👉 Shopkeeper splits it like this automatically
// Not like: "All 210 × ₹7"

// 🔥 Final Answer to Your Question

// “How are we taking 100, 100, and 10?”

// 👉 Because:

// First 100 and next 100 are fixed slabs

// Remaining is calculated using:

// units - 200
// 🚀 Pro Tip (Very Important for Exams)

// Whenever you see:

// “First ___ units”
// “Next ___ units”
// “Remaining”

// 👉 Always think: SLABS, not full multiplication

 
//Q6.
// let marks = 48;
// if(marks >= 60){
//     console.log("First");
// }
// else if(marks >= 45){
//     console.log("Second");
// }
// else if(marks >= 33){
//     console.log("Third");
// }
// else{
//     console.log("Fail");

// }

//Q7.

// let temp = 39;
// if(temp < 20){
//     console.log("Cold");
// }
// else if(temp < 35){
//     console.log("Warm");
// }

// else{
//     console.log("Hot");

// }

//Q8.

// let num = 76;
// if(num >= 0 && num <= 9){
//     console.log("Single digit");

// }
// else if(num >= 10 && num <= 99){
//     console.log(" Double digit");

// }
// else {
//     console.log(" Three digit");

// }



//TERNARY

//Q1.
// let num = 11;
// (num % 2 == 0)?console.log("even"):console.log("odd");


//Q2.
// let age = 17;
// (age >= 18)?console.log("adult"):console.log("Minor");

//Q3.
// let a = 22;
// let b = 30;
// (a < b)?console.log(`${b} is greater`):console.log(" a is max");

//Q4.
// let marks = 38;
// (marks >= 40)?console.log("pass"):console.log("Fail");


//Q5.
// let a = 4;
// let b = 2;
// let c = 5;
// (a > b && a > c)? console.log("a is max"):(b > a && b > c)?console.log(" b is max"):console.log("c is max");



//Q6.

// let age = 61;

// (age < 13)? console.log("Child"): (age < 18)? console.log("Teen"): (age < 60)? console.log("Adult"): console.log("Senior Citizen");



//Q7.
// let num = -12;
// (num < 0)? console.log(-num): console.log(num);

//Q8.
// let num = 15;
// (num % 2 == 0)?console.log("Div by 2"):console.log(" Not Div by 2");







