/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0
    let arr
    for(i=0;i<nums.length;i++){
        arr = nums[i].toString()
        if(arr.length%2==0){
            count++
        }
        arr = null
    }
    return count
};