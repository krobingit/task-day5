
//USING IIFE AND ANNONYMOUS FNS
var string = "litTle thiNgs aRe impoRtant in lIfe";

var titleCaseStrings = "";

(function (string) {
    titleCaseStrings = string.toLowerCase().split(" ").map((str) => {

        return str.charAt(0).toUpperCase() + str.slice(1);
    })
})(string);
console.log(titleCaseStrings.join(" "))
//output- Little Things Are Important In Life




//USING ARROW FUNCTIONS

var string1 = "litTle thiNgs aRe impoRtant in lIfe";

var titleCaseStrings1 = (string1) => {

    return string1.toLowerCase().split(" ").map((str) => str.charAt(0).toUpperCase() + str.slice(1))
};

console.log(titleCaseStrings1(string1).join(" "))
//output- Little Things Are Important In Life