const asyncFn = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Promesa cumplida"), 2000)
      : reject(new Error("Ups! Ha ocurrido un error"));
  });
};
/* 
    La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.
    La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.
*/
const anotherFn = async () => {
  const something = await asyncFn();
  console.log(`${something} tipo = ${typeof something}`);
  console.log("Another Function");
};
/* 
    * ¿Cuál es la mejor forma de manejar promesas, then o async / await? Ambas son muy útiles, manejar ambas te hará un mejor desarrollador.
*/
anotherFn();
console.log("before");
console.log("after");
