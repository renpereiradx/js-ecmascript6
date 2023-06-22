/*
 * Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre.
 */
// Antes de ECS6
let nombre = "Marcos";
let edad = 30;

const object = { nombre: nombre, edad: edad };
console.log(object);

// ECS6
const object2 = { nombre, edad };
console.log(object2);
