function isPrime(n) {
    if (n === 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n === 3) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if ((n % i) === 0) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports = isPrime