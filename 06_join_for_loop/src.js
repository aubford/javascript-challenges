/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    return list.join("")
  },

  joinWithForAndIndex: function(array) {
    string = []
    for (var i = 0; i < array.length; i++) {
        string.push(array[i])
        string.push(i)
    }
    return string.join("")
  },

  joinWithoutOddCharacters: function (array) {
    string=[]
    for (var i = 0; i < array.length; i+=2) {
      string.push(array[i])
    }
    return string.join("")
  },

  joinWithForAndToken: function(array, t) {
    return array.join(t)
  },

  joinWithForAndAlternatingTokens: function (array, t, j) {
    container=[]
    for (var i = 0; i < array.length; i++) {
        container.push(array[i])

        if (i === array.length-1){
        } else if (array[i] % 2 === 0) {
          container.push('+')
        } else {
          container.push('*')
        }
    }
    return container.join('')
  }





















}
