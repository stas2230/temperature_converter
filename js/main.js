
const result = document.querySelector(".result")
const termeratureUnit1 = document.querySelector(".termerature_unit1")
const termeratureUnit2 = document.querySelector(".termerature_unit2")
const input = document.querySelector("#converter")
const btnConvert = document.querySelector(".conventer__btn--convert")
const btnSwap = document.querySelector(".conventer__btn--swap")
const btnReset = document.querySelector(".conventer__btn--reset")

const swapTemperatureUnit = () => {

    if (termeratureUnit1.textContent === '°C'){
        termeratureUnit1.textContent = '°F'
        termeratureUnit2.textContent = '°C'
    } else {
        termeratureUnit1.textContent = '°C'
        termeratureUnit2.textContent = '°F'
    }

}

btnSwap.addEventListener('click', swapTemperatureUnit);