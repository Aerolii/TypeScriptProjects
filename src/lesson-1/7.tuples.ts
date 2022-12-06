// 元组
// 一个固定长度与每一项类型的数组

type ThreeDCordinate = [x: number, y: number, z: number]

function get3DCordinate(
  c1: ThreeDCordinate,
  c2: ThreeDCordinate
): ThreeDCordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]]
}

console.log(get3DCordinate([0, 0, 0], [10, 20, 30])) // [ 10, 20, 30 ]

function simpleSetState(
  initial: string
): [getter: () => string, setter: (v: string) => void] {
  let str: string = initial
  return [
    () => str,
    (v) => {
      str = v
    }
  ]
}

const [getVal, setVal] = simpleSetState('hello')

console.log(getVal())
setVal('Welcome')
console.log(getVal())
