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
