// 字面类型

function rollDice_bak(dice: number): number {
  let point = 0

  for (let i = 0; i < dice; i++) {
    point += Math.floor(Math.random() * 5) + 1
  }
  return point
}

// 通过字面量类型限制数量
function rollDice(dice: 1 | 2 | 3): number {
  let point = 0

  for (let i = 0; i < dice; i++) {
    point += Math.floor(Math.random() * 5) + 1
  }
  return point
}

console.log(rollDice(2)) // 8

// 通过字面量类型实现函数重载
function sendEventHandle(name: 'addToCart', data: { productID: number }): void
function sendEventHandle(name: 'checkout', data: { count: number }): void
function sendEventHandle(name: string, data: unknown): void {
  console.log(`${name} ${JSON.stringify(data)}`)
}

sendEventHandle('addToCart', { productID: 1 }) // addToCart {"productID":1}
sendEventHandle('checkout', { count: 1 }) // checkout {"count":1}
