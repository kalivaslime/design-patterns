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
