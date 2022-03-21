/*
 * @Author: zxb
 * @Date: 2022-03-21 15:30:52
 * @LastEditTime: 2022-03-21 16:32:52
 * @LastEditors: zxb
 * @Description: csv文件读取
 * @FilePath: /FootballMatches/src/CsvFileReader.ts
 */
import fs from 'fs'
import { dateStringToDate, stringToNumber } from './utils'

import { MatchData } from './MatchData'
import { MatchResult } from './MatchResult'

export class CsvFileReader {
  data: MatchData[] = []
  constructor(public path: string) {}

  reader(): void {
    this.data = fs
      .readFileSync(this.path, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          stringToNumber(row[3]),
          stringToNumber(row[4]),
          row[5] as MatchResult,
          row[6]
        ]
      })
  }
}
