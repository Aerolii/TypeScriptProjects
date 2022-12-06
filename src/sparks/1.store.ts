// 思考：
// 使用 TypeScript 实现模拟Store

interface StoreState {
  [k: string]: any
}

interface StoreAction {
  [k: string]: (v: StoreState) => void
}

interface StoreOption {
  state: StoreState
  actions: StoreAction
}

function mapStoreActions<K extends keyof StoreAction>(
  actions: StoreAction,
  key: K,
  state: StoreState
): StoreAction[K] {
  return actions[key].bind(state, state)
}

function createStore(options: StoreOption): StoreOption['actions'] {
  const { actions, state } = options
  const keys = Object.keys(actions)
  const obj = {} as StoreAction
  keys.forEach((key) => {
    obj[key] = mapStoreActions(actions, key, state)
  })

  return obj
}

const store = createStore({
  state: {
    count: 0
  },
  actions: {
    getCount: () => {
      // this
      console.log(123)
    }
  }
})

function dispatchFunc<K extends keyof StoreAction>(event: K): void {
  console.log('event', event)
}

dispatchFunc('getAction')

console.log(store)

function dispatchStoreAction<K extends keyof StoreAction>(
  event: K,
  store: StoreOption
): StoreAction[K] {
  return store.actions[event]
}
