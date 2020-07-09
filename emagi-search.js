const words = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');

const emagiSearch = function(str){


  let result = []

    for(let i = 0; i < words.length; i++){

    if(word === str){
      const emojiIndex = i
      result = str + symbols[emojiIndex]
    }
  }

  return result
}



