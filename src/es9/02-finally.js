const promiseFn = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Aprobado") : reject("Algo salio mal");
  });
};

promiseFn()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("La promesa ha finalizado"));

/* El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada. */