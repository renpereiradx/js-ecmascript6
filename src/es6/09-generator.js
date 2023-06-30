/* 
    * LINK para entender sobre Generators
    ? https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript-es

    * Concepto (recurso Platzi)
    * Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.
    *Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto.
*/
function* iterator(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterator(['Guts', 'Casca', 'Isidro', 'Griffith', 'Beherit']);
console.log(it.next().value);
const person = it.next().value;
console.log(person);
const it2 = [...it];
console.log(it2);
console.log(it.next().value);

// Platzi reto
/* 
  * Tu tarea será proveer de una función getId() que se encargue de generar dichos identificadores y, a través de un método .next() se pueda pasar al siguiente identificador, y a través de la propiedad .value se pueda obtener el valor del nuevo identificador.
  * Cada vez que llame a la función de la siguiente forma debería retornarme un identificador nuevo y completamente diferente:
*/
// Remember: La palabra clave yield pausa una funcion generadora, devuelve el valor, para luego volver a retornar en el punto en donde habia quedado.
export function* getId() {
  while (true) {
    yield Math.random().toString(36).substring(5).toUpperCase();
  }
}
const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
/* 
  * Explicacion del metodo para generar valores alfanumericos aleatorios:
  ? https://platzi.com/comentario/4286376/
*/