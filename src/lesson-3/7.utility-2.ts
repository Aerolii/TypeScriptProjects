// 实用类型

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
) {
  return data.map(interatorFunc)
}

console.log(permuteRows(addFullName, [{ first: 'Jack', last: 'Harrington' }])) // [ { first: 'Jack', last: 'Harrington', fullName: 'Jack Harrington' } ]
