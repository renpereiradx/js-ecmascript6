try {
    hello();
} catch (error) {
    console.log(error);
}
// El parámetro opcional de catch permite omitir el error si es necesario.
try {
    anotherFunction();
} catch {
    console.log('Manejo propio o personalizado del error');
}
// Esta ultima caracteristica debe de ser usado con mucha sabiduria ;)
