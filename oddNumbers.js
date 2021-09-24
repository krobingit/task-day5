var array = [11, 16, 15, 12, 25, 31, 55, 260, 13]
var store = [];
(function (array) {
    for (var index in array) {
        if (array[index] % 2 != 0)
            store.push((array[index]))

    }
})(array);       // using IIFE AND ANNONYMOUS FUNCTION
console.log(store);

//below- using arrow function

var array1 = [11, 16, 15, 12, 25, 31, 55, 260, 13]
var store1 = [];

var oddNum = (array1) => {
    for (var index in array1) {
        if (array1[index] % 2 != 0)
            store1.push((array1[index]))
    }
}
oddNum(array1);
console.log(store1)