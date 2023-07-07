// Transformar un array de arrays a un objeto.
const usuario = [['name', 'Hernan'], ['edad', 30]];
console.log(usuario);
// metodo fromEntries: array a objeto.
const usuario2 = Object.fromEntries(usuario);
console.log(usuario2);
// metodo entries: objeto a array
console.log(Object.entries(usuario2));

/* 
    El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].
    Por esa  razon el codigo de abajo no funcionara. 
*/
const prueba = [['name', 'Carlos'], 'edad', 55, ['country', 'PY']];
console.log(prueba);
console.log(Object.fromEntries(prueba));