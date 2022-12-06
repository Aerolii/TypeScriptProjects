// 泛型挑战
// 使用泛型实现 reduce 并保证是类型安全的

// 1. 分析 reduce 方法
// reduce 方法用来遍历数组
// reduce 接收两个参数，第一个参数为回调函数，第二个参数为初始化的值
// reduce 返回一个与第二个传入参数相同类型的值

// 2. reduce 第一个参数（迭代器）接收参数
// 第一个参数为传入的初始化值
// 第二个参数为当前迭代项

// 3. 实现

function reducer<T, V>(arr: T[], operater: (v: V, c: T) => V, initial: V): V {
  return arr.reduce(operater, initial)
}

const data = [
  {
    count: 10
  },
  {
    count: 2
  },
  {
    count: 1
  }
]

const res = reducer<{ count: number }, number>(
  data,
  (val, item) => (val += item.count),
  0
)

console.log(res)
