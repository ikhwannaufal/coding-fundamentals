function sum(numbersArray){
    let total = 0;
    for (i = 0; i < numbersArray.length; i++) {
        total += numbersArray[i];
    }
    return total;
 }
 
 // Test cases
 console.log(sum([1, 2, 3, 4]))
 console.log(sum([-3, 5, 19, -6])) 