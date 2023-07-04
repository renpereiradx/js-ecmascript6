/* 
    De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con async.
    El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre.
*/

const arrayNames = async () => {
  const names = ["Hugo", "Carlos", "Oscar"];
  for await (let value of names) {
    console.log(value);
  }
};
arrayNames();
setTimeout(() => {
  console.log("Penultimo codigo con 3 segundos de demora para ejecutarse");
}, 3000);
console.log('Ultima linea de codigo de ejecucion');