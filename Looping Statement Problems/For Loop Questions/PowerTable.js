const n = parseInt(process.argv[2]); // Taking command-line argument

if (isNaN(n) || n < 0) {
    console.log("Please provide a valid non-negative integer.");
} else {
    console.log(`Powers of 2 up to 2^${n}:`);
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${2 ** i}`);
    }
}
