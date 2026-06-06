// let body = document.querySelector("body");
// let api = 'https://dummyjson.com/products';
// async function getdata() {
// let res = await fetch(api);
// let data = await res.json();
// let products = data.products;
// console.log(products);
// products.forEach(function(product){
// let div = document.createElement("div");
// div.innerHTML = `<h1>${product.title}</h1> 
// <img src = ${product.thumbnail}>
// `;

// body.append(div);
// console.log(product.title);

// });
// }
// getdata();

// Explanation:-
// let body = document.querySelector("body");
// Explanation
// document = the whole HTML page.
// querySelector("body") = selects the <body> element.
// body variable now stores a reference to the body tag.

// Example:

// <body>
// </body>

// So body points to this element.

// let api = 'https://dummyjson.com/products';
// Explanation
// Creates a variable named api.
// Stores the URL from which product data will be fetched.

// Think of it as:

// api = "Address of the data"
// async function getdata() {
// Explanation
// Creates a function named getdata.
// async means this function can use await.
// Useful when working with APIs because fetching data takes time.
// let res = await fetch(api);
// Explanation
// fetch(api) sends a request to the URL.
// The browser asks the server:

// "Please send me the product data."

// await waits until the response arrives.
// The response is stored in res.

// Example response:

// Response {
//   status: 200,
//   ok: true
// }
// let data = await res.json();
// Explanation

// The API sends data in JSON format.

// Example:

// {
//   "products": [
//     {
//       "title": "iPhone",
//       "thumbnail": "image.jpg"
//     }
//   ]
// }

// res.json() converts JSON into a JavaScript object.

// Now:

// data = {
//   products: [...]
// }
// let products = data.products;
// Explanation

// Gets only the products array from the object.

// Before:

// data = {
//   products: [ ... ]
// }

// After:

// products = [ ... ]
// console.log(products);
// Explanation

// Prints the entire products array in the console.

// Example:

// [
//   {title: "iPhone"},
//   {title: "Laptop"},
//   {title: "Perfume"}
// ]
// products.forEach(function(product){
// Explanation

// forEach() loops through every product in the array.

// Imagine:

// products = [
//   {title:"iPhone"},
//   {title:"Laptop"},
//   {title:"Perfume"}
// ]

// Loop execution:

// First iteration
// product = {title:"iPhone"}
// Second iteration
// product = {title:"Laptop"}
// Third iteration
// product = {title:"Perfume"}
// let div = document.createElement("div");
// Explanation

// Creates a new empty <div> element.

// Example:

// <div></div>

// But it is not yet visible on the webpage because it hasn't been added to the body.

// div.innerHTML = `
// <h1>${product.title}</h1>
// <img src=${product.thumbnail}>
// `;
// Explanation

// Adds HTML inside the div.

// Suppose:

// product.title = "iPhone"
// product.thumbnail = "iphone.jpg"

// Then it becomes:

// <div>
//   <h1>iPhone</h1>
//   <img src="iphone.jpg">
// </div>
// ${}

// This is called template literal interpolation.

// Example:

// let name = "Bharti";

// console.log(`Hello ${name}`);

// Output:

// Hello Bharti
// body.append(div);
// Explanation

// Adds the div to the body.

// Before:

// <body>
// </body>

// After first product:

// <body>
//   <div>
//     <h1>iPhone</h1>
//     <img src="iphone.jpg">
//   </div>
// </body>

// After second product:

// <body>
//   <div>iPhone</div>
//   <div>Laptop</div>
// </body>

// And so on...

// console.log(product.title);
// Explanation

// Prints the current product title.

// Output:

// iPhone
// Laptop
// Perfume
// ...

// One title per loop iteration.

// });
// Explanation

// Ends the forEach() loop.

// }
// Explanation

// Ends the getdata() function.

// getdata();
// Explanation

// Calls the function.

// Without this line:

// async function getdata() {
//   ...
// }

// the function is only created, not executed.

// This line actually starts the process:

// Fetch data from API.
// Convert JSON.
// Loop through products.
// Create divs.
// Display products on the webpage.
// Flow Diagram
// getdata()
//     ↓
// fetch(api)
//     ↓
// response received
//     ↓
// res.json()
//     ↓
// products array
//     ↓
// forEach()
//     ↓
// create div
//     ↓
// add title + image
//     ↓
// append to body
//     ↓
// show on webpage