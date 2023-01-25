export function threeSum(array: number[]): number[][] {
    array.sort((a,b) => a-b) // sort by number
    const triplets = []

    for(let i=0; i < array.length -2; i ++) { //    while -2 because the algorithm will grab the last num
        if(array[i] !== array[i-1]) {   //  making sure our first number isn't the same as the previous one
            let leftIndex = i + 1 // grabbing the index of the first number to add
            let rightIndex = array.length - 1 //    grabbing the index of the second number to add

            while (leftIndex < rightIndex) {    // to avoid comparing all the same numbers in the second half of the algorithm
                                                // stop when the left and right indexes have crossed
                const sum = array[i] + array[leftIndex] + array[rightIndex] //get sum
                if (sum === 0) {
                    triplets.push([array[i], array[leftIndex], array[rightIndex]])
                    while (array[leftIndex] === array[leftIndex + 1]) leftIndex ++  //  if the next number in order is the same, go to it
                    while (array[rightIndex] === array[rightIndex - 1]) rightIndex --   // same
                    leftIndex ++    //go to next index
                    rightIndex --
                } else if (sum > 0) rightIndex --
                else leftIndex ++   //  if not equal or greater than it must be less
            }
        }
    }
    return triplets
}

export function threeSumClosest(array: number[], target: number): number {
    array.sort((a,b) => a-b) // sort by number
    let bestDiff = 999999;
    let bestSum = 0;

    for(let i=0; i < array.length -2; i ++) { //    while -2 because the algorithm will grab the last num
        if(array[i] !== array[i-1]) {   //  making sure our first number isn't the same as the previous one
            let leftIndex = i + 1 // grabbing the index of the first number to add
            let rightIndex = array.length - 1 //    grabbing the index of the second number to add

            while (leftIndex < rightIndex && bestDiff !==0) {    // to avoid comparing all the same numbers in the second half of the algorithm
                                                                //  also if the best result has been achieved no need to keep processing
                // stop when the left and right indexes have crossed
                const sum = array[i] + array[leftIndex] + array[rightIndex] //get sum
                const sumDiff = Math.abs(target - sum)  //  get delta of sum and target

                if (sumDiff === 0) {    //  if there is non difference than this is the best solution so set values
                    bestDiff = sumDiff
                    bestSum = sum
                } if( sumDiff < bestDiff ) { // if the current delta is better than the best delta
                    bestDiff = sumDiff  //  make the best delta the current delta
                    bestSum = sum   //set the best sum value
                }
                if (sum > target) rightIndex --
                else leftIndex ++   //  if not equal or greater than it must be less
            }
        }
    }
    return bestSum
}