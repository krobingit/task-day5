var array = [1, 2, 3, 4, 5]
var k = 3;
(function (array) {
    var store = [];
    for (var i = 0; i < array.length; i++) {

        if (i < k)
            store.push(array[array.length - k + i])
        else
            store.push(array[i - k])
    }
    console.log(store)
})(array)

// it is rotated 3 times-output- [3,4,5,1,2]