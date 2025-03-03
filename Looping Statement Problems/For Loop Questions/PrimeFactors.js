function primeFactors(N) {
    let factors = [];

    // Remove factors of 2
    while (N % 2 === 0) {
        factors.push(2);
        N /= 2;
    }

    // Check odd factors from 3 to sqrt(N)
    for (let i = 3; i * i <= N; i += 2) {
        while (N % i === 0) {
            factors.push(i);
            N /= i;
        }
    }

    // If N is still a prime number greater than 2
    if (N > 2) {
        factors.push(N);
    }

    return factors;
}

const num = parseInt(prompt("Enter a number:"));
alert(`Prime factors of ${num}: ${primeFactors(num).join(", ")}`);
