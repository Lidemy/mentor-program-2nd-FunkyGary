function isPrime(n) {
    if (n === 1) {
        return false;
    }
    for (let i = 2; i <= n / 2; i++) {
        if ((n % i) === 0) {
            break;
        } else {
            return true;
        }
    }
}

module.exports = isPrime