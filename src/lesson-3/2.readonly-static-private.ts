// readonly
// 只读属性

class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

const lg = new Doggy('foo', 12)

console.log(lg.name)

// private
// static
// private 与  protected 区别
// private 与 protected 属性都不能在实例中访问
// private 属性只能在当前类中访问
// protected 属性可以在当前类及其子类中访问

class Machine {
  constructor(protected name: string, private mac: string) {}
}

const compute = new Machine('compute', 'COM1-0989')

// private 与 readonly
// 定义单例模型
class DoggyList {
  private doggies: Doggy[] = []
  static instance: DoggyList = new DoggyList()
  private constructor() {}

  getDoggies() {
    return this.doggies
  }

  static addDoggy(dog: Doggy) {
    DoggyList.instance.doggies.push(dog)
  }
}

DoggyList.addDoggy(lg)
console.log(DoggyList.instance.getDoggies()) // [ Doggy { name: 'foo', age: 12 } ]
