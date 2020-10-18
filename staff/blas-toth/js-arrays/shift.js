function shift(array) {
    console.log(array[0]);
    for (var i = 1; i < array.length; i++)
        array[i-1] = array[i];
        
        array.length = array.length -1;
}

