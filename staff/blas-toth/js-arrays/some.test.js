var days = ["Monday", "Tuesday", "Wednesday"];
var result = some(days, function(item) {
    return item == "Monday";
});
console.assert(result == true);
console.log(result);
