function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(num => {
    if (isPrime(num)) {
        console.log(`${num} é primo.`);
    } else {
        console.log(`${num} não é primo.`);
    }
});
