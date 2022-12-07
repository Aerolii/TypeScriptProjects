interface Database {
  get(id: string): string
  set(id: string, v: string): void
}

type DB = Record<string, string>

class InMemoryDatabase implements Database {
  protected db: DB = {}

  get(id: string): string {
    return this.db[id]
  }

  set(id: string, value: string): void {
    this.db[id] = value
  }
}

interface Persistable {
  saveToString(): string
  restoreFromString(storedState: string): void
}

class PersisteneMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}

const myDB = new PersisteneMemoryDB()
myDB.set('foo', 'db')
console.log(myDB.get('foo'))

const saved = myDB.saveToString()

myDB.set('foo', 'foo1')
console.log(myDB.get('foo'))

const myDB2 = new PersisteneMemoryDB()
myDB2.restoreFromString(saved)
console.log(myDB2.get('foo'))
