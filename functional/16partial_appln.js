function mul(a, b, c) {
    return a * b * c
  }
  
  function parMul(func, a) {
    return function(b, c) {
      return func(a, b, c)
    }
  }

  function parMul2(func, a, b) {
    return function(c) {
      return func(a, b, c)
    }
  }
  
  var mul10 = parMul(mul, 10)
var mul10With2 = parMul2(mul, 10, 2)
  
  console.log(mul10(2, 2))
  console.log(mul10With2(2))

  console.log(mul(10, 2, 2))