# [足球比赛数据分析项目](https://app.diagrams.net/#G1YCZSfX5uE4HKyNalN04_HFZOkBehl488)

本项目使用TypeScript实现一个足球比赛数据分析并生成报表的程序。

## 使用`enum`枚举定义数据类型

```typescript
export enum MatchResult {
  'homeWin' = 'H', // 主场获胜
  'awayWin' = 'A', // 客场获胜
  'draw' = 'D' // 平局
}
```

## [使用抽象类重构](https://app.diagrams.net/#G1YCZSfX5uE4HKyNalN04_HFZOkBehl488)

由于csv文件读取其格式固定，但最终数据千变万化，因此若直接使用函数实现，则不可复用。

- `CsvFileReader`定义
  
```typescript
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
```

- `MatchReader`继承并实现抽象类方法

```typescript
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
```