// let name = "Bharti";
// console.log("Name = ",name);
// console.log("Type  = ",typeof(name));

// let name2 = 'Gupta';
// console.log("Name2 = ",name2);

//Backtick Benefits
// let str = `coding 



// Era `;

// console.log(str);


// let name = "Bharti";
// let id = 111;
// let data = `Name = ${name} , ID = ${id}`;
// console.log(data);
// console.log(`Name = ${name} , ID = ${id}`);

// let name =  "Bharti";
// console.log(name[1]);

// let name =  " Bharti Gupta ";     //space is also counted
// console.log(name.length);

// let name =  " Bharti Gupta ";
// for(let i = 0; i < name.length; i++){
// console.log(`Name [${i}] = ${name[i]}`);
// }


// let name =  " Bharti Gupta ";
// console.log("name = ",name);
// let newname = name.toUpperCase();
// console.log( "newname = ",newname);

// let name =  " Bharti Gupta ";
// console.log("name = ",name);
// let newname = name.toLowerCase();
// console.log( "newname = ",newname);

// let name =  " Bharti Gupta ";
//  console.log("name = ",name);
//  let index = 2;
//  console.log(name.charAt(index));

// let name =  " Bharti Gupta ";
// console.log("name = ",name);
// let newname = name.slice(2,6);
// console.log( "newname = ",newname);

// let name =  " Bharti Gupta ";
// console.log("name = ",name);
// let newname = name.slice(-7);
// console.log( "newname = ",newname);

// let name =  " Bharti Gupta ";
// console.log("name = ",name);
// let newname = name.slice(-7 , -3);
// console.log( "newname = ",newname);

// let name =  " Bharti Gupta ";
// let newname = name.replace("Gupta", "Puchka");
// console.log( "newname = ",newname);

// let name =  "Bharti,Gupta";
// console.log("name = ",name);
// let newname = name.split(",");
// console.log( "newname = ",newname);

// let name =  "Bharti Gupta is a good girl and matured woman .";
// console.log("name = ",name);
// let newname = name.split(" ");
// console.log( "newname = ",newname);

//  let name =  "        Bharti Gupta          ";
//  console.log("name = ",name);
//  let newname = name.trim();
//  console.log( "newname = ",newname);

// let name =  "Bharti Gupta          ";
// console.log("name = ",name);
// let newname = name.trimEnd();
// console.log( "newname = ",newname);

//logic ques
// let newarr = ['Coding' , 'Age', 'for', 'Cagers'];
// for(let i = 0; i < newarr.length; i++){
//     console.log(newarr[i]);
// for(let j = 0; j < newarr[i].length; j++){
//     console.log(newarr[i][j]);

// }
// }

// let name1 =  "Bharti Gupta";
// console.log("name1 = ",name1);

// let name2 =  "Om Prakash Gupta";
// console.log("name2 = ",name2);

// let name3 = name1.concat(" ",name2);   //added double quotes for space
// console.log("name3 = ",name3);

// let name1 =  "Bharti Gupta";
// console.log("name1 = ",name1);
// console.log(name1.includes("Gupta"));
// console.log(name1.startsWith("Gupta"));
// console.log(name1.endsWith("Gupta"));
// console.log(name1.startsWith("Bharti"));
// console.log(name1.repeat(2));

// PRACTICE - SET

//Q1.
// let string = prompt("Enter Your string = ");
// console.log(string);

//Q2.
// let string = "Javascript";
// for(let i = 0; i < string.length; i++){
//     console.log(`string[${i}] = ${string[i]}`);

// }

//Q3.
// let string = "Coding Age";
// for(let i = string.length - 1; i >= 0; i--){
//     console.log(`${[string[i]]}`);

// }

//Q4.
// let string = "Hello World";
// console.log("Total no of Characters = ",string.length);

//Q5.
// let string = "Education";
// let vowel = 0;
// let consonants = 0;
// for(let i = 0; i < string.length; i++){
//        console.log(`string[${i}] = ${string[i]}`);

//        if(
//         string[i] == 'a' || string[i] == 'A' ||
//         string[i] == 'e' || string[i] == 'E' ||
//         string[i] == 'i' || string[i] == 'I' ||
//         string[i] == 'o' || string[i] == 'O' ||
//         string[i] == 'u' || string[i] == 'U'
//     ){
//     vowel++;
// }
// else{
//     consonants++;
// }
// }
// console.log(vowel);
// console.log(consonants);

//Q6.
// let string = "Programming";
// for(let i = 0; i < string.length; i++){
//     for(let j = i + 1; j < string.length; j++){
//         if(string[i] == string[j]){
//             console.log("Repeated elements = ",string[i]);

//         }
//     }
// }


//Q7.
// let string = "Frontend";
// for(let i = 0; i < string.length; i++){
//     console.log(string[i]);

// }

//Q8.
// let string = "Javascript";
// let newstr = string.length;
// console.log("Length using predefined property = ",newstr);


// let string = "Javascript";
// let length = 0;
// for(let i = 0; i < string.length; i++){
//     length++;
// }
// console.log("Length using user-defined property =",length);


//Q9.

//Q10.
// let str1 = "Bharti";
// let str2 = "Gupta";
// let str3 = str1.concat(str2);
// console.log(str3);

//Q11.

// let str1 = "Javascript";
// let str2 = str1;
// console.log(str2);

//Q12.
// let string = "The boy went to the market and the shop";
// console.log(string);

// let newstr = string.toLowerCase();
// console.log(newstr);
// let newstr2 = newstr.split(" ");
// console.log(newstr2);
// let repeat;

// for(let i = 0; i < newstr2.length; i++){

//     count = 1;

//     for(let j = i + 1; j < newstr2.length; j++){

//         if(newstr2[i] == newstr2[j]){
//             count++;
//             repeat = newstr2[i];
//         }
//     }

//     if(count > 1){
//         console.log(repeat , "is repeated, count =", count ,"times");
//         break;
//     }
// }

//Q13.
//  let string = "JavaScript is awesome";
//  let newstr = string.split(" ");
//  console.log(newstr);
//  for(let i = 0; i < newstr.length; i++){
//     console.log(newstr[i]);

//  }

//Q14.
// let string = "hello world";
// let newstr = string.toUpperCase();
// console.log(newstr);

//Q15.
// let string = "HELLO WORLD";
// let newstr = string.toLowerCase();
// console.log(newstr);

//Q16.
// let string = "He llo Wo rld";
// let newstr = string.replace("He llo Wo rld", "HelloWorld");
// console.log(newstr);

// let string = "He llo Wo rld";
// let newstr = string.replaceAll("He llo Wo rld", "HelloWorld");
// console.log(newstr);

//Q17.
// let string = "This Is JavaScript";
// let newstr = "";
// for(let i =  0; i < string.length ; i++){
//     if(string[i] == string[i].toUpperCase()){
//        newstr = newstr + string[i].toLowerCase();

//     }
//     else{
//         newstr =  newstr + string[i].toUpperCase();

//     }
// }
// console.log(newstr);


//Q18.

//Q19.
// let str ="madam";
// let newstr = str.split("");
// console.log(newstr);
// newstr.reverse();
// console.log(newstr);
// let new2 = newstr.join("");
// console.log(new2);

// if(str == new2){
//     console.log("string is palindrome");

// }
// else{
//     console.log("string is not palindrome");

// }

// let str ="maya";
// let newstr = str.split("");
// console.log(newstr);
// newstr.reverse();
// console.log(newstr);
// let new2 = newstr.join("");
// console.log(new2);

// if(str == new2){
//     console.log("string is palindrome");

// }
// else{
//     console.log("string is not palindrome");

// }

//Q20.
//  let str ="JavaScript";
// let newstr = str.split("");
// console.log(newstr);
// newstr.reverse();
// console.log(newstr);
// let new2 = newstr.join("");
// console.log(new2);


//Q21.

//Q22.
// let str = "Javascript is very easy";
// let newstr = str.split(" ");
// console.log(newstr);
// let count = 0;
// for(let i = 0; i < newstr.length ; i++){
//     count++;
// }
// console.log("Total words =  " , count);


// let str = "Javascript is very easy and all time fav but it's hard to code";
// let newstr = str.split(" ");
// console.log(newstr);
// let count = 0;
// for(let i = 0; i < newstr.length ; i++){
//     count++;
// }
// console.log("Total words =  " , count);


//Q23.
// let str1 = "listen";
// let str2 = "silent";
// let newstr1 = str1.split("");
// console.log(newstr1);

// newstr1.sort();
// console.log(newstr1);

// let ns1 = newstr1.join("");
// console.log(ns1);

// let newstr2 = str2.split("");
// console.log(newstr2);

// newstr2.sort();
// console.log(newstr2);

// let ns2 = newstr2.join("");
// console.log(ns2);

// if(ns1 == ns2){
//     console.log("Strings are anagrams");

// }
// else{
//     console.log("Strings are not anagrams");

// }


// let str1 = "modify";
// let str2 = "update";
// let newstr1 = str1.split("");
// console.log(newstr1);

// newstr1.sort();
// console.log(newstr1);

// let ns1 = newstr1.join("");
// console.log(ns1);

// let newstr2 = str2.split("");
// console.log(newstr2);

// newstr2.sort();
// console.log(newstr2);

// let ns2 = newstr2.join("");
// console.log(ns2);

// if(ns1 == ns2){
//     console.log("Strings are anagrams");

// }
// else{
//     console.log("Strings are not anagrams");

// }

//Q24. by brute force 😄
// let str = "abc123xyz45";
// let new1 = str.split("");
// console.log(new1);
// let new2 = new1.slice(3, 6 );
// console.log(new2);
// let n1 = new2.join("");
// console.log(n1);
// let new3 = new1.slice(9,11 );
// console.log(new3);
// let n2 = new3.join("");
// console.log(n2);
// let n3 = [...n1, ...n2];
// console.log(n3);
// let n4 = n3.join("");
// console.log(n4);

//Right one as per question
// let str = "abc123xyz45";
// let new1 = str.split("");
// console.log(new1);
// let new2 = [];
// for (let i = 0; i < new1.length; i++) {
//     if (new1[i] >= 0 && new1[i] <= 9) {
//         new2[new2.length] = new1[i];


//     }
// }
// console.log(new2);
// let n3 = new2.join("");
// console.log(n3);

//storing them seperately i.e digits and characters
// let str = "9876bc12theofiuytre6783xyz45";
// let new1 = str.split("");
// console.log(new1);
// let new2 = [];
// let new3 = [];
// for (let i = 0; i < new1.length; i++) {
//     if (new1[i] >= 0 && new1[i] <= 9) {
//         new2[new2.length] = new1[i];
//     }
//     else {
//         new3[new3.length] = new1[i];
//     }
// }
// console.log(new2);
// console.log(new3);

// let n3 = new2.join("");
// console.log(n3);
// let n4 = new3.join("");
// console.log(n4);


//Q25.
// let str = "Coding Age Institute";
// let newstr = str.replaceAll(" " , "-");
// console.log(newstr);

//Q26.by brute force 😄 but it is right 
// let str = "JavaScript is very powerful language";
// let newstr = str.split(" ");
// console.log(newstr);
// let n1 = newstr.length;
// console.log(n1);
// let max = -9999999999;
// for (let i = 0; i < newstr.length; i++) {
//     let count = 0;
//     for (let j = 1; j <= newstr[i].length; j++) {
//         count++;
//     }
//     console.log(newstr[i],"length =",count);
//     if(count > max){
//         console.log("max = " ,max = count);
//     }
//     if(newstr[i].length == max){
//         console.log("Longest word = ",newstr[i]);

//     }

// }

//chatgpt 
// let str = "JavaScript is very powerful language programmings";

// let newstr = str.split(" ");

// let max = 0;
// let longestWord = "";

// for(let i = 0; i < newstr.length; i++){

//     let count = 0;

//     for(let j = 0; j < newstr[i].length; j++){
//         count++;
//     }

//     console.log(newstr[i], "length =", count);

//     if(count > max){
//     max = count;
//     longestWord = newstr[i];

//     }
// }

// console.log("Longest word =", longestWord);

//right one dynamic
// let str = "JavaScript is very powerful language and all time programmings";
// let newstr = str.split(" ");
// console.log(newstr);
// let n1 = newstr.length;
// console.log(n1);
// let max = -9999999999;
// let longestword;
// for (let i = 0; i < newstr.length; i++) {
//     let count = 0;
//     for (let j = 1; j <= newstr[i].length; j++) {
//         count++;
//     }
//     console.log(newstr[i], "length =", count);
//     if (count > max) {
//         max = count;
//         longestword = newstr[i];
//     }
// }
// console.log("Longest word = ",longestword);


//Q27.

// let str = "hello world javascript";
// let newstr = str.split(" ");
// console.log(newstr);
// let n1 = [];
// for(let i = 0; i < newstr.length; i++){
//     for(let j = 0; j < newstr[i].length; j++ ){
//         if(newstr[i][j] == newstr[i][0]){
//             n1[n1.length] = newstr[i][j].toUpperCase();
            
//         }
//         else{
//             n1[n1.length] = newstr[i][j];
            
//         }
        
        
//     }
// }
// console.log(n1);


//Right one
// let str = "hello world javascript";

// let newstr = str.split(" ");
// console.log(newstr);

// let n1 = [];

// for(let i = 0; i < newstr.length; i++){

//     let word = "";

//     for(let j = 0; j < newstr[i].length; j++){

//         if(newstr[i][j] == newstr[i][0]){

//             word = word + newstr[i][j].toUpperCase();

//         }
//         else{

//             word = word + newstr[i][j];

//         }
//     }

//     n1[n1.length] = word;
// }

// console.log(n1);

// let n2 = n1.join(" ");

// console.log(n2);

//Q28.











