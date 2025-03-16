/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    nums = num.split('')
    let sum = 0
    let sum2 = 0
   for(i=0;i<nums.length;i++){
       if(i%2===0){
             sum += +nums[i]
       }else{
            sum2 += +nums[i]
       }   
   }
   return sum2===sum
};