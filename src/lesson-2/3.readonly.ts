// readonly 只读类型
interface Book {
  pages: number
  name: string
}

const generateBook = (
  name: Book['name'],
  pages: Book['pages']
): Readonly<Book> => {
  return {
    name,
    pages
  }
}

const book = generateBook('JavaScript', 256)

interface Cat {
  readonly id: number
  name: string
  age?: number
}

const generateCate = (name: string, age?: number): Cat => {
  return {
    name,
    age,
    id: 1
  }
}

const cat = generateCate('Tom', 3)

type ThreeDPoint = readonly [x: number, y: number, z: number]

const get3DPoint = (x: number, y: number, z: number): ThreeDPoint => {
  return [x, y, z]
}

const p = get3DPoint(1, 2, 3)

// 标注元组
const get2DPoint = (x: number, y: number): readonly [number, number] => [x, y]

// 标注常量
const reallyConst = [1, 2, 3] as const
