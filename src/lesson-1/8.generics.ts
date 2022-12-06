// 范型
// 范型即类型参数，使得传入类型可变
// 可应用于 函数、类、接口等

type SimpleStateFunctions<T> = [getter: () => T, setter: (v: T) => void]

function simpleState<T>(initial: T): SimpleStateFunctions<T> {
  let val: T = initial
  return [
    () => val,
    (v: T) => {
      val = v
    }
  ]
}

const [st1getter, st1setter] = simpleState('')
console.log(st1getter()) // ''
st1setter('hello')
console.log(st1getter()) // hello

const [st2getter, st2setter] = simpleState<string | null>(null)
console.log(st2getter()) // null
st2setter('welcome')
console.log(st2getter()) // welcome

function ranks<T>(randItems: T[], rank: (v: T) => number): T[] {
  const ranks = randItems.map((item) => {
    return {
      item,
      rank: rank(item)
    }
  })
  ranks.sort((a, b) => a.rank - b.rank)

  return ranks.map(({ item }) => item)
}

interface Pokemon {
  name: string
  hp: number
}

const pokemons: Pokemon[] = [
  {
    name: 'David',
    hp: 20
  },
  {
    name: 'David',
    hp: 2
  }
]

console.log(ranks(pokemons, ({ hp }) => hp)) // [ { name: 'David', hp: 2 }, { name: 'David', hp: 20 } ]

interface Animal {
  category: string
  age: number
}

const animals: Animal[] = [
  {
    category: 'Dog',
    age: 20
  },
  {
    category: 'Cat',
    age: 30
  },
  {
    category: 'Snake',
    age: 10
  }
]

console.log(ranks(animals, ({ age }) => age))

console.log(animals)

// [
//   { category: 'Dog', age: 20 },
//   { category: 'Cat', age: 20 },
//   { category: 'Snake', age: 20 }
// ]

// sort排序影响原数组
function sortFunction<T>(arr: T[], sortCallback: (a: T, b: T) => number): T[] {
  return arr.sort(sortCallback)
}

console.log(sortFunction(animals, (a, b) => a.age - b.age))
