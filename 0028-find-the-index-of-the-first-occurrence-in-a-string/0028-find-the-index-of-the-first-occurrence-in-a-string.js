/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle==="") return 0
    let arr = haystack.split('')
    for(i=0;i<=arr.length-needle.length;i++){
        if(haystack.substring(i,i+needle.length)===needle){
             return i 
    }
  
    }
      if(haystack===needle){
        return 0
    }
        return -1
};