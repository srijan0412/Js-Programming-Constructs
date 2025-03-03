function findMagicNumber() {
    let low = 1, high = 100, mid;
    alert("Think of a number between 1 and 100.");

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        let response = prompt(`Is your number ${mid}?\nEnter 'l' if it's lower, 'h' if it's higher, or 'y' if correct:`).toLowerCase();

        if (response === 'y') {
            alert(`Your magic number is ${mid}! 🎉`);
            return;
        } else if (response === 'l') {
            high = mid - 1;
        } else if (response === 'h') {
            low = mid + 1;
        } else {
            alert("Invalid input. Please enter 'l', 'h', or 'y'.");
        }
    }
}

findMagicNumber();
