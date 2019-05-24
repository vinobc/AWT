var _ = require('lodash')

var n = [11,20,30,40]

var all_odd = _.every(n, function(item) {
    return (!(item % 2 === 0)) 
})

var some_odd = _.some(n, function(item) {
    return (!(item % 2 ===0))
})
 
console.log('n has all odds ? ' + all_odd)
console.log('n has some odds? ' + some_odd)

