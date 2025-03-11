/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0
  for(i=0;i<sentences.length;i++){
    let lengt = sentences[i].split(' ').length
    if(lengt>max){
        max = lengt
    }
  }
 return max
};