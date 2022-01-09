module.exports = function reverse(n) {
    return reverseString(n.toString().replace("-", ""));
}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}