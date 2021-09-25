

// using IIFE AND ANNONYMOUS FUNCTION
var array = [101, 121, 151, 100, 52, 102, 91519, 235, 232, 959];

(function (array) {

    var div = 0;

    var store = array.filter((number) => {
        var temp = number;
        var sum = 0;
        while (temp != 0) {

            div = temp % 10;
            sum = sum * 10 + div;
            temp = parseInt(temp / 10);

        }
        if (sum == number)
            return true;

    })
    console.log(store);
})(array);




//output- [101, 121, 151, 91519, 232, 959]





//below- using arrow function 

var array1 = [101, 121, 151, 100, 52, 102, 91519, 235, 232, 959];

var palindrome = (array1) => {

    var div = 0;

    var store = array1.filter((number) => {
        var temp = number;
        var sum = 0;
        while (temp != 0) {

            div = temp % 10;
            sum = sum * 10 + div;
            temp = parseInt(temp / 10);

        }
        if (sum == number)
            return true;

    })
    console.log(store);
}
palindrome(array1);


//output- [101, 121, 151, 91519, 232, 959]