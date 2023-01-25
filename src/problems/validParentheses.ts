function isValid(s: string): boolean {
    const stack:string[] = [];

    for (let i=0; i < s.length; i++) {
        const stackChar = stack[stack.length-1]
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        } else if (
            (stackChar === '(' && s[i] === ')') ||
            (stackChar === '{' && s[i] === '}') ||
            (stackChar === '[' && s[i] === ']')
        ) {
            stack.pop()
        } else {
            return false
        }
    }
    return !stack.length
}


console.log('TRUE', isValid('()[]{}'))
console.log('TRUE', isValid('([{}]}'))
console.log('TRUE', isValid('([{}]()[][])'))
console.log('TRUE', isValid('()'))
console.log('FALSE', isValid('()[}]{}'))
console.log('FALSE', isValid('({)}'))






























// export function isValid(s: string): boolean {
//     const stack = [];
//
//     for(let i=0; i < s.length; i++) {
//         const char = stack[stack.length - 1]
//
//         if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
//             stack.push(s[i])
//         } else if (
//             (char === '(' && s[i] === ')') ||
//             (char === '[' && s[i] === ']') ||
//             (char === '{' && s[i] === '}')) {
//             stack.pop()
//         } else return false
//     }
//     return !stack.length
// };