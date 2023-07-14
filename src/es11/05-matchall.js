const regex = /\b(Apple)+\b/g;
const fruit = 'Orange, Apple, Kiwi banana Apple hola hello Hola Apple';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}

/* 
    El método matchAll de los strings devuelve un iterable con todas las coincidencias del string específico a partir de una expresión regular, colocada como argumento.
    string.matchAll(regex)
    En el iterable, existe una propiedad denominada index con el índice del string donde la búsqueda coincide.
*/