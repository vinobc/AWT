var testFile = require('fs')

// var testFileInfo

testFile.readFile('test.txt', 'utf8', function(error, res) {
  if (error)  {
      throw error 
    } else {
        // testFileInfo = res
        // console.log(testFileInfo)
        console.log(res)
      }
})
