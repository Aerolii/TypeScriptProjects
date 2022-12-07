// minxins
// 实现函数创建函数
// 实现函数创建类

function createCallback<T>() {
  return function (params: T) {
    console.log(params)
  }
}

const callback = createCallback<string>()

callback('hello callback') // callback

// 函数创建类
function CreateLogger() {
  return class Logger {
    log(str: string) {
      console.log(str)
    }
  }
}

const logger = new (CreateLogger())()
logger.log('123') // 123

// 函数创建类
// 使用类型 T 约束
function CreateSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {}

    get(id: string) {
      return this.db[id]
    }

    set(id: string, value: T): void {
      this.db[id] = value
    }

    getObject(): object {
      return this.db
    }
  }
}

const StringDatabase = CreateSimpleMemoryDatabase<string>()
const database = new StringDatabase()
database.set('jack', 'hello jack')
console.log(database.get('jack')) // hello jack
console.log(database.getObject()) // { jack: 'hello jack' }

// 使用函数创建类
// 混入其它类并实现继承
// 必须是使用实用类型 Constructor
// T extends Constructor
type Constructor<T> = new (...args: any[]) => T
function Dumpable<
  T extends Constructor<{
    getObject(): object
  }>
>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject())
    }
  }
}

const DumpableSimpleDatabase = Dumpable(StringDatabase)
const dumpable = new DumpableSimpleDatabase()
dumpable.set('tom', 'hello tom')
dumpable.dump() // { tom: 'hello tom' }
