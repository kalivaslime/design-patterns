import {Singleton} from './singleton.js'

const singleton = Singleton.getInstance('John')
const singelton2 = Singleton.getInstance('Jane')
console.log(singleton.name) // John
console.log(singelton2.name) // John not Jane 👹
console.log(singleton === singelton2) // true
