class PlumbingSystem {
  private pressure = 0
  setPressure(pressure: number) {
    console.log(`Pressure set to ${pressure}`)
    this.pressure = pressure
  }
  turnOn() {
    console.log(
      'Plumbing system turned on with pressure' + this.pressure + 'psi'
    )
  }
  turnOff() {
    this.pressure = 0
    console.log('Plumbing system turned off')
  }
}

class ElectricSystem {
  private power = 0
  setPower(power: number) {
    console.log(`Power set to ${power}`)
    this.power = power
  }
  turnOn() {
    console.log('Electric system turned on with power' + this.power + 'W')
  }
  turnOff() {
    this.power = 0
    console.log('Electric system turned off')
  }
}

class House {
  private plumbingSystem = new PlumbingSystem()
  private electricSystem = new ElectricSystem()

  public turnOnSystems() {
    this.electricSystem.setPower(100)
    this.electricSystem.turnOn()
    this.plumbingSystem.setPressure(300)
    this.plumbingSystem.turnOn()
  }

  public turnOffSystems() {
    this.electricSystem.turnOff()
    this.plumbingSystem.turnOff()
  }
}

const house = new House()
house.turnOnSystems()
house.turnOffSystems()
