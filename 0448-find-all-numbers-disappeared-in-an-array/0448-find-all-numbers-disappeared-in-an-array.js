/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let values= new Set(nums)
    let disappeared = []

    for(i=1;i<=nums.length;i++){
        if(!values.has(i)){
            disappeared.push(i)
        }
    }
    return disappeared
};