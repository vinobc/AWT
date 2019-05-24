function countDown(k) {
    console.log(k)
    if (k > 0) {
      countDown(k - 1)
    }
  }
  countDown(10)
  