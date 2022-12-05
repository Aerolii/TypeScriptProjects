function addNumber(num: number): number {
  return num * 10
}

function mutateNumber(num: number, mutate: (v: number) => number) {
  return mutate(num)
}

const t1 = addNumber(1)
const t2 = mutateNumber(1, (v) => v * 20)

console.log('t1', t1)
console.log('t2', t2)

type MutateFunction = (v: number) => number

function arrayMutate(arr: number[], mutate: MutateFunction): number[] {
  return arr.map(mutate)
}

const t3 = arrayMutate([1, 2, 3], (v) => v * 10)

console.log('t3', t3)

type AdderFunction = (v: number) => number

const addNumberFunction = (num: number): AdderFunction => {
  return (v: number) => v + num
}

const adder = addNumberFunction(1)

const add1 = adder(1)
const add2 = adder(2)
const add3 = adder(3)

console.log('add1', add1)
console.log('add2', add2)
console.log('add3', add3)
