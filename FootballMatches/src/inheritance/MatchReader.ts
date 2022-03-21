/*
 * @Author: zxb
 * @Date: 2022-03-21 18:38:25
 * @LastEditTime: 2022-03-21 19:34:05
 * @LastEditors: zxb
 * @Description:
 * @FilePath: /FootballMatches/src/inheritance/MatchReader.ts
 */

import { CsvFileReader } from './CsvFileReader'
import { MatchData } from '../MatchData'
import { MatchResult } from '../MatchResult'
import { dateStringToDate, stringToNumber } from '../utils'

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      stringToNumber(row[3]),
      stringToNumber(row[4]),
      row[5] as MatchResult,
      row[6]
    ]
  }
}
