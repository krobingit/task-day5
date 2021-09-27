
//USING IIFE AND ANNONYMOUS FNS
var array = ["litTle", "thiNgs", "aRe", "impoRtant", "in", "lIfe"];
var string = array.join(" ").trim();


var titleCaseStrings = "";

(function (string) {
    titleCaseStrings = string.toLowerCase().split(" ").map((str) => {

        return str.charAt(0).toUpperCase() + str.slice(1);
    })
})(string);
console.log(titleCaseStrings.join(" "))
//output- Little Things Are Important In Life




//USING ARROW FUNCTIONS

var array = ["litTle", "thiNgs", "aRe", "impoRtant", "in", "lIfe"];
var string = array.join(" ").trim();

var titleCaseStrings1 = (string) => {

    return string.toLowerCase().split(" ").map((str) => str.charAt(0).toUpperCase() + str.slice(1))
};

console.log(titleCaseStrings1(string).join(" "))
//output- Little Things Are Important In Life