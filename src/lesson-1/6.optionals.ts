// 函数可选参数的使用

function printString(str1: string, str2: string, extra?: string): string {
  return `${str1} ${str2} ${extra || ''}`
}

console.log(printString('hello', 'world', '!'))

interface User {
  id: number
  info?: {
    email?: string
  }
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!
  }
  return ''
}

function getEmailEasy(user: User): string {
  return user.info?.email ?? ''
}

function addWidthCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y])
  callback?.()
}

console.log(getEmailEasy({ id: 1, info: {} })) // ''
