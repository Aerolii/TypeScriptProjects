// 函数重载

interface Coordinate {
  x: number
  y: number
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj
  }
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y
  }
}

// function overloading
// 实现函数重载

// 函数签名不兼容，原因是第一个变体只有一个参数，而第二个有2个参数
// function parseCoordinate(obj: Coordinate): Coordinate
// function parseCoordinate(x: number, b: number): Coordinate
// function parseCoordinate(arg1: unknown, arg2: unknown): Coordinate {
//   return {
//     x: 0,
//     y: 0
//   }
// }

// 解决
function parseCoordinate(str: string): Coordinate
function parseCoordinate(obj: Coordinate): Coordinate
function parseCoordinate(x: number, b: number): Coordinate
// 定义可选参数
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord = {
    x: 0,
    y: 0
  }
  // 针对参数进行类型检查
  if (typeof arg1 === 'string') {
    arg1.split(',').forEach((str) => {
      const [key, value] = str.split(':')
      coord[key as 'x' | 'y'] = parseInt(value, 10)
    })
  } else if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate)
    }
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number
    }
  }

  return coord
}

console.log(parseCoordinate({ x: 1, y: 2 })) // { x: 1, y: 2 }
console.log(parseCoordinate(3, 4)) // { x: 3, y: 4 }
console.log(parseCoordinate('x:10,y:10')) // { x: 10, y: 10 }
