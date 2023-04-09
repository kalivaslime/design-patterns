export class Singleton {
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
