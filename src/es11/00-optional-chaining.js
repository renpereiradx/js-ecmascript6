// Cuando intentas acceder a propiedades de un objeto que no existen, JavaScript te retornará undefined.
const users = {
    darthrpm: {
        name: 'Hugo'
    },
    manupitbul: {
        name: 'Manu'
    }
}

console.log(users.darthrpm.name);
/*
    Al acceder a una propiedad más profunda de un objeto, que previamente fue evaluada como undefined, el programa se detendrá y mostrará un error de tipo.
    Ej: users.userNotDefined.edad
    Es como intentar ejecutar undefined.edad, lo cual es un error de tipo, debido a que undefined es un primitivo, no es un objeto.
*/
console.log(users.userNotDefined?.edad);
console.log(users.userNotDefined.edad);
/* 
    El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista.
    Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad redes es opcional, entonces se debería escribir usuario.redes?.facebook y no usuario?.redes?.facebook.
    Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría “ocultarlo” por un undefined, provocando que el debugging sea más complicado.
*/
