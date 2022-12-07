interface DataBase<T, K> {
  get(id: K): T
  set(id: K, v: T): void
}

type DBKeyType = string | number | symbol

class MemoryDatabase<T, K extends DBKeyType> implements DataBase<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>

  get(id: K): T {
    return this.db[id]
  }

  set(id: K, value: T): void {
    this.db[id] = value
  }
}

interface PersisTable {
  saveToString(): string
  restoreFromString(storedState: string): void
}

class PersistendMemoryDB<T, K extends DBKeyType>
  extends MemoryDatabase<T, K>
  implements PersisTable
{
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}

const db1 = new PersistendMemoryDB<number, string>()
db1.set('foo', 12)
console.log(db1.get('foo')) // 12

const savedDB = db1.saveToString()
db1.set('foo', 13)
console.log(db1.get('foo')) // 13

// console.log(db1.restoreFromString(savedDB))
db1.restoreFromString(savedDB)
console.log(db1.get('foo')) // 12

// const myDB1 = new PersistendMemoryDB<number>()
// myDB.set('foo', 1)
// console.log(myDB.get('foo'))

// const saved1 = myDB.saveToString()

// myDB.set('foo', 'foo1')
// console.log(myDB.get('foo'))

// const myDB3 = new PersistendMemoryDB()
// myDB2.restoreFromString(saved)
// console.log(myDB2.get('foo'))
