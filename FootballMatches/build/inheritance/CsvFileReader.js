"use strict";
/*
 * @Author: zxb
 * @Date: 2022-03-21 18:36:27
 * @LastEditTime: 2022-03-21 19:00:53
 * @LastEditors: zxb
 * @Description: csv file reader 抽象类
 * @FilePath: /FootballMatches/src/inheritance/CsvFileReader.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(path) {
        this.path = path;
        this.data = [];
    }
    reader() {
        this.data = fs_1.default
            .readFileSync(this.path, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row) => row.split(','))
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
