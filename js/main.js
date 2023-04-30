
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
    input.value = ''
}

const convertFahrToCels = () => {

    cels = (input.value - 32) / 1.8 
    result.textContent = `${input.value}°F is equal to ${cels.toFixed(1)}°C`
    input.value = ''
}

const temperatureConversion = () => {

    if (input.value !== ''){
        if (temperatureUnit1.textContent === '°C'){
            convertCelsToFahr()
        } else {
            convertFahrToCels()
        }
    } else {
        result.textContent = 'Please enter a number'
    }
}



btnSwap.addEventListener('click', swapTemperatureUnit);
btnConvert.addEventListener('click', temperatureConversation)


// notes:

// convertCelcToFahr function:
// Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32.
// adding relevant text to element with .converter__result 
// clean input value after conversion

// convertFahrToCels function:
// Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) / 1.8.
// adding relevant text to element with .converter__result
// clean input value after conversion

// give the result rounded to one decimal place 

//temperatureConversion function:
// checks if temperatureUnit1 textContent is equal to "C" and then calls convertCelsToFahr function 
// if temperatureUnit1 textContent is equal to "F" then it calls convertFahrToCels function 
// else result asks fot entering a number
