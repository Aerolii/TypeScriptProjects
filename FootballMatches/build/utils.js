"use strict";
/*
 * @Author: zxb
 * @Date: 2022-03-21 16:32:38
 * @LastEditTime: 2022-03-21 17:32:13
 * @LastEditors: zxb
 * @Description:
 * @FilePath: /FootballMatches/src/utils.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = exports.stringToNumber = void 0;
const stringToNumber = (a) => parseInt(a);
exports.stringToNumber = stringToNumber;
const dateStringToDate = (dateString) => {
    const dateParts = dateString.split('/').map((d) => (0, exports.stringToNumber)(d));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
