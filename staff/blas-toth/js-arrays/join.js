
function join(array, separator) {
  var joined = "";
  for (var i = 0; i < array.length; i++) {
      if ( i == array.length - 1 ) joined += array[i];
      else joined += array[i] + separator;
}
  joined = "\"" + joined + "\"";
  console.log(joined);
}
