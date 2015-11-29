module.exports = {
  person: function() {
    var person = {
      firstName: 'John',
      lastName: 'Mayer'
    }
    return person
  },


  sweetnessProperty: function(object) {
    return object.sweetness
  },


  savorynessProperty: function(ob) {
      return ob["savory-ness"]
  },

  keys: function(ob) {
    var container = []
     for (each in ob) {
      container.push(each)
    }
    return container
  },

  sortedKeys: function(ob) {
    var container = []
    for (each in ob) {
      container.push(each)
    }
    return container.sort()
  },

  reverseSortedKeys: function(ob) {
    var container = []
    for (each in ob) {
      container.push(each)
    }
    return container.sort().reverse()
  },





















}
