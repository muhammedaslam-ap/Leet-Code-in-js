/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let subString = sentence.split(' ')
      for(i=0;i<subString.length;i++){
            if(subString[i].startsWith(searchWord)){
                return i+1
            }
      }

      return -1
    
};