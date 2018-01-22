// Select the inputs
const celiciousInput = document.querySelector('#celicious > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kalvinInput = document.querySelector('#kalvin > input');

// Took only two digit in the floating point
function twoDigits(num) {
    return Math.round(num * 100) / 100;
}

// Convert from celicious to fahrenheit and kalvin
function celiciousToFahrenheitAndKalvin() {
    // Parse to float the celicious value
    const cTemp = parseFloat(celiciousInput.value);
    // if (!isNaN(cTemp)) {

    // }

    // Celicious to fahrenheit formula (c° * 9 / 5) + 32
    const fTemp = (cTemp * 9 / 5) + 32;

    // Celicious to kalvin formula c° + 273.15
    const kTemp = cTemp + 273.15;

    // Putting the values in the correct place
    fahrenheitInput.value = twoDigits(fTemp);
    kalvinInput.value = twoDigits(kTemp);
}

// Convert from fahrenheit to celicious and kalvin
function fahrenheitToceliciousAndKalvin() {
    // Parse to float the fahrenheit value
    const fTemp = parseFloat(fahrenheitInput.value);

    // Fahrenhiet to celicious formula (f° - 32) * 5 /9
    const cTemp = (fTemp - 32) * 5 / 9;

    // Fahrenhiet to kalvin formula 5/9 * (f° - 32) + 273
    const kTemp = 5 / 9 * (fTemp - 32) + 273;

    // Putting the values in the correct place
    celiciousInput.value = twoDigits(cTemp);
    kalvinInput.value = twoDigits(kTemp);

}

function kalvinToCeliciousAndFahrenheit() {
    // Parse to float the kalvin value    
    const kTemp = parseFloat(kalvinInput.value);

    // Kalvin to celicious formula k° - 273
    const cTemp = kTemp - 273;

    // Kalvin to fahrenheit formula 9/5 * (k° - 273) + 32
    const fTemp = 9 / 5 * (kTemp - 273) + 32;

    // Putting the values in the correct place
    celiciousInput.value = twoDigits(cTemp);
    fahrenheitInput.value = twoDigits(fTemp);
}

// Listning the input
celiciousInput.addEventListener('input', celiciousToFahrenheitAndKalvin);
fahrenheitInput.addEventListener('input', fahrenheitToceliciousAndKalvin);
kalvinInput.addEventListener('input', kalvinToCeliciousAndFahrenheit);