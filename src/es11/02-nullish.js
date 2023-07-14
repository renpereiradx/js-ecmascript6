const numero = 1;
const valorNoDefinido = undefined;
const valorNulo = null;
// El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para asignarle un valor.
const validacion1 = numero ?? 5;
const validacion2 = valorNoDefinido ?? 2;
const validacion3 = valorNulo ?? 5;

console.log(validacion1);
console.log(validacion2);
console.log(validacion3);