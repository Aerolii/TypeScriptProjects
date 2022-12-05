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
