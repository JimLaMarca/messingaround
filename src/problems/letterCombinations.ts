const map: any = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
}

function letterCombinations(digits: string): string[] {
    let length = digits.length, result: string[] = []
    if (!length) return []
    const breadthFirstSearch = (index: number, string: string) => {
        if (index === length) result.push(string);
        else {
            const letters = map[digits[index]]
            for(let i=0; i < letters.length ; i++) {
                breadthFirstSearch(index+1, string + letters[i])
            }
        }
    }
    breadthFirstSearch(0, '')
    return result
}

//BFS
//  starts at index 0 with empty string, this gets the algorithm started at the first set of numbers (first digit)                  ABC
//  within these first set of numbers, for each letter in the set, do another BFS at the next index (second digit)              A    B   C
//  to this BFS inside the for, include the next index, as well as the string provided plus the string at the index given       DEF DEF DEF
//  this means it will run a BFS for each letter starting with index 0 and ending at the last letter for that digit           D   E   F
//                                                                                                                           GHI GHI GHI
//  When it enters the BFS and the index is equal to the length of digits, this means it has gone as deep as it can         G H I
//  meaning there is no subsequent digit. in this case it adds the given string to the results array.           result  ADG ADG ADI AEG AEH AEI ...

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log(letterCombinations('234'))