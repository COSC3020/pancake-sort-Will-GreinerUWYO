function flip(array, n) {
    var temp  = 0;
    // goes until half of n, allowing for even and odd lists to both be fully reversed.
    for (let i = 0; i < Math.floor(n / 2); i++) {
        // swaps two values using temp as an intermediary.
        temp = array[i];
        array[i] = array[n-1-i];
        array[n-1-i] = temp;
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    var n = array.length;
    // for every value of the function, finds the max value of the sublist, flips it to the top of the list, then the bottom. Makes the whole thing flip flop.
    while (n > 1) {
        let maxValue = array[0];
        let maxIndex = 0;
        for (let i = 0; i < n; i++) {
            if (array[i] > maxValue) {
                maxValue = array[i];
                maxIndex = i;
            }
        }
        flip(array, maxIndex + 1 );
        flip(array, n);
        n = n - 1;
    }
    
    return array;
}
