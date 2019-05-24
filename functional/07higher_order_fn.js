function name(fn) {
    return function(info, i) {
      if (typeof i === 'number' && i != null) {
        if (typeof info === 'string' && info != null) {
          return fn(info, i)
        }
      }
    }
  }
  
  function showInfo(info, i) {
    for (var j = 0; j < i; j++) { console.log(info) }
  }
  
  function getChar(info, i) {
    return info.charAt(i)
  }
  
  function showUCAndgetSubstring(info, i) {
    console.log(info.toUpperCase())
    return info.substring(11, i)
  }
  
  var showName = name(showInfo)
  var retrieveChar = name(getChar)
  var ucAndSubstring = name(showUCAndgetSubstring)
  
  // name(showInfo)("test",2)
  // showName("SSN", 2) 
  // console.log(retrieveChar("SSN College of Engineering",4 )) 
  // console.log(ucAndSubstring("Welcome to SSN", 14)) 
  
  console.log(retrieveChar("Hello", "one"))
  