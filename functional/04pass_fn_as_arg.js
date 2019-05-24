function multiply(x,y) {
    return x * y;
}

function fmultiply(x, y, fn) {
    return fn(x,y)
}

// console.log(fmultiply(10,10, multiply))
console.log(fmultiply(10,10, function(x,y) { return x + y}))