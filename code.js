function flip(array, n) {
    var temp  = 0;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        temp = array[i];
        array[i] = array[n-1-i];
        array[n-1] = temp;
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    var n = array.length;
    while (n > 1) {
        let maxValue = 0;
        let maxIndex = 0;
        for (let i = 0; i < n; i++){
            if (array[i] > maxValue) {
                maxValue = array[i];
                maxIndex = i;
            }
        }
        flip(array,maxIndex);
        flip(array,n);
        n = n - 1;
    }
    
    return array;
}
