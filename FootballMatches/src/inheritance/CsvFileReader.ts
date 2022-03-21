/*
 * @Author: zxb
 * @Date: 2022-03-21 18:36:27
 * @LastEditTime: 2022-03-21 19:00:53
 * @LastEditors: zxb
 * @Description: csv file reader 抽象类
 * @FilePath: /FootballMatches/src/inheritance/CsvFileReader.ts
 */

import fs from 'fs'

export abstract class CsvFileReader<T> {
  data: T[] = []
  constructor(public path: string) {}

  // 使用抽象方法由子类实现
  abstract mapRow(row: string[]): T

  reader(): void {
    this.data = fs
      .readFileSync(this.path, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow)
  }
}
