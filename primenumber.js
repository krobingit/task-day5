

// using IIFE AND ANNONYMOUS FUNCTION
var array = [11, 23, 19, 12, 25, 31, 55, 21, 13, 29, 1, 0, 37, 59, 17];

(function (array) {
    console.log(array.filter((number) => {
        if (number <= 1)
            return false
        for (var i = 2; i < number; i++) {
            if (number % i == 0)
                return false
        }
        return true
    }))
})(array);


//output- [11, 23, 19, 31, 13, 29, 37, 59, 17]





//below- using arrow function 

var array1 = [11, 23, 19, 12, 25, 31, 55, 21, 13, 29, 1, 0, 37, 59, 17];
var prime = (array1) => {

    var store = array1.filter((number) => {
        if (number <= 1)
            return false
        for (var i = 2; i < number; i++) {
            if (number % i == 0)
                return false
        }
        return true
    })
    console.log(store)

}
prime(array1);

//output- [11, 23, 19, 31, 13, 29, 37, 59, 17]