function fif(state, fn) {
    if (state) {
        fn()
    }
}


const i = 'SSN'

fif(i === 10, function() {
    console.log('i have an i10 car..')
})
fif(i === 'SSN', function() {
    console.log('i work @ SSN..')
})



// function i10() {
//     console.log('i have an i10 car..')
// }

// function ssn() {
//     console.log('i work @ SSN..')
// }