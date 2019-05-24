var i = 100

console.log("i is initiallly " + i)

setTimeout( function() {
  i = 200
  console.log("i is now updated to " + i)
  setTimeout( function() {
    i = 18
    console.log("i has been modified again. It is now " + i)
    setTimeout( function() {
      i = 86045
      console.log("i again has been changed. It is now " + i)
    }, 2000)
  }, 2000)
}, 2000)

console.log("i: " + i)