// 使用reduce实现foreach

function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((_, v) => {
    forEachFunc(v)
    return undefined
  }, undefined)
}

// 使用reduce实现filter
function myFilter<T>(items: T[], filter: (v: T) => boolean): T[] {
  return items.reduce((a, v) => (filter(v) ? [...a, v] : a), <Array<T>>[])
}

console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => v % 2 === 0)) // [2,4,6,8]

// function myMap<T>(items: T[], mapFunc: (v: T) => T): T[] {
//   return items.reduce((a, v) => a.concat(mapFunc(v)), <Array<T>>[])
// }

// console.log(myMap([1, 2, 3, 4, 5], (v) => v * 2)) // [ 2, 4, 6, 8, 10 ]

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[])
}
console.log(myMap([1, 2, 3, 4, 5], (v) => `${v}`)) // [ '1', '2', '3', '4', '5' ]

interface TypeObject<T> {
  a: T
  [key: string]: any
}

function test<T, K>(params: TypeObject<T>): K {
  return params.a ? params.b : params.c
}

console.log(test<boolean, number>({ a: true, b: 1, c: 0 }))
