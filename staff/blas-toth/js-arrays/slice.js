
var newArray = [];

function slice(array, num1, num2) {
  if (num1 === undefined) num1 = 0;
  if (num1 < 0) num1 = array.length + num1;
  if (num2 === undefined) num2 = array.length;
  if (num2 < 0) num2 = array.length + num2;

  for (i = num1; i < num2; i++) {
    newArray[i - num1] = array[i];
  }
  return newArray;
}

