var array = [1, 11, 15, 11, 1, 2, 6, 9, 8, 15, 15, 6];

var store = {};
(function (array) {
    for (var key in array) {
        if (store[array[key]])
            store[array[key]] = store[array[key]] + 1;
        else
            store[array[key]] = 1;
    }
    console.log((Object.keys(store)).map(Number));
})(array)
