// 测试函数重载
const houses = [
  {
    name: 'Atreides',
    planets: 'Calladan'
  },
  {
    name: 'Corrino',
    planets: ['Kaitan', 'Salusa Secundus']
  },
  {
    name: 'Atreidesa',
    planets: ['Giedi Prime', 'Arrakis']
  }
]

interface House {
  name: string
  planets: string | Array<string>
}

interface HouseWithId extends House {
  id: number
}

type HouseFilter = (house: House) => boolean

// function findHouse(houses: string): HouseWithId[]
// function findHouse(houses: string, filter: HouseFilter): HouseWithId[]
// function findHouse(houses: House[]): HouseWithId[]
// function findHouse(houses: House[], filter: HouseFilter): HouseWithId[]

// function findHouse(
//   input: string | House[],
//   filter?: HouseFilter
// ): HouseWithId[] {
//   // return []
//   const houses: House[] = typeof input === 'string' ? JSON.parse(input) : input

//   return (filter ? houses.filter(filter) : houses).map((house) => ({
//     id: houses.indexOf(house),
//     ...house
//   }))
// }

// console.log(
//   findHouse(JSON.stringify(houses), ({ name }) => name === 'Atreides')
// ) // [ { id: 0, name: 'Atreides', planets: 'Calladan' } ]

// console.log(findHouse(houses, ({ name }) => name === 'Corrino')) // [{ id: 1, name: 'Corrino', planets: [ 'Kaitan', 'Salusa Secundus' ] }]

// function findHouse(houses: string | House[]): HouseWithId[]
// function findHouse(houses: string | House[], filter: HouseFilter): HouseWithId[]

// function findHouse(
//   input: string | House[],
//   filter?: HouseFilter
// ): HouseWithId[] {
//   // return []
//   const houses: House[] = typeof input === 'string' ? JSON.parse(input) : input

//   return (filter ? houses.filter(filter) : houses).map((house) => ({
//     id: houses.indexOf(house),
//     ...house
//   }))
// }

// console.log(
//   findHouse(JSON.stringify(houses), ({ name }) => name === 'Atreides')
// ) // [ { id: 0, name: 'Atreides', planets: 'Calladan' } ]

// console.log(findHouse(houses, ({ name }) => name === 'Corrino')) // [{ id: 1, name: 'Corrino', planets: [ 'Kaitan', 'Salusa Secundus' ] }]

function findHouse(
  input: string | House[],
  filter?: HouseFilter
): HouseWithId[] {
  // return []
  const houses: House[] = typeof input === 'string' ? JSON.parse(input) : input

  return (filter ? houses.filter(filter) : houses).map((house) => ({
    id: houses.indexOf(house),
    ...house
  }))
}

console.log(
  findHouse(JSON.stringify(houses), ({ name }) => name === 'Atreides')
) // [ { id: 0, name: 'Atreides', planets: 'Calladan' } ]

console.log(findHouse(houses, ({ name }) => name === 'Corrino')) // [{ id: 1, name: 'Corrino', planets: [ 'Kaitan', 'Salusa Secundus' ] }]
