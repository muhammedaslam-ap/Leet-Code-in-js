/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
   let d1 = new Date(date1)
   let d2 = new Date(date2)
   let diff = Math.abs(d1-d2)
   return diff/(1000*60*60*24)
};