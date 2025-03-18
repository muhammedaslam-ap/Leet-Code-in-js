/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let left = 0;
    let currAND = 0;
    let maxLength = 0;
    
    for (right = 0; right < nums.length; right++) {
        while ((currAND & nums[right]) !== 0) {
            currAND ^= nums[left];
            left += 1;
        }
        currAND |= nums[right];
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;    
};