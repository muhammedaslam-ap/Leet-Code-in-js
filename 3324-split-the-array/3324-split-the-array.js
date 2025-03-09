/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
    let freq = {}
   nums.forEach(curr=>{
    freq[curr]? freq[curr]++: freq[curr]=1
   })
   for(curr in freq){
   if(freq[curr]>2){
        return false
   }
   }
   return true
};