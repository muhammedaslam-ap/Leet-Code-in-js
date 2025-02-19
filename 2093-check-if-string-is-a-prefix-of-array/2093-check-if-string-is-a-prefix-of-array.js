/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let str =""
    for(letter of words){
        str+=letter
        if(s==str){
            return true
        }
    }
    return false
};