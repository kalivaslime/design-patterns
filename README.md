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
