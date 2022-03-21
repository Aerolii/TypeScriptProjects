"use strict";
/*
 * @Author: zxb
 * @Date: 2022-03-21 18:38:25
 * @LastEditTime: 2022-03-21 19:34:05
 * @LastEditors: zxb
 * @Description:
 * @FilePath: /FootballMatches/src/inheritance/MatchReader.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("../utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            (0, utils_1.stringToNumber)(row[3]),
            (0, utils_1.stringToNumber)(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.MatchReader = MatchReader;
