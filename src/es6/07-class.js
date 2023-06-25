class Animal {
  // Propiedades
  name = "Tala";
  type = "dog";
  age;

  // Constructor
  constructor(age = 7) {
    this.age = age;
  }
  // Metodos
  hablar() {
    return console.log(`Soy un perro y mi nombre es: ${this.name} y tengo ${this.age} años`);
  }
  get getName() {
    return this.name;
  };
  /**
     * @param {(arg0: string) => void} name
     */
  set setName(name) {
    this.name = name;
  };
}

const perro = new Animal();
perro.hablar();
perro.setName = "Scoby";
console.log(perro.getName);