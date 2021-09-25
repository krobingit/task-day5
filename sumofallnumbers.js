// using IIFE AND ANNONYMOUS FUNCTION
var array = [11, 16, 15, 12, 25, 31, 55, 260, 13]
var sum = 0;
(function (array) {
    for (var index in array) {
        sum = sum + array[index];

    }
    console.log(sum);
})(array);

//output-438

//below- using arrow function

var array1 = [11, 16, 15, 12, 25, 31, 55, 260, 13]
var sum = 0;

var Sum = (array1) => {
    for (var index in array1) {
        sum = sum + array[index];
    }
    console.log(sum)
}
Sum(array1);

//output-438