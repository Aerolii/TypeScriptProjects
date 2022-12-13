// 实用类型
// Parameters
// ReturnType

// ConstructorParameters
// InstanceType

interface Name {
  first: string
  last: string
}

const addFullName = (name: Name): Name & { fullName: string } => {
  return {
    ...name,
    fullName: `${name.first} ${name.last}`
  }
}

console.log(addFullName({ first: 'Jack', last: 'Harrington' })) // { first: 'Jack', last: 'Harrington', fullName: 'Jack Harrington' }

function permuteRows<T extends (...args: any[]) => any>(
  interatorFunc: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] {
  return data.map(interatorFunc)
}

console.log(permuteRows(addFullName, [{ first: 'Jack', last: 'Harrington' }])) // [ { first: 'Jack', last: 'Harrington', fullName: 'Jack Harrington' } ]

// 在 类 上使用实用类型
class PersonWithFullName {
  constructor(public name: Name) {}

  get fullName() {
    return `${this.name.first} ${this.name.last}`
  }
}

const createObjectType = <T extends new (...args: any[]) => any>(
  ObjectType: T,
  data: ConstructorParameters<T>[0][]
): InstanceType<T>[] => {
  return data.map((item) => new ObjectType(item))
}

console.log(
  createObjectType(PersonWithFullName, [{ first: 'tom', last: 'smith' }])
) // [ PersonWithFullName { name: { first: 'tom', last: 'smith' } } ]

console.log(
  createObjectType(PersonWithFullName, [{ first: 'tom', last: 'smith' }]).map(
    (name) => name.fullName
  )
) // [ 'tom smith' ]
