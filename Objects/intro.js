//creation

// let obj = {name : "Abhi" , id : 33};
// console.log(obj);

// let obj = {};
// console.log(obj);
// console.log("Type of = ",typeof(obj));

// let student1 = {name :"Bharti" , id: 42 , marks: [55,99,88]};
// console.log(student1);

//for accessing
// console.log("name = ",student1.name);
// console.log("id = ",student1.id);
// console.log("marks = ",student1.marks);

// console.log("marks = ",student1.marks[2]);
//accessing with square brackets
// console.log("name = ",student1["name"]);

//adding
// student1.mobno = 877664636576;
// console.log(student1);

// console.log("mobno = ",student1.mobno);

//deleting
// delete student1.id;
// console.log(student1);

//adding with square brackets
// student1["id"] = 87;
// console.log(student1);


// let student1 = {
//     name: "Bharti" ,
//     "id" : 101,
//     "marks" : [77,88,99],
//     print:function(){
//         console.log("Name = ",this.name, "ID = ",this.id, "Marks = ",this.marks);
        
//     }
// }
// console.log(student1);
// student1.print();


//Using new keyword

// let obj = new Object();
// obj.name = "Bharti";
// obj.id = 78;
// console.log(obj);

//objectn inside an object

// let obj = {

//     name: "Prabha",
//     id: 34,
//     adrs:{city:"Patna" , dist:"Bihar"}

// };
// console.log(obj);

// console.log(obj.adrs);
// console.log(obj.adrs.city);
// console.log(obj.adrs.dist);

//PROTOTYPE
// let arr = [11,55,7,88];
// console.log(arr.__proto__);

//Constructor Function

// function Student(name,id){

//     this.name = name;
//     this.id = id;
// }

// let s1 = new Student("Bharti",101);
// console.log(s1);
// let s2 = new Student("Rahul",102);
// console.log(s2);
// let s3 = new Student("Aman",103);
// console.log(s3);

//function without name so it is annoymous
// function Student(Studentname , Studentid){
//     this.name = Studentname;
//     this.id = Studentid;
//     this.display = function(){
//         console.log(`Name = ${this.name} id = ${this.id}`);
        
//     }
// }
// let s1 = new Student("Prabha Devi", 888);
// console.log(s1);
// console.log("Type = ",typeof(s1));
// s1.display();

//function with name show so it is not annoymous
// function Student(Studentname , Studentid){
//     this.name = Studentname;
//     this.id = Studentid;
//     this.display = function show(){
//         console.log(`Name = ${this.name} id = ${this.id}`);
        
//     }
// }
// let s1 = new Student("Prabha Devi", 888);
// console.log(s1);
// console.log("Type = ",typeof(s1));
// s1.display();

// Object destructure
// let student = {
//     name : "Bharti",
//     id : 101,
//     city : "Patna"
// };

// let {name , id , city} = student;

// console.log(name);
// console.log(id);
// console.log(city);


//Without destructure we have to write  like this
// let name = student.name;
// let id = student.id;
// let city = student.city;

// sir example
// let obj = {name: "Prabha"  , id: 34};
// console.log(obj);
// let{name , id} = obj;
// console.log(`name = ${name} id =${id}`);

//Object keys
//let obj = {name: "Bharti Gupta", id:8987};
//console.log(obj);
//let keys = Object.keys(obj);
//console.log(keys);
//for(key of keys){
   // console.log(key);
   // console.log(key,":",obj[key]);
    
//}

//Object.values
// let obj = {name : "Bharti", id : 33};
// console.log(obj);
// let values = Object.values(obj);
// console.log(values);

//Object.entries
// let obj = {name: "Anuj Raj", id: 8989};
// console.log(obj);
// let arr = Object.entries(obj);
// console.log(arr);
// for([key , value] of arr){
//     console.log(`key = ${key} value = ${value}`);
    
// }

//Object.assign
// let obj1 = {name : "Bharti", id : 47};
// let obj2 = {name1 :"Anuj", id1 : 20};
// let obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

// let obj3 = Object.assign({key : "value"}, obj1,obj2);
// console.log(obj3);



//Object.freeze
// let obj = {name : "Gupta" , id : 66};
// console.log(obj);
// Object.freeze(obj);
// delete obj.id;
// obj.roll = 22;
// obj.id = 33;
// console.log(obj);

//Object.seal
// let obj = {name :" Prabha", id : 27};
// console.log(obj);
// Object.seal(obj);
// obj.id = 88;
// obj.id = 98;
// obj.roll = 101;
// delete obj.id;
// console.log(obj);

//hasownproperty

// let student = {
//     name : "Bharti",
//     id : 101
// };

// console.log(student.hasOwnProperty("name"));

// console.log(student.hasOwnProperty("marks"));

//for...in loop
// let obj = {name : "Devi", id: 85};
// console.log(obj);
// for(value in obj){
//     console.log(obj[value]);
    
// }



//Shallow and deep copy
// let obj = {name : Maya , id : 99, obj2 = {key : value}};
// console.log(obj);
// let obj1 = {...obj};
// obj1.name = payal




















