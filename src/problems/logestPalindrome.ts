export function longestPalindrome(string: string): string {
    let longestPal = ''
    if (string.length === 1 )
    {
        return string
    }
    for(let currentIndex = 1; currentIndex < string.length; currentIndex++) {
        const evenPal = expandFromCenter(string, currentIndex - 1, currentIndex);
        const oddPal = expandFromCenter(string, currentIndex, currentIndex);
        const pal = evenPal.length > oddPal.length ? evenPal : oddPal
        longestPal = pal > longestPal ? pal : longestPal
    }

    return longestPal
}

const expandFromCenter = (string: string, left: number, right: number): string => {
    if (string[left] !== string[right]) {
        return string[right]
    }
    let movement = 0;

    while (!!string[left - movement] && !!string[right + movement] && string[left - movement] === string[right + movement]) {
        movement ++
    }
    movement --
    return string.substring(left - movement, right + movement + 1)
}