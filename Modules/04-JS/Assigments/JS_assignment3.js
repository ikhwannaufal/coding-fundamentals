function factorial(n) {
    let result = 1
    for(let i = n ; i>0 ; i--){
         result = result * i;
    }
    return result
}

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(1))