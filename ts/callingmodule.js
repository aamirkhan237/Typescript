"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = __importDefault(require("./modules"));
const modules2_1 = __importDefault(require("./modules2"));
let teach = new modules2_1.default();
console.log(teach.data);
let stud = new modules_1.default();
console.log(stud.data);
//tsc *ts -w
