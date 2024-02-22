'use strict'
//elementos que necesito del html
const inputNumber = document.querySelector('.js-number');
const button = document.querySelector('.js-button');
const pista = document.querySelector('js-p');
const numeroIntentos = document.querySelector('.js-p2');

//
let acumulattor = 0;
function numberTry (){
    pista.innerHTML = acumulattor;
}
function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log('numero aleatorio', randomNumber);
function guessNumber() {
    debugger;
    const numberEntered = parseInt(inputNumber.value);
    if(numberEntered > getRandomNumber){
        pista.innerHTML = 'Demasiado alto';
    }else if(numberEntered < getRandomNumber){
       pista.innerHTML = 'Demasiado bajo';
    }else if(numberEntered === getRandomNumber){
        pista.innerHTML = '¡Has ganado campeona!';
    }else(numberEntered > getRandomNumber)
        pista.innerHTML = 'El número debe estar entre 1 y 100';
    }

//1
function handleClick(ev) {
    ev.preventDefault();
    guessNumber()
    
}




button.addEventListener('click', handleClick);