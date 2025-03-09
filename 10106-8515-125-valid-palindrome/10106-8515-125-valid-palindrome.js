/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const string = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    const reversed = string.split("").reverse().join("").toLowerCase();

    return string === reversed;
};