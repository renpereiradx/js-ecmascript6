import saludar from "./module.js";
saludar();

// Reto Platzi
import { getData } from "./module.js";

function solution() {
  return getData().then((response) => response);
}

solution().then((response) => {
  console.log(response);
});
