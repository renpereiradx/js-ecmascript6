/* 
    * Desestructuracion
    ! ARRAYS & OBJECTS
*/
// Array destructuring
let arreglo = ["uno", "dos", "tres"];
let [a, b, c] = arreglo;
console.log(a, b, c);
console.log(a, arreglo[1], arreglo[2]);

// Object Destructuring
let person = {
  userName: "Hugo",
  age: 31,
  country: "PY",
};
let { userName, age, country } = person;
console.log(userName, age, country);
console.log(person.userName, age, country);

// Spread Operator
let person2 = { name: "Rene", age: 25 };
let city = "Hernandarias";
let data = { ...person2, city };e
console.log(data);

// Rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[1];
}

console.log(sum(1, 2, 3));

const objeto = {
  nombre: "Andres",
  age: 23,
  plataforma: "Platzi",
};
const array = [0, 1, 2, 3, 4, 5];

const { plataforma, ...usuario } = objeto;
const [cero, ...positivos] = array;

usuario; // { nombre: 'Andres', age: 23 }
positivos; // [ 1, 2, 3, 4, 5 ]
console.log(positivos);