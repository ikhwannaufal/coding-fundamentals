function perimeter(letter,num) {
    
    return letter === 's' ? 4 * num : letter === 'c' ? 6.28 * num : 0
}

console.log(perimeter('s', 7))
console.log(perimeter('s', 5.5))
console.log(perimeter('c', 4))
console.log(perimeter('c', 9))

