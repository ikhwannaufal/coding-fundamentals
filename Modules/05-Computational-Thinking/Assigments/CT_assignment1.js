function possibleBonus(a, b) {
    let x = a;
    let y= b;

    // Position of piece must be integer
    if (x < 0 && y < 0) return false;

    // Dice can only move between 1-6 steps
    if (y - x <= 6 && y - x > 0) {
        return true;
    }
    // Movement cannot exceed 6 steps, hence false
    else if (y - x > 6) {
        return false;
    }
    // No backwards movement allowed
    else if (y - x < 0) {
        return false;
    }
    else return false;
}

console.log(possibleBonus(3, 7))
console.log(possibleBonus(1, 7))
console.log(possibleBonus(1, 9)) 
console.log(possibleBonus(5, 3))
console.log(possibleBonus(0, -1))