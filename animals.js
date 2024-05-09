class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
}

class Dog extends Animal {
  makeAsound() {
    return this.sound;
  }
}

class Cat extends Animal {
  makeAsound() {
    return this.sound;
  }
}

const dog = new Dog("Leysi", "Hav-hav");
const cat = new Cat("Vaspur", "Myau");

console.log(dog.makeAsound());
console.log(cat.makeAsound());
