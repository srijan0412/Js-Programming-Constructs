let month = parseInt(process.argv[2],10);
let day = parseInt(process.argv[3],10);

if (month==3) {
    if (day >= 20) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
else if (month == 6) {
    if (day <= 20) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
else if (month > 3 && month < 6) {
    console.log(true);
}
else {
    console.log(false);
}