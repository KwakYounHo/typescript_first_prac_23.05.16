const a : string = "hi i'm a string";
const b : string = " | hellow~";
function c(a:string, b:string):string {
  return a + b;
}
console.log(c(a, b));

// --------------------------------------------

let test = {
  name : "kwakyunho",
  age  : 20,
  job  : "minam"
}

function example(object:{}) {
  let value:Array<string> = [];
  for (let key in object) {
    value.push(key);
  }
  return value;
}
console.log(example(test));