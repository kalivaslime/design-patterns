# Node.js + TypeScript Design Patterns

## Build and Run

```sh
npm start
```

## Singleton

```ts
class Singleton {
  private static instance: Singleton
  public readonly name: string

  private constructor(name: string) {
    this.name = name
  }

  public static getInstance(name: string): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(name)
    }
    return Singleton.instance
  }
}
```

## Prototype

```ts
const monkey = {
  eatBanana() {
    return 'yum 🍌'
  },
}

const human = Object.create(monkey, {name: {value: 'John'}})

console.log(human.__proto__ === monkey) // true
console.log(Object.getPrototypeOf(human))

const baby = Object.create(human, {baby: {value: true}})

console.log(baby.__proto__.__proto__ === monkey) // true
```

## Factory

```ts
// Factory function
const createUser = (name: string, age: number) => ({
  name,
  age,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  },
})
createUser('John', 30).greet()

// Class
class UserFactory {
  constructor(public name: string, public age: number) {}

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
}
new UserFactory('John', 30).greet()
```

## Mixins

```ts
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
```

## Observer

```ts
// import { Subject } from 'rxjs'; // npm i rxjs
// const observable = new Subject();
type Observer = (value: string) => void

class Observable {
  private observers: Observer[] = []

  public subscribe(observer: Observer) {
    this.observers.push(observer)
  }

  public unsubscribe(observer: Observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  public notify(value: any) {
    this.observers.forEach(observer => observer(value))
  }
}

const observable = new Observable()
const obs1: Observer = value => console.log(value + ' 👹')
const obs2: Observer = value => console.log(value + ' 👺')
const obs3: Observer = value => console.log(value + ' 👻')

observable.subscribe(obs1)
observable.subscribe(obs2)
observable.subscribe(obs3)

observable.notify('Hello') // Hello 👹 👺 👻

observable.unsubscribe(obs2)

observable.notify('World') // World 👹 👻
```

## Proxy

```ts
const person = {
  name: 'Yiannis Doe',
  age: 30,
  nationality: 'Greek',
}

const personProxy = new Proxy(person, {
  get(target, property) {
    if (!target[property])
      throw new Error(`Property ${property.toString()} does not exist!`)

    console.log(
      `Reading property ${property.toString()} is ${Reflect.get(
        target,
        property
      )}`
    )
    return Reflect.get(target, property)
  },

  set(target, property, value): boolean {
    if (property === 'age' && typeof value !== 'number')
      throw new Error('Age must be a number!')
    if (property === 'name' && value.length < 3)
      throw new Error('Name must be at least 3 characters long!')
    console.log(`Setting property ${property.toString()} to ${value}...`)
    target[property] = value
    return true
  },
})

personProxy.name // Reading property name...
personProxy.age = 31 // Setting property age to 31...
personProxy.name = 'jo' //throw new Error('Name must be at least 3 characters long!')
```
