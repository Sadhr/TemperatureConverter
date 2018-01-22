const celiciousInput = document.querySelector('#celicious > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kalvinInput = document.querySelector('#kalvin > input');

function twoDigits(num) {
    return Math.round(num * 100) / 100;
}

function celiciousToFahrenheitAndKalvin() {
    const cTemp = parseFloat(celiciousInput.value);
    // if (!isNaN(cTemp)) {

    // }
    const fTemp = (cTemp * 9 / 5) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = twoDigits(fTemp);
    kalvinInput.value = twoDigits(kTemp);
}

function fahrenheitToceliciousAndKalvin() {
    const fTemp = parseFloat(fahrenheitInput.value);
    if (!isNaN(fTemp)) {
        const cTemp = (fTemp - 32) * 5 / 9;
        const kTemp = 5 / 9 * (fTemp - 32) + 273;
        celiciousInput.value = twoDigits(cTemp);
        kalvinInput.value = twoDigits(kTemp);
    }
}

function kalvinToCeliciousAndFahrenheit() {
    const kTemp = parseFloat(kalvinInput.value);
    const cTemp = kTemp - 273;
    const fTemp = 9 / 5 * (kTemp - 273) + 32;
    celiciousInput.value = twoDigits(cTemp);
    fahrenheitInput.value = twoDigits(fTemp);
}

celiciousInput.addEventListener('input', celiciousToFahrenheitAndKalvin);
fahrenheitInput.addEventListener('input', fahrenheitToceliciousAndKalvin);
kalvinInput.addEventListener('input', kalvinToCeliciousAndFahrenheit);