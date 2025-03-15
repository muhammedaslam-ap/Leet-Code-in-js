/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
       let sorted = nums.sort((a,b)=>a-b)
        let arr = new Set()
        while(sorted.length>0){
            let min = sorted.shift()
            let max = sorted.pop()
            let avg = (min+max)/2
            arr.add(avg)
        }

        return arr.size
};