var _ = require('lodash')

var stock1 = [
    {name:'item1', count: 20, unitCost: 600},
    {name:'item2', count: 2, unitCost: 85},
    {name:'item3', count: 200, unitCost: 60},
    {name:'item4', count: 15, unitCost: 25}
]

var stock1Count = _.reduce(stock1, function(ret_val, item) {
    return ret_val + item.count
},0)

var stock1Cost = _.reduce(stock1, function(ret_val, item) {
    return ret_val + item.unitCost
},0)

console.log('No of Stock1 items: ' + stock1Count)
console.log('Stock1 cost: ' + stock1Cost)