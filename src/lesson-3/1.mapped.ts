// 映射类型

type Dog = {
  name: string
  [key: string]: string | number
}

// type Dog = {
//   name: string
// } & Record<string, string | number>

const dog: Dog = {
  name: 'Smith',
  age: 2
}

console.log(dog)

interface DogInfo {
  name: string
  age: number
}

// 映射属性
type OptionsFlags<Type> = {
  [Property in keyof Type]: string
}

// 映射结果
// {
//   name: string;
//   age: string;
// }
type DogInfoOptions = OptionsFlags<DogInfo>

const dog2: DogInfoOptions = {
  name: 'Jhon',
  age: '2'
}

console.log(dog2)

type Listeners<T> = {
  [Property in keyof T as `on${Capitalize<string & Property>}Change`]?: (
    newValue: T[Property]
  ) => void
}

// 使用映射类型实现一个监听器
function listeners<T extends {}>(obj: T, listener: Listeners<T>): void {
  // throw 'Needs to be implemented'
  const keys = Object.keys(obj)

  const properties = keys.reduce((a, v) => {
    return {
      ...a,
      [v]: {
        set(val: string) {
          console.log('val', val)
        }
      }
    }
  }, {})

  Object.defineProperties(obj, properties)
}

type DogListeners = Listeners<DogInfo>

const dogInfo = { name: 'LG', age: 2 }

listeners<DogInfo>(dogInfo, {
  onNameChange: (val: string) => `${val} => dog info`
})

dogInfo.name = 'small'
