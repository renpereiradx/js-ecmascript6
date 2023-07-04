const ARRAY = [1, 2, 4, 6, 7];
console.log(ARRAY.includes(3));

// Podemos saber si un objeto contiene o no una 'PROPIEDAD'.
const OBJECT = {nombre: 'Hugo', edad: 31, sexo: 'M'};
// La palabra reservada in busca si un valor pertenece o no a un objeto y al prototipo. OJO.
'toString' in OBJECT;
// El método hasOwnProperty evalúa solamente las propiedades del objeto. Sin embargo puede que colisione con alguna otra propiedad en el prototipo, 
OBJECT.hasOwnProperty('toString'); //false
// la última versión de ECMAScript lanzó Object.hasOwn y se recomienda utilizar este si el navegador en el que trabajas lo soporta: Can I use?.
OBJECT.hasOwn('toString'); //false