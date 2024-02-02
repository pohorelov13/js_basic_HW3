function getFingerName(numberOfFinger) {
    let fingerName
    switch (numberOfFinger) {
        case 1:
            fingerName = 'Thumb';
            break;
        case 2:
            fingerName = 'Index finger';
            break;
        case 3:
            fingerName = 'Middle finger';
            break;
        case 4:
            fingerName = 'Ring finger';
            break;
        case 5:
            fingerName = 'Pinky';
            break;
        default:
            fingerName = 'Unknown finger'
    }
    return fingerName;
}

const fingerNumber = parseFloat(prompt("Enter temperature in Celsius:"))

let message;

isNaN(fingerNumber) ?
    message = 'Please, enter a number...' :
    message = 'Your finger is ' + getFingerName(fingerNumber);


alert(message);

