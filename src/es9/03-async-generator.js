/* 
  Los generados asíncronos son semejantes a los generadores que ya conoces, pero combinando sintáxis de promesas.
*/
async function* generatorFn() {
  try {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
  } catch (error) {
    yield await error;
  }
}

const generator = generatorFn();
generator.next().then((resolve) => console.log(resolve.value));
generator.next().then((resolve) => console.log(resolve.value));
generator.next().catch((err) => console.log(err.value));
console.log("HOLAA!!");

function* anotherGeneratorFn() {
    try {
      yield Promise.resolve(1);
      yield Promise.resolve(2);
    } catch (error) {
      yield error;
    }
  }
  
  const anotherGenerator = anotherGeneratorFn();
  console.log(anotherGenerator.next().value);
  console.log(anotherGenerator.next().value);
  console.log(anotherGenerator.next().value);
  console.log('HOLA ULTIMO');