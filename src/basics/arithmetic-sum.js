
// Sum of N Numbers

function arithmeticSum(n) {
    if(!n) {
        throw new Error("Please provide a number");
    }
    if(isNaN(n)) {
        throw new Error("Please provide a valide number");
    }
    return (n*(n+1))/2;
}

module.exports = arithmeticSum;



