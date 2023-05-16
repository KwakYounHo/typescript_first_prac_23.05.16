import {data} from './module-file';
import { example } from './kwakModule';

console.log(data);
const a = 1;
const b = 2;

function noreFunction() {
  console.log("Hi");
}

function c(a, b) : number {
  return a + b;
}

console.log(c(a, b));