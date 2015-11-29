module.exports = {

  first: function(array) {
      return array[0]
  },

  last: function(array) {
    return array[array.length-1]
  },

  empty: function(array) {
    if (array.length === 0){
      return true
    } else {
      return false
    }
  },

  first_n: function(array,n) {
        if (array.length > n) {
        array.splice(n, array.length - n)
        }
        return array
  },

  last_n: function(array,n) {
        if (array.length > n) {
        array.splice(0, n-1)
        }
        return array
  },


    drop: function(array,n) {
          var contain = []
          for (var i = array.length - 1; i >= n; i--) {
            contain.push(array[i])
          }
          return contain.reverse()
    },

    union: function(array1, array2) {

        for (var i = 0; i < array2.length; i++) {
          array1.push(array2[i])
        }
          return array1

    },

    intersection: function(array1, array2) {
      var container =[]
      for (var i = 0; i < array1.length; i++) {
        for (var a = 0; a < array2.length; a++) {
          if (array2[a] === array1[i]) {
            container.push(array1[i])
          }
        }
      }
      return container
    },













}
