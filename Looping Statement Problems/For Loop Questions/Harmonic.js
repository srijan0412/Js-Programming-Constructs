const n = parseInt(process.argv[2]); // Taking command-line argument

if (isNaN(n) || n <= 0) {
    console.log("Please provide a valid positive integer.");
} else {
    let harmonic = 0;
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }
    console.log(`The ${n}th harmonic number is: ${harmonic}`);
}
