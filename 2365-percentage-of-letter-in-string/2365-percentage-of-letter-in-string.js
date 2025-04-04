/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count=0
    let arr=s.split('')
    for(let i=0;i<arr.length;i++){
        if(arr[i]===letter){
            count++
        }
    }
    return Math.floor((count/arr.length)*100)
};