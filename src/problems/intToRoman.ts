export function intToRoman(num: number): string {
    const map: any = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }; // make a map of all possible string combinations and their values
    let romanNumber = ''
    for(const key in map) { //  for each string possibility
        const numOfChar = Math.floor(num / map[key]) //get number of times that value is in the number (num of characters of that key)
        if (numOfChar !== 0) {  //  if that value is present
            romanNumber += key.repeat(numOfChar);   //  repeat that character as many times as needed
            num %= map[key] //  number equals the remainder after dividing the number by current value
        }
    }

    return romanNumber
}

function intToRoman2(num: number): string {
    let workingNum = num
    let romanNumber = ''

    if (workingNum >= 1000) {
        romanNumber = 'M'.repeat(Math.floor(workingNum / 1000))
        workingNum %= 1000;
    }
    if (workingNum >= 900) {
        romanNumber = `${romanNumber}CM`;
        workingNum %= 900;
    }
    if (workingNum >= 500) {
        romanNumber = `${romanNumber}D`;
        workingNum %= 500;
    }
    if (workingNum >= 400) {
        romanNumber = `${romanNumber}CD`
        workingNum %= 400;
    }
    if (workingNum >= 100) {
        romanNumber = `${romanNumber}${'C'.repeat(Math.floor(workingNum / 100))}`;
        workingNum %= 100;
    }
    if (workingNum >= 90) {
        romanNumber = `${romanNumber}XC`;
        workingNum %= 90;
    }
    if (workingNum >= 50) {
        romanNumber = `${romanNumber}L`;
        workingNum %= 50;
    }
    if (workingNum >= 40) {
        romanNumber = `${romanNumber}XL`;
        workingNum %= 40;
    }
    if (workingNum >= 10) {
        romanNumber = `${romanNumber}${'X'.repeat(Math.floor(workingNum / 10))}`;
        workingNum %= 10;
    }
    if (workingNum >= 9) {
        romanNumber = `${romanNumber}IX`;
        workingNum %= 9;
    }
    if (workingNum >= 5) {
        romanNumber = `${romanNumber}V`;
        workingNum %= 5;
    }
    if (workingNum >= 4) {
        romanNumber = `${romanNumber}IV`;
        workingNum %= 4;
    }
    romanNumber = `${romanNumber}${'I'.repeat(workingNum)}`;

    return romanNumber
}