'use strict'
//elementos que necesito del html
const inputNumber = document.querySelector('.js-number');
const button = document.querySelector('.js-button');
const message = document.querySelector('js-message');
const counter = document.querySelector('.js-p2');

//código Ana

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max);
   }
 

   const randomNumber = getRandomNumber(100);
   console.log('numero aleatorio', randomNumber);


   let attemps = 0;
   const upDateCounter = () => {
    attemps += 1;
    counter.innerHTML = `Número de intentos ${attemps}`;
   }


   const handleClick = () => {
    console.log('click');
    const userNumber = parseInt(inputNumber.value);
    if(userNumber < 1 || userNumber > 100){
        message.innerHTML = 'Pista: El número debe estar entre 1 y 100';
    }else if(userNumber === randomNumber){
        message.innerHTML = 'Pista: ¡Has ganado campeona!';
    }else if(userNumber < randomNumber){
        message.innerHTML = 'Pista: Demasiado bajo';
    } else{
        message.innerHTML = 'Pista: Demasiado alto';
    }
    upDateCounter();

    
   }



   button.addEventListener('click', handleClick);















// // código mío
// let acumulattor = 0;
// function numberTry (){
//     pista.innerHTML = acumulattor;
// }
// function getRandomNumber(max) { 
//     return Math.ceil(Math.random() * max);
// }

// const randomNumber = getRandomNumber(100);
// console.log('numero aleatorio', randomNumber);
// function guessNumber() {
//     debugger;
//     const numberEntered = parseInt(inputNumber.value);
//     if(numberEntered > getRandomNumber){
//         pista.innerHTML = 'Demasiado alto';
//     }else if(numberEntered < getRandomNumber){
//        pista.innerHTML = 'Demasiado bajo';
//     }else if(numberEntered === getRandomNumber){
//         pista.innerHTML = '¡Has ganado campeona!';
//     }else(numberEntered > getRandomNumber)
//         pista.innerHTML = 'El número debe estar entre 1 y 100';
//     }

// //1
// function handleClick(ev) {
//     ev.preventDefault();
//     guessNumber()
    
// }


// button.addEventListener('click', handleClick);