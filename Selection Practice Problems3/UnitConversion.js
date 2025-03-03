function unitConversion() {
    let choice = parseInt(prompt("Choose conversion:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet"));
    let value = parseFloat(prompt("Enter the value to convert:"));
    let result;

    switch (choice) {
        case 1:
            result = value * 12; // 1 Foot = 12 Inches
            alert(`${value} Feet = ${result} Inches`);
            break;
        case 2:
            result = value * 0.3048; // 1 Foot = 0.3048 Meters
            alert(`${value} Feet = ${result} Meters`);
            break;
        case 3:
            result = value / 12; // 1 Inch = 1/12 Feet
            alert(`${value} Inches = ${result} Feet`);
            break;
        case 4:
            result = value / 0.3048; // 1 Meter = 3.28084 Feet
            alert(`${value} Meters = ${result} Feet`);
            break;
        default:
            alert("Invalid choice!");
    }
}

unitConversion();
