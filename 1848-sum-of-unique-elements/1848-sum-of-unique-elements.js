/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
   let freq = {}
    let arr = []
    nums.forEach(curr=>{
        if(freq[curr]){
            freq[curr]++
        }else{
            freq[curr]=1
        }
    })

    for(curr in freq){
        if(freq[curr]===1){
            arr.push(+curr)
        }
    }
    if(arr.length===0){
        return 0
    }
    let sum = arr.reduce((acc,curr)=>{
       return acc+=curr
    },0)
    return sum
};