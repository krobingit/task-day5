var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];


(function (ar1, ar2) {
    var merge = [...ar1, ...ar2]
    var merge2 = merge.sort((x, y) => x - y)
    var sum = 0;
    for (var i = (merge2.length / 2 - 1); i < (merge2.length / 2 + 1); i++) {
        if ((i == merge2.length / 2 - 1) && (i + 1 == merge2.length / 2))
            sum = (merge2[i] + merge2[i + 1]) / 2;
    }
    console.log(sum)
})(ar1, ar2)