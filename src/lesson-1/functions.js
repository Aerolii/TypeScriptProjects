"use strict";
exports.__esModule = true;
exports.getName = exports.introduce = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
var addStrings = function (str1, str2) {
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
var introduce = function (solutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(solutation, " ").concat(names.join(' '));
};
exports.introduce = introduce;
var getName = function (user) {
    return "".concat(user === null || user === void 0 ? void 0 : user.first, " ").concat(user === null || user === void 0 ? void 0 : user.last);
};
exports.getName = getName;
