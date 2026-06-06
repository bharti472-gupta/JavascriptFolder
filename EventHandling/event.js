// let h1 = document.querySelector("h1");
// h1.addEventListener("click",fun)
// function fun(){
//     alert("Hello Coding Age");
// }

// let h1 = document.querySelector("h1");
// let body = document.body;
// console.log(body);

// h1.addEventListener("click",function(){
// body.style.backgroundColor = "green";
// });


// let btn = document.querySelector("button");
// let body = document.body;
//  console.log(body);
//  btn.addEventListener("click",function(){
//     body.classList.toggle("dark");
//  });

// let btn = document.querySelector("button");
// let body = document.body;
//  console.log(body);
//  btn.addEventListener("mouseover",function(){
//     body.classList.toggle("dark");
//  });


// let btn = document.querySelector("button");
// let body = document.body;
//  console.log(body);
//  btn.addEventListener("dblclick",function(){
//     body.classList.toggle("dark");
//  });

// let btn = document.querySelector("button");
// let body = document.body;
//  console.log(body);
//  btn.addEventListener("mouseout",function(){
//     body.classList.toggle("dark");
//  });

// let input = document.querySelector("#name");
// input.addEventListener("input",function(event){
//     console.log(event.target.value);

// })

// let form = document.querySelector("form");
// console.log(form);
// form.addEventListener("submit",function(event){
//     let name = document.querySelector("#name").value;
//     let id = document.querySelector("#id").value;
//     alert(`Name:${name} ID:${id}`);
// })

//to stop the value of form from going anywhere
// let form = document.querySelector("form");
// console.log(form);
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let name = document.querySelector("#name").value;
//     let id = document.querySelector("#id").value;

// })


// let form = document.querySelector("form");
// console.log(form);
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// console.log(form[0].value);
// console.log(form[1].value);
// let name = form[1].value;
// let id = form[1].value;
// console.log(name);
// console.log(id);



// })

// let form = document.querySelector("form");
// console.log(form);
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log(form[0].value);
//     let name = form[1].value;
//     let id = form[1].value;
//     alert(`Name:${name} ID:${id}`);



// })

//CALL BACK HELL
// setTimeout(function(){
//     console.log("Cage - B1");
//     setTimeout(function(){
//         console.log("Cage - B2");
//         setTimeout(function(){
//             console.log("Cage - B3");
//             setTimeout(function(){
//                 console.log("Cage - B4");

//             },2000)

//         },2000)

//     },2000)

// },2000)


//CALL BACK CHAINING
// function print(msg, time, callback){
//     setTimeout(function(){
//         console.log(msg);
//         callback();

//     },time)
// }

// print("Cage - B1",2000,function(){
//     print("Cage - B2",2000,function(){

//     })
// })

// let mypromise = new Promise(function(resolve , reject){
//     console.log("My Promise is pending");
// })

// console.log(mypromise);

// let mypromise = new Promise(function(resolve , reject){
//     console.log("My Promise is solved");
//     resolve("Problem solved!")
// })

// console.log(mypromise);


// let mypromise = new Promise(function(resolve , reject){
//     console.log("My Promise is rejected");
//     reject("error rejected!")
// })

// console.log(mypromise);

// let mypromise = new Promise(function (resolve, reject) {
//     console.log("My Promise is solved");
//     resolve("Problem solved!")
// })

// console.log(mypromise);
// mypromise.then(function(data){
//     console.log("Then : ",data);
// })

// let mypromise = new Promise(function (resolve, reject) {
//     console.log("My Promise is solved");
//     reject("error rejected!")
// })

// console.log(mypromise);
// mypromise.catch(function(error){
//     console.log("Catch : ",error);
// })

// let data = false;
// let mypromise = new Promise(function (resolve, reject) {
//     console.log("My Promise is rejected");
//     if (data) {
//         resolve("Problem is solved!");
//     }
//     else {
//         reject("error rejected");
//     }
// })
// console.log(mypromise);
// mypromise.then(function(data){
//     console.log(data);

// }).catch(function(err){
//     console.log(err);

// })

// function print(msg, time) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log(msg);
//             resolve(msg);

//         }, time);
//     })
// }
// print("Cage - B5", 2000).
//     then(function (data) {
//         console.log(data);

//         print("Cage - K6", 2000).
//             then(function (data) {
//                 console.log(data);

//             })
//     })

// function print(msg, time) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(() => {
//                 console.log(msg);
//                 resolve();

//             }, time);
//         })
//     }
// async function display(){
//     await print("Cage K6 " , 2000);
//     await print("Cage K7 " , 2000);
//     await print("Cage K8 " , 2000);
//     await print("Cage K9 " , 2000);
//     await print("Cage K10 " , 2000);
// }

// display();

// let obj = {
//     name : "Rahul",
//     id:11
// }
// console.log(obj);
// let jsonobj = JSON.stringify(obj);
// console.log(jsonobj);
// let obj2 = JSON.parse(jsonobj);
// console.log(obj2);


// const url = "https://dummyjson.com/recipes";
// fetch(url).then(function (response) {
//     console.log(response);
//     return response.json();
// }).then(function (data) {
//     console.log(data);
//     return data.recipes;
// }).then(function (recipes) {
//     console.log(recipes);

// })

// const url = "https://dummyjson.com/recipes";
// async function getData(url){
//     const res = await fetch(url);
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
//     const recipes = data.recipes;
//     console.log(recipes);

// }
// getData(url);



// const url = "https://dummyjson.com/recipes";
// async function getData(url){
//     const res = await fetch(url);
//     const data = await res.json();
//     const recipes = data.recipes;
//    recipes.forEach(function(recipe){
//     console.log(recipe);
//     console.log(recipe.name);


//    })

// }
// getData(url);

// let body = document.body;

// const url = "https://dummyjson.com/recipes";
// async function getData(url){
//     const res = await fetch(url);
//     const data = await res.json();
//     const recipes = data.recipes;
//    recipes.forEach(function(recipe){
//     let div = document.createElement("div");
//     div.innerHTML = `<h2>${recipe.name} <\h2>
//     <img src = ${recipe.image} alt = "">
//     `;
//     console.log(recipe);
//     body.append(div);

//    })

// }
// getData(url);


// let body = document.body;

// const url = "https://dummyjson.com/recipes";

// async function getData(url){

//     const res = await fetch(url);

//     const data = await res.json();

//     const recipes = data.recipes;

//    recipes.forEach(function(recipe){

//     let div = document.createElement("div");

//     div.innerHTML = `<h2>${recipe.name} </h2>

//     <img src = ${recipe.image} alt = "" style = "height: 400px; border-radius: 10px; ">
//     `;

//     console.log(recipe);

//     div.style.cssText = "height: 500px; background-color: bisque; border-radius: 15px; display: flex; flex-direction: column; align-items: center;justify-content: center; margin: 10px; padding: 10px; flex-wrap: wrap;"

//     body.append(div);

//    })

// }
// getData(url);


//By using try , catch and finally.....
// let body = document.body;

// const url = "https://dummyjson.com/recipes";

// async function getData(url) {

//     try {
//         const res = await fetch(url);

//         const data = await res.json();

//         const recipes = data.recipes;

//         recipes.forEach(function (recipe) {

//             let div = document.createElement("div");

//             div.innerHTML = `<h2>${recipe.name} </h2>

//     <img src = ${recipe.image} alt = "" style = "height: 400px; border-radius: 10px; ">
//     `;

//             console.log(recipe);

//             div.style.cssText = "height: 500px; background-color: bisque; border-radius: 15px; display: flex; flex-direction: column; align-items: center;justify-content: center; margin: 10px; padding: 10px; flex-wrap: wrap;"

//             body.append(div);

//         });

//     }


// catch (error) {

//     console.log("Error :", error);

// }
// finally {

//     console.log("Fetch operation finished");

// }

// }
// getData(url);

// let now = new Date();

// console.log(now);

// let now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// let customDate = new Date(2025, 2, 12);
// console.log(customDate);


// let canvas = document.getElementById("myCanvas");

// let ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";

// ctx.fillRect(50, 50, 150, 100);



























