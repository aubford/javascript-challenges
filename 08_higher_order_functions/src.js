module.exports = {

  simpleCall: function(callback){
      return callback()
  },

  each: function(items, func) {
    items.forEach(func)
  },


  map: function(itm, func) {
    return itm.map(func)
  },

  reduce: function(itm, n, func) {
    return itm.reduce(func, n)
  },

  find: function(array, func) {

    return array.find(func)

  },

  any: function(array, func) {
    return array.some(func)
  },

  all: function(array, func) {
    return array.every(func)
  }




















}
