//n!=n×(n−1)×(n−2)×…×2×1
function factorial(n) {
    // Caso base: factorial de 0 o 1 es 1
    if (n === 0 || n === 1) {
      return 1;
    }  
    // Caso recursivo n! = n * (n-1)!
    return n * factorial(n - 1);
}
      
module.exports = factorial;
