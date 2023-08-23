// Tetrahedral formula
// (n*(n+1)*(n+2)) / 6

function tetra(n){  
    let tetrahedral = (n*(n+1)*(n+2)) / 6;
    return tetrahedral;
}

console.log(tetra(2))
console.log(tetra(3))
console.log(tetra(4))
console.log(tetra(5))
console.log(tetra(6))
console.log(tetra(7))