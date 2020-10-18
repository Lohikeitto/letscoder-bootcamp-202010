console.log('DEMO some')
console.log('Return true or false if one of the items accomplish the condition')

var arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log("value > 0");
var expresion = some(arr, function(value) {
    return value > 0;
})

console.log(expresion);

console.log("value > 6");
var expresion = some(arr, function(value) {
    return value > 6;
})

console.log(expresion);