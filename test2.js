var a = "hi i'm a string";
var b = " | hellow~";
function c(a, b) {
    return a + b;
}
console.log(c(a, b));
// --------------------------------------------
var test = {
    name: "kwakyunho",
    age: 20,
    job: "minam"
};
function example(object) {
    var value = [];
    for (var key in object) {
        value.push(key);
    }
    return value;
}
