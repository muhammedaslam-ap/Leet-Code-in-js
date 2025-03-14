/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
     let avg = 0
    let count = 0
    let max =Math.max(...salary)
    let min =Math.min(...salary)
    for(i of salary){
       if(i!=min || i!=max){
        avg+=i
        count++
       }
    }

    return avg/count
};