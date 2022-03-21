"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
/*
 * @Author: zxb
 * @Date: 2022-03-21 15:30:52
 * @LastEditTime: 2022-03-21 16:32:52
 * @LastEditors: zxb
 * @Description: csv文件读取
 * @FilePath: /FootballMatches/src/CsvFileReader.ts
 */
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
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
            .map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                (0, utils_1.stringToNumber)(row[3]),
                (0, utils_1.stringToNumber)(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;
