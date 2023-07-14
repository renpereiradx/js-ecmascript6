const promesa1 = new Promise((resolve, reject) => reject("Rechazada"));
const promesa2 = new Promise((resolve, reject) => resolve("Resuelta1"));
const promesa3 = new Promise((resolve, reject) => resolve("Resuelta2"));
/* 
    Promise.any() es otra forma de manejar varias promesas, que retornará la primera promesa que sea resuelta y rebotará si todas las promesas son rechazadas.
*/
Promise.any([promesa1, promesa2, promesa3])
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
