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

const myDB = new InMemoryDatabase()
myDB.set('foo', 'foo in db')

console.log(myDB.get('foo'))

const pDB = new PersisteneMemoryDB()
pDB.set('foo', 'foo in db')

const s = pDB.saveToString()
console.log(s) // {"foo":"foo in db"}
pDB.restoreFromString(s)
