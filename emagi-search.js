let words = ['hungry', 'rice', 'cheese'];
let symbols = ['eat', 'sushi', 'eggs'];

const emagiSearch = function(str){


  let result = []

    for(let i = 0; i < words.length; i++){

    if(words[i] === str){
      const emojiIndex = i
      result.push(symbols[emojiIndex])
    }
  }

  return result
}

emagiSearch('hungry')

