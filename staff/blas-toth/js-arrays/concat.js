function concat(array1, array2) {
    var arrayConcat = [];

    for(i=0; i < array1.length; i++) {
        arrayConcat[i] = array1[i];
    }

    for(i=0; i < array2.length; i++) {
        arrayConcat[arrayConcat.length] = array2[i];
    }
    return arrayConcat;
}
