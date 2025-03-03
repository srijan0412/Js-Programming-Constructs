function factorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers.";
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

const num = parseInt(prompt("Enter a number:"));
alert(`${num}! = ${factorial(num)}`);
