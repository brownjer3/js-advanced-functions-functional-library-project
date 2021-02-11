const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let col = (Array.isArray(collection)) ? [...collection] : Object.values(collection)

      for (let i = 0; i < col.length; i++){
        callback(col[i])
      }
        return collection
    },

    map: function(collection, callback) {
      let col = (Array.isArray(collection)) ? [...collection] : Object.values(collection)
      let mapped = []

      for (let i = 0; i < col.length; i++){
        mapped.push(callback(col[i]))
      }
      return mapped
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}
      
      for (let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      let col = (Array.isArray(collection)) ? [...collection] : Object.values(collection)
      for (let i = 0; i < col.length; i++){
        if (predicate(col[i])) {
          return col[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let col = (Array.isArray(collection)) ? [...collection] : Object.values(collection)
      let filtered = []

      for (let i = 0; i < col.length; i++){
        if (predicate(col[i])) {
          filtered.push(col[i])
        }
      }
      return filtered
    }, 

    size: function(collection) {
      let col = (Array.isArray(collection)) ? [...collection] : Object.values(collection)
      return col.length
    }, 

    first: function(collection, n) {
      return (n === undefined) ? collection[0] : collection.slice(0,n)
    }, 

    last: function(collection, n) {
      return (n === undefined) ? collection[collection.length - 1] : collection.slice(collection.length - n, collection.length)
    }, 

    compact: function(collection) {
      let trueVals = []
      for (let i = 0; i < collection.length; i++){
        if (!!collection[i]) {
          trueVals.push(collection[i])
        }
      }
      return trueVals
    }, 

    sortBy: function(collection, callback) {
      let copy = [...collection]
      return copy.sort((a,b) => {
        return callback(a) - callback(b)
      })
    }, 

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection) {
      let sorted = []
      for (let i = 0; i < collection.length; i++) {
        if (sorted[i] !== collection[i+1])
          sorted.push(collection[i])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, callback=false) {
      if (sorted) {
        return fi.uniqSorted(collection, callback)
      } else if (!callback) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = callback(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      return Object.keys(obj)
    }, 

    values: function(obj) {
      return Object.values(obj)
    }, 

    functions: function(obj) {
      let col = Object.values(obj)
      let fns = []
      for (let i =0; i< col.length; i++){
        if (typeof col[i] === 'function') {
          fns.push(col[i])
        }
      }
      return fns
    }

  }

})()

fi.libraryMethod()
