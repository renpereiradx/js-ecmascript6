function cuadrado(num) {
    return num * num;
}

const resta = (num) => {
    return num - 2;
}

// retorno implicito
const suma = sum => sum + 5;
// retorno implicito 
const division = (a, b) => {
    a + b;
}

console.log(cuadrado(2));
console.log(resta(4));
console.log(suma(4));
console.log(division(4, 2));
