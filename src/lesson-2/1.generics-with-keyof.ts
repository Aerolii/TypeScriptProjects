// 泛型扩展

// 使用 keyof 规范可访问属性名
function getPropValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key])
}

const testData = [
  {
    name: 'David',
    age: 22
  },
  {
    name: 'Steven',
    age: 30
  },
  {
    name: 'Bob',
    age: 33
  }
]

console.log(getPropValues(testData, 'age'))
console.log(getPropValues(testData, 'name'))

// [ 22, 30, 33 ]
// [ 'David', 'Steven', 'Bob' ]

interface BaseEvent {
  time: number
  user: string
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; produceID: string }
  checkout: BaseEvent
}

function sendEvent<EventName extends keyof EventMap>(
  eventName: EventName,
  data: EventMap[EventName]
): void {
  console.log(eventName, data)
}

sendEvent('addToCart', {
  time: Date.now(),
  user: 'Bob',
  quantity: 1,
  produceID: 'ABCD-0911-2100'
})

sendEvent('checkout', {
  time: Date.now(),
  user: 'Bob'
})
