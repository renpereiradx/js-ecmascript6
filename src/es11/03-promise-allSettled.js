const promesa1 = new Promise((resolve, reject) => reject("Rechazada"));
const promesa2 = new Promise((resolve, reject) => resolve("Resuelta1"));
const promesa3 = new Promise((resolve, reject) => resolve("Resuelta2"));
/* 
    Promise.all
    El método Promise.all sirve para manejar varias promesas al mismo tiempo.
    Recibe como argumento un array de promesas.
    El problema es que Promise.all() se resolverá, si y solo si todas las promesas fueron resueltas.
    Si al menos una promesa es rechazada, Promise.all será rechazada.
*/
Promise.all([promesa1, promesa2, promesa3])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
/* 
    Promise.allSettled() permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.
*/
Promise.allSettled([promesa1, promesa2, promesa3]).then((response) =>
  console.log(response)
);
/* 
    ¿Debería usar Promise.allSettled en lugar de Promise.all? No, porque ambas son muy útiles dependiendo cómo quieras manejar tus promesas.
*/