var averageValue = function(nums) {
     let count = 0
    let first = 0
    for(i=0;i<nums.length;i++){
            if(nums[i]%3==0){
                if(nums[i]%2==0){
                    count++
                    first += nums[i]
                }
         }
    }

    if(count == 0){
        return 0
    }else{
        return Math.floor(+first/+count)
    }
};
