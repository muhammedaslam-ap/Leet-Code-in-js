/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {   
   let freq = {}

   for(i of nums){
    if(freq[i]){
        freq[i]++
    }else{
        freq[i] = 1
    }
   }
   for(let i in freq){
    if(freq[i]>1){
        return true
    }
   }
   return false
};