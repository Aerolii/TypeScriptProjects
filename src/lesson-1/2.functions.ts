function addNumbers(a: number, b: number) {
  return a + b
}

export const addStrings = (str1: string, str2: string): string => {
  return `${str1} ${str2}`
}

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`

export const printFormat = (title: string, param: string | number) => {
  console.log(format(title, param))
}

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`)

export const introduce = (solutation: string, ...names: string[]): string =>
  `${solutation} ${names.join(' ')}`

export const getName = (user: { first: string; last: string }) =>
  `${user?.first ?? 'first'} ${user?.last ?? 'last'}`
