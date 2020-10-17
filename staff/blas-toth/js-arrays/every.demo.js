console.log('DEMO FOR EVERY');
console.log('return true or false if all the items accomplish the condition');

var arr = [1,2,3,4];

var expresion = every(arr, function(value) {
    return value > 0;
})

console.log(expresion);

var expresion = every(arr, function(value) {
    return value > 3;
})

console.log(expresion);