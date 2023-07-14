import fetch from "node-fetch";

const response = await fetch("https://api.escuelajs.co/api/v1/products");
// console.log(response);
const products = await response.json();
console.log(products);

export { products };
