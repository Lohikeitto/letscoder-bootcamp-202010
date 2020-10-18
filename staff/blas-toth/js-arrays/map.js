function map (array, expression) {
  var mapArray = [];
  for (var i = 0; i < array.length; i++) {
      mapArray.push(expression(array[i]));
  }
  return mapArray;
}