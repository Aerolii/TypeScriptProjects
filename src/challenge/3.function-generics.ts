interface UserName {
  first: string
  last: string
  locale?: boolean
}

function getUserName<T extends UserName>(params: T) {
  return params.locale
    ? `${params.first} ${params.last}`
    : `${params.last} ${params.first}`
}

console.log(
  getUserName({ first: 'XiaoBo', last: 'Zhang', locale: false, age: 33 })
)

function getUserNameWithRequired<T extends Required<UserName>>(params: T) {
  return params.locale
    ? `${params.first} ${params.last}`
    : `${params.last} ${params.first}`
}

console.log(
  getUserNameWithRequired({
    first: 'XiaoBo',
    last: 'Zhang',
    locale: false,
    age: 33
  })
)
