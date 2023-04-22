// The iterator pattern allows element traversal in collections. In JavaScript, create custom iterators using Symbol.iterator. Below is a custom range function for use in a for loop.

function range(start: number, end: number, step = 1) {
  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      if (start < end) {
        start = start + step
        return {value: start, done: false}
      }
      return {done: true, value: end}
    },
  }
}

for (const i of range(0, 100, 5)) {
  console.log(i)
}
