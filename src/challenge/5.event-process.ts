// 映射类型实现用户事件
type FilterFunction<T> = (data: T[keyof T]) => boolean
type Filters<T> = Record<keyof T, FilterFunction<T>[]>

type MapFuntion<T> = (data: T[keyof T]) => T[keyof T]
type Maps<T> = Record<keyof T, MapFuntion<T>[]>

type ProcessedEvent<T> = {
  eventName: keyof T
  data: T[keyof T]
}

class EventProcessor<T extends {}> {
  private filters: Filters<T> = <Filters<T>>{}
  private maps: Maps<T> = <Maps<T>>{}
  private processed: ProcessedEvent<T>[] = []

  handleEvent<K extends keyof T>(eventName: K, data: T[K]): void {
    let allowEvent = true

    for (const filter of this.filters[eventName] ?? []) {
      if (!filter(data)) {
        allowEvent = false
        break
      }
    }

    if (allowEvent) {
      let mappedData = {
        ...data
      }

      for (const map of this.maps[eventName] ?? []) {
        mappedData = <T[K]>map(data)
      }

      this.processed.push({
        eventName,
        data: mappedData
      })
    }
  }

  addFilter<K extends keyof T>(eventName: K, filter: (data: T[K]) => boolean) {
    this.filters[eventName] ||= []
    this.filters[eventName].push(<FilterFunction<T>>filter)
  }

  addMap<K extends keyof T>(eventName: K, map: (data: T[K]) => T[K]): void {
    this.maps[eventName] ||= []
    this.maps[eventName].push(<MapFuntion<T>>(<unknown>map))
  }

  getProcessedEvents() {
    return this.processed
  }
}

interface EventMapOptions {
  login: {
    user?: string | undefined | null
    name?: string
    hasSession?: boolean
  }

  logout: {
    user?: string
  }
}

class UserEventProcessor extends EventProcessor<EventMapOptions> {}

const uep = new UserEventProcessor()

uep.addFilter('login', ({ user }) => Boolean(user))

uep.addMap('login', (data) => {
  return {
    ...data,
    hasSession: Boolean(data.user && data.name)
  }
})

uep.handleEvent('login', {
  user: null,
  name: 'Jack'
})

uep.handleEvent('login', {
  user: 'tom',
  name: 'tomas'
})

uep.handleEvent('logout', {
  user: 'tom'
})

console.log(uep.getProcessedEvents())
