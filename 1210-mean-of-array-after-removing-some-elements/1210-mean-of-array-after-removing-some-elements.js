/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  let sort = arr.sort((a,b)=>a-b)
    let trim = Math.floor(arr.length*0.05)
    let newArr = []
    newArr=(arr.slice(trim,arr.length-trim))
    
    let sum = newArr.reduce((acc,curr)=>{
         acc+=curr
         return acc
    },0)
    return sum/newArr.length
};