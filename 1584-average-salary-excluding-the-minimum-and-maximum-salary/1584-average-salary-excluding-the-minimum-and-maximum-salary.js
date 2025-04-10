/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let min = Math.min(...salary)
    let max = Math.max(...salary)
    let arr = []
    for (i = 0; i < salary.length; i++) {
        if (salary[i] !== min) {
            if (salary[i] !== max) {
                arr.push(salary[i])
            }
        }
    }

    let sum = arr.reduce((acc, curr) => {
        return acc += curr
    }, 0)
    return sum / arr.length
};