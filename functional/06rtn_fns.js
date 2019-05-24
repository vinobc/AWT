//return anonymous fn.
//-------------------

// function frtn() {
//     return function() {
//         console.log("hello")
//     }
// }

// // x = frtn()
// // x()

// frtn()()

//return named fn.
//-------------------

// function frtn() {
//     function x() {
//         console.log("x")
//     }
//     return x
// }

// frtn()()

//return multiple fns.
//-------------------

// function frtn() {
//     return {
//         f1: function() {
//             console.log("f1")
//         },
//         f2: function() {
//             console.log("f2")
//         }
//     }

// }

// frtn().f2();

//closure
//-------

// function frtn() {
//     i = 10  
//     return function() {
//         console.log(i)
//     }                
    
// }

// x = frtn() 
// // x()
// x().i

// const attendance = {
//     attn: 0,
//     incrAttn: function() {
//         this.attn += 1
//     },
//     getAttn: function() {
//         return this.attn
//     }

// }

// function fattendance() {
//     var attn = 0
//     return {
//         incrAttn: function() {
//             attn += 1
//         },
//         getAttn: function() {
//             return attn
//         }
//     }
// }

// attendance = fattendance()

// console.log(attendance.getAttn())
// attendance.incrAttn()
// console.log(attendance.getAttn())

// attendance.attn = 200

// console.log(attendance.getAttn())






