"use strict";

let result;

let id = document.querySelector('#adviceId');
let dice = 
document.querySelector("#dice");

let adviced = document.querySelector('.advicetex');
console.log(adviced);
id.innerHTML = '';
  adviced.innerHTML = '';

const displayAdvice = () => {
  

  let response = fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      result = data.slip;
      id.innerHTML = `${result.id}`;
      adviced.innerHTML = `"${result.advice}"`;

      console.log(result.advice);
    })
    .catch(error => {
      console.error('Une erreur s\'est produite lors de la récupération du conseil :', error);
    });

};
dice.onclick = displayAdvice
console.log(dice);


