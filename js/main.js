
const result = document.querySelector(".converter__result")
const temperatureUnit1 = document.querySelector(".temperature_unit1")
const temperatureUnit2 = document.querySelector(".temperature_unit2")
const input = document.querySelector("#converter")
const btnConvert = document.querySelector(".conventer__btn--convert")
const btnSwap = document.querySelector(".conventer__btn--swap")
const btnReset = document.querySelector(".conventer__btn--reset")

let cels 
let fahr 

const swapTemperatureUnit = () => {

    if (temperatureUnit1.textContent === '°C'){
        temperatureUnit1.textContent = '°F'
        temperatureUnit2.textContent = '°C'
    } else {
        temperatureUnit1.textContent = '°C'
        temperatureUnit2.textContent = '°F'
    }
}

const convertCelsToFahr = () => {

    fahr = input.value * 1.8 + 32
    result.textContent = `${input.value}°C is equatl to ${fahr.toFixed(1)}°F`
}

const convertFahrToCels = () => {

    cels = (input.value - 32) / 1.8 
    result.textContent = `${input.value}°F is equal to ${cels.toFixed(1)}°C`
}

//temperatureConversion function checks it user inputted any value and calls other function based on chosen temerature unit

const temperatureConversion = () => {

    if (input.value !== ''){
        // if chosen unit is Celsius, call convertCelsToFahr funtion
        if (temperatureUnit1.textContent === '°C'){
            convertCelsToFahr()
        } else {
        // if chosen unit is Fahrenheit, call convertFahrToCels funtion
            convertFahrToCels()
        }
    } else {
        // if the user has not entered a value, display an error message
        result.textContent = 'Please enter a number'
    }
}

const reset = () => {
    result.textContent = ''
    input.value = ''
}

btnSwap.addEventListener('click', swapTemperatureUnit);
btnConvert.addEventListener('click', temperatureConversion);
btnReset.addEventListener('click', reset)

