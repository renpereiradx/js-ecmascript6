// Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.
const elementos = new Set();
elementos.add('Guts');
elementos.add('Casca');

const arreglo = [1, 2, 2, 3, 4, 4, 5];
const elementosUnicos = new Set(arreglo);

console.log(elementos);
console.log(elementosUnicos);

/* 
    * Cómo manipular los Sets
    * Para manipular estas estructuras de datos, existen los siguientes métodos:
    add(value): añade un nuevo valor.
    delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
    has(value): retorna un booleano si existe o no el valor dentro del Set.
    clear(value): elimina todos los valores del Set.
    size: retorna la cantidad de elementos del Set.
*/