/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0 
    let stoneses = stones.split('')
  stoneses.forEach(curr=>{
    if(jewels.includes(curr)){
        count++
    }
  })
  return count
};