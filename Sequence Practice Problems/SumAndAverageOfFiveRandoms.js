// Generating 5 Random integers 
let random1 = Math.floor(Math.random()*100);
let random2 = Math.floor(Math.random()*100);
let random3 = Math.floor(Math.random()*100);
let random4 = Math.floor(Math.random()*100);
let random5 = Math.floor(Math.random()*100);

// Calculating sum and average
let sum = random1 + random2 + random3 + random4 + random5;
let average = sum / 5;

// Displaying output 
console.log("The sum is ", sum);
console.log("The Average is ", average);