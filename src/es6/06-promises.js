/*
 * Una promesa es una forma de manejar el asincronismo en JavaScript y se representa como un objeto que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye una razón por la cual no ha sido resuelta la solicitud.
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
    console.log("primera promesa")
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
    console.log('error catch');
  });

promise(false)
  .then(fulFillFn, rejectFn)
  //.catch((err) => {
    //console.log(err);
  //});
/* 
La clase Promise y sus métodos then y catch fueron añadidos en ES6. Esto resuelve un problema del manejo del asincronismo con callbacks, llamado Callback Hell.
.then() y .catch() son metodos de la clase Promise que retorna a traves de la funcion promise.
*/
