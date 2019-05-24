function fifelse(state, fn1, fn2) {
    if (state) {
        fn1()

    }else {
        fn2()
    }

}

const i=100

fifelse(i===10, function() {
    console.log("i have an i10..")
},function() {
    console.log("i do not have an i10..")
})