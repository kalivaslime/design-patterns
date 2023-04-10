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
