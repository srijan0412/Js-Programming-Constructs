function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

const start = parseInt(prompt("Enter the start of the range:"));
const end = parseInt(prompt("Enter the end of the range:"));

if (isNaN(start) || isNaN(end) || start < 0 || end < 0 || start > end) {
    alert("Please enter a valid range.");
} else {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) primes.push(i);
    }
    alert(`Prime numbers between ${start} and ${end}: ${primes.join(", ")}`);
}
