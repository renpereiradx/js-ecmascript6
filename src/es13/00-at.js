const arreglo = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
console.log(arreglo[arreglo.length - 1]);
console.log(arreglo.at(-1));
/* 
    Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array. El índice 0 es la primera posición.
    Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda. El índice -1 es la última posición.
    La utilidad más importante de este método es para manejar índices negativos. Algo que no se puede con la notación de corchetes.
*/