/* 
    * Los métodos de transformación de objetos a arrays sirven para obtener la información de las propiedades, sus valores o ambas.
*/
/* 
    * Obtener los pares de valor de un objeto en un array. Object.entries() devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento.
*/
const countries = { PY: 'Paraguay', ARG: 'Argentina', BR: 'Brasil' };
console.log(Object.entries(countries));

