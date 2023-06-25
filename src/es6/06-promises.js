/*
 * Una promesa es una forma de manejar el asincronismo en JavaScript y se representa como un objeto que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye una razón por la cual no ha sido resuelta la solicitud.
Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona.
 */

// Mi funcion expresiva
const promise = (answer) => {
  /* 
    El argumento de la clase Promise es una función que recibe dos parámetros:
    resolve: cuando la promesa es resuelta.
    reject: cuando la promesa es rechazada.
    Puedes utilizar cualquier nombre, siempre y cuando sepas su funcionamiento.
  */
  return new Promise((resolve, reject) => {
    if (answer) {
      resolve("Good");
    } else {
      reject("Opps");
    }
  });
};

const fulFillFn = () => {
  console.log("Correcto");
};

const rejectFn = () => {
  console.log("Ups, algo no anduvo");
};

promise(true)
  .then((response) => {
    console.log(response);
  })
  .then(() => {
    console.log("segunda promesa");
  })
  .catch((err) => {
    console.log(err);
    console.log("error catch");
  });

promise(false).then(fulFillFn, rejectFn);
//.catch((err) => {
//console.log(err);
//});
/* 
La clase Promise y sus métodos then y catch fueron añadidos en ES6. Esto resuelve un problema del manejo del asincronismo con callbacks, llamado Callback Hell.
.then() y .catch() son metodos de la clase Promise que retorna a traves de la funcion promise.
*/

// Otro ejemplo
const doTask = (iterations) => {
  return new Promise((resolve, reject) => {
    const numbers = [];

    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        reject({
          error: true,
          message: "Se ha sacado un 6",
        });
      }
    }

    resolve({
      error: false,
      value: numbers,
    });
  });
};

doTask(5)
  .then((result) => console.log("Tiradas correctas: ", result.value))
  .catch((err) => console.error("Ha ocurrido algo: ", err.message));
