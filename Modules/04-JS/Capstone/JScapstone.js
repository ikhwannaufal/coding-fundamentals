// Set variable for i,j and decimal
// Max limit for Unicode lowercase alphabet is 122 
// Compare if value of string at i and j are equal
// If not equal, return value of string[i]

function missingLetter(str) {
    var i, j = 0, decimal = 122;
    
        i = str.charCodeAt(0);
        while (i <= decimal && j < str.length) {
            if (String.fromCharCode(i) !== str.charAt(j)) {
                return String.fromCharCode(i);
            }
            i++; j++;
        }
    
    return undefined;
}

console.log(missingLetter('abce'));
console.log(missingLetter('abcdefghjklmno'));
console.log(missingLetter('stvwx'));
console.log(missingLetter('bcdf'));
console.log(missingLetter('abcdefghijklmnopqrstuvwxyz'));
