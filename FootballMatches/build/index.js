"use strict";
/*
 * @Author: zxb
 * @Date: 2022-03-21 11:40:14
 * @LastEditTime: 2022-03-21 18:49:00
 * @LastEditors: zxb
 * @Description: 入口文件
 * @FilePath: /FootballMatches/src/index.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./inheritance/MatchReader");
// const fileData = fs.readFileSync('football.csv', {
//   encoding: 'utf-8'
// })
// console.log('matches', fileData)
// const matches = fileData.split('\n').map((a: string): string[] => a.split(','))
// console.log('matches', matches)
// const reader = new CsvFileReader('./football.csv')
// reader.reader()
// const matches = reader.data
// console.log('matches', matches)
const matchReader = new MatchReader_1.MatchReader('football.csv');
matchReader.reader();
let unitedWinGames = 0;
for (const row of matchReader.data) {
    if (row[1] === 'Man United' && row[5] === MatchResult_1.MatchResult.homeWin) {
        unitedWinGames++;
    }
    else if (row[1] === 'Man United' && row[5] === MatchResult_1.MatchResult.awayWin) {
        unitedWinGames++;
    }
}
console.log('unitedWinGames', unitedWinGames);
// Q1: 比赛结果难以理解，缺乏字面量含义
// Q2: 文件读取解析格式高度耦合
