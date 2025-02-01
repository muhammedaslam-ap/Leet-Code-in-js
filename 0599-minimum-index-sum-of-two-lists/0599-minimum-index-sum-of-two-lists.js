/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let arr = []
    let sum = 0
    let freq = {}
    for(let item of list1){
       if(list2.includes(item)){
        freq[item] = list2.indexOf(item) + list1.indexOf(item)
       }
    }
   
   let min = Math.min(...Object.values(freq))

    for(key in freq){
        if(freq[key]===min){
            arr.push(key)
        }
    }
    return arr
};