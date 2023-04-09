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
