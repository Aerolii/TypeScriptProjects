import { capitalize } from '../utils/utils'

type Processed<T> = {
  eventName: keyof T
  data: T[keyof T]
}

type FilterEventName<Prop> = `filter${Capitalize<string & Prop>}`
type MapEventName<Prop> = `map${Capitalize<string & Prop>}`

type Handler<T> = {
  [Prop in keyof T as MapEventName<Prop>]?: (data: T[Prop]) => T[Prop]
} & {
  [Prop in keyof T as FilterEventName<Prop>]?: (data: T[Prop]) => boolean
}

// type Handler<T> = {
//   [Prop in keyof T as `map${Capitalize<string & Prop>}`]?: (
//     data: T[Prop]
//   ) => T[Prop]
// } & {
//   [Prop in keyof T as `filter${Capitalize<string & Prop>}`]?: (
//     data: T[Prop]
//   ) => boolean
// }

class EventHandler<T extends {}> {
  private handlers: Handler<T>[] = []
  private processed: Processed<T>[] = []

  addHandler(handler: Handler<T>): void {
    this.handlers.push(handler)
  }

  handleEvent<K extends keyof T>(eventName: K, data: T[K]): void {
    let allowEvent = true

    console.log(this.handlers)

    for (const handler of this.handlers) {
      // @ts-ignore
      const filterFunc = handler[`${capitalize(eventName as string)}`]

      console.log(filterFunc)
    }

    if (allowEvent) {
      let mappedData = { ...data }
      for (const handler of this.handlers ?? []) {
        console.log(handler)
      }
    }
  }

  getProcessedEvent() {}
}

interface UserEventMap {
  login: {
    user?: string
    name?: string
    hasSession?: boolean
  }

  logout: {
    user?: string
  }
}

class UserEventHandler extends EventHandler<UserEventMap> {}

const user = new UserEventHandler()

user.addHandler({
  filterLogin: ({ user }) => Boolean(user),
  mapLogin: ({ user, name }) => ({
    user,
    name,
    hasSession: Boolean(user && name)
  })
})

user.handleEvent('login', { name: 'jack', user: 'jack smith' })
