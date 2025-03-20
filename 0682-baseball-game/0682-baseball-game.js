/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = []
    for(i=0;i<operations.length;i++){
        if(operations[i]==="C"){
             arr.pop()
        }else if(operations[i]==="D"){
             arr.push(arr[arr.length-1]*2)
        }else if(operations[i]==="+"){
             arr.push(arr[arr.length-1] + arr[arr.length-2])  
        }else{
             arr.push(+operations[i])
        }
    }

    let sum = arr.reduce((acc,curr)=>{
        return acc+=curr
    },0)
    return sum
};