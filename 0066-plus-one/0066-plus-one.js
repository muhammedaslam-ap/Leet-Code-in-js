/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let arr = []
    let ele =""
    digits.forEach((v)=>{
        ele+=v.toString()
    })

    let total = BigInt(ele)+ 1n
    let number = ele + 1
    for(let char of total.toString().split('') ){
        arr.push(+char)
    }
    
    
  return arr
};