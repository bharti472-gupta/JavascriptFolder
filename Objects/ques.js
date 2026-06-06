//Q1.
// let student = {
//     name: "Abhi",
//     age: 22,
//     course: "Full Stack"
//  }
//  console.log(student);
 
 //Q2.
//  let car = {
//     brand: "BMW",
//     model: "X5"
//  }
// console.log("Using dot notation : ",car.brand);
// console.log("Using bracket notation : ",car["model"]);

//Q3.
// let user = {
//     name: "Rahul"
//  }
// user.age = 25;
// console.log(user);
 
//Q4.
// let product = {
//     name: "Laptop",
//     price: 50000
//  }
//  product.price = 55000;
//  console.log("Updated price =  ",product.price);
 
 //Q5.
//  let employee = {
//     name: "Amit",
//     salary: 30000
//  }
// delete employee.salary; 
// console.log(employee);

//Q6.
// let user = {
//     name: "Abhi",
//     greet:function(){
//         console.log("Hello", this.name);
        
//     }
//  };
 
//  console.log(user);
//  user.greet();

//Q7.
// let person = {
//     name: "Rahul",
//     address: {
//        city: "Patna",
//        state: "Bihar"
//     }
//  }
// console.log(person.address.city);
// console.log(person.address.state);

//Q8.
// let key = "name";

// let user = {
//    name: "Amit",
//    age: 22
// }
// let k1 = user[key];
// console.log(k1);

//Q9.
// let person = {
//     name: "Abhi",
//     age: 22,
//     city: "Delhi"
//  }
// let keys = Object.keys(person);
// console.log(keys);
// for(key of keys){
//     console.log(key);
    
// }

//Q10.
// let person = {
//     name: "Abhi",
//     age: 22,
//     city: "Delhi"
//  }
// let values = Object.values(person);
// console.log(values);
// for(value of values){
//     console.log(value);
    
// }

//Q11.
// let person = {
//     name: "Abhi",
//     age: 22
//  }
// let key = Object.entries(person);
// console.log(key);
// for([key , value] of key){
//     console.log(key, ":" ,value);
    
// }

//Q12.
// let car = {
//     brand: "BMW",
//     model: "X5",
//     year: 2024
//  }
// console.log(car);
// for(value in car){
//     console.log(value, ":",car[value]);
// }

//Q13.

//Q14.
// let user = {
//     name: "Abhi",
//     age: 22
//  }
//  console.log(user.hasOwnProperty("name"));
//  console.log(user.hasOwnProperty("age"));
//  console.log(user.hasOwnProperty("city"));

//Q15.
// let obj1 = { a:1, b:2 };
// let obj2 = { c:3, d:4 };
// let obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);


// let obj1 = { a:1, b:2 };
// let obj2 = { c:3, d:4 };
// let obj3 = {...obj1, ...obj2};
// console.log(obj3);

//Q16.
//Q17.
//Q18.
//Q19.
// let user = {
//     name: "Abhi"
//  }
//  Object.freeze(user);
//  user.age = 22;
//  user.name = "kjhgb";
//  console.log(user);
 
 //Q20.
//  let user = {
//     name: "Abhi"
//  }
// Object.seal(user);
// user.name = "Bharti";
// user.age = 88;
// user.city = "Patna";
// delete user.name;
// console.log(user);

//Q21.
