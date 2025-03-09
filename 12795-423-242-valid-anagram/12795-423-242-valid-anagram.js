/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const strArr = s.split("");
    let anArr = t.split("");
    return strArr.length === anArr.length && Array.from(new Set(strArr)).every((char)=> strArr.filter((c)=> c === char).length === anArr.filter((c)=> c === char).length)
};