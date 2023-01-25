function binarySearch(array, value) {
    let lower = 0
    let upper = array.length -1

    while (lower <= upper) {
        const middle = lower + Math.floor((upper - lower) / 2)
        if (array[middle] === value) {
            return middle
        } else if (value < array[middle]) {
            upper = middle - 1
        } else {
            lower = middle + 1
        }
    }

    return -1
}

let values = []
for (let i=0; i < 10000; i++) {
    values.push(i)
}

console.log(binarySearch(values, 9365))