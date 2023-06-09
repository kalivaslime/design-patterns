class Dog {
  constructor(public name: string) {}
}

const animalFunctionality = {
  walk: () => console.log('Walking!'),
  sleep: () => console.log('Sleeping!'),
}

const dogFunctionality = {
  __proto__: animalFunctionality,
  bark: () => console.log('Woof!'),
  wagTail: () => console.log('Wagging my tail!'),
  play: () => console.log('Playing!'),
  walk() {
    super.walk()
  },
  sleep() {
    super.sleep()
  },
}

Object.assign(Dog.prototype, dogFunctionality)

const pet1 = new Dog('Daisy')

console.log(pet1.name) // Daisy
pet1.bark() // Woof!
pet1.play() // Playing!
pet1.walk() // Walking!
pet1.sleep() // Sleeping!

// Mixins make it easy for us to add custom functionality to classes or objects without using inheritance. This is useful when we want to add functionality to a class that we don't own or don't want to modify.
