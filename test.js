"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_file_1 = require("./module-file");
console.log(module_file_1.data);
var a = 1;
var b = 2;
function noreFunction() {
    console.log("Hi");
}
function c(a, b) {
    return a + b;
}
console.log(c(a, b));
