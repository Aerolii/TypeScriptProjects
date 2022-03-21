/*
 * @Author: zxb
 * @Date: 2022-03-21 16:32:38
 * @LastEditTime: 2022-03-21 17:32:13
 * @LastEditors: zxb
 * @Description:
 * @FilePath: /FootballMatches/src/utils.ts
 */

export const stringToNumber = (a: string): number => parseInt(a)

export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((d: string): number => stringToNumber(d))
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}
