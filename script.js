
let zoom = false;
let currentColor = null;
let displayText = ''

const root = document.querySelector('.root');
const colorPicker = document.querySelector('#colorPicker');
const changeBackgroundButton = document.querySelector('#change-background');
const calculator = document.querySelector('.calculator');
const changeCalcColorButton = document.querySelector('#change-calc-color');
const calcButtons = document.querySelectorAll('.column button');
const changeButtonColorButton = document.querySelector('#change-button-color');
const zoomButton = document.querySelector('#zoom');
const clearButton = document.querySelector('.clear')
const display = document.querySelector('#display')

const setColor = () => {
    currentColor = colorPicker.value;
};

const changeBackground = () => {
    root.style.backgroundColor = currentColor;
    // avoid ugly color picker square
    colorPicker.style.backgroundColor = currentColor;
};

const changeCalcColor = () => {
    calculator.style.backgroundColor = currentColor;
};

const changeCalcButtons = () => {
    calcButtons.forEach(button => button.style.backgroundColor = currentColor);
};

const zoomCalc = () => {
        calculator.classList.toggle('zoomed');
};

const clearDisplay = () => {
    displayText = ''
    display.textContent = ''
}

changeBackgroundButton.addEventListener('click', setColor);
changeBackgroundButton.addEventListener('click', changeBackground);

changeCalcColorButton.addEventListener('click', setColor);
changeCalcColorButton.addEventListener('click', changeCalcColor)

changeButtonColorButton.addEventListener('click', setColor)
changeButtonColorButton.addEventListener('click', changeCalcButtons)

zoomButton.addEventListener('click', zoomCalc)

clearButton.addEventListener('click', clearDisplay)
