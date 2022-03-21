/*
 * @Author: zxb
 * @Date: 2022-03-21 15:49:03
 * @LastEditTime: 2022-03-21 15:50:05
 * @LastEditors: zxb
 * @Description:
 * @FilePath: /FootballMatches/src/MatchData.ts
 */

import { MatchResult } from './MatchResult'

export type MatchData = [Date, string, string, number, number, MatchResult, string]
