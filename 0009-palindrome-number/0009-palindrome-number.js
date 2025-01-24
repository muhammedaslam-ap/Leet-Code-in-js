/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let res=x.toString().split('').reverse().join('');
    
    if(res==x){
        return true;
    }else {
        return false;
    }
};