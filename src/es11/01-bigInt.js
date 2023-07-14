const numero1 = 1234568791234567489786123n;
const numero2 = BigInt(1234568791234567489786123);
const numero3 = 12345648978941326465414154;

console.log(numero1);
console.log(numero2);
console.log(numero3);

/* 
    Límites numéricos en JavaScript
    📏 JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un mínimo Number.
    MIN_SAFE_INTEGER. Fuera de estos límites, los cálculos matemáticos pueden fallar y mostrar
    resultados erróneos. Con BigInt esto se resuelve.
*/