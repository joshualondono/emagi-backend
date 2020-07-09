const randomElement = function(element){
  const rand = Math.floor(Math.random() * Math.floor(element.length));
  return element[rand]
}

module.exports = randomElement
