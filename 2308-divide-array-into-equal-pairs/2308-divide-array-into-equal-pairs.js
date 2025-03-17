/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    freq ={}
    for(i of nums){
        if(freq[i]){
            freq[i]++
        }else{
            freq[i]=1
        }
    }
    let value = Object.values(freq)
    let isNOtEven=0
    for( curr of value){
        if(curr%2==1){
            isNOtEven=1
        }
    }


    if(isNOtEven==0){
        return true
    }else{
        return false
    }
};