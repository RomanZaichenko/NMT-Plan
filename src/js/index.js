"use strict"



document.addEventListener('DOMContentLoaded', () => {


  //Getting elements

  let button = document.querySelector('#submitButton');
  let language = document.querySelector('#language');
  let maths = document.querySelector('#maths');
  let history = document.querySelector('#history');
  let spoiler = document.querySelector('#spoiler');


  // Disable elements

  language.addEventListener("click", () => {
    disableInput('language');
  });

  maths.addEventListener("click", () => {
    disableInput('maths');

  });

  history.addEventListener("click", () => {
    disableInput('history');
  });

  document.querySelector('#language-link').addEventListener("click", () => {
    abortLink("language", event);
  })

  document.querySelector('#maths-link').addEventListener("click", () => {
    abortLink("maths", event);
  })

  document.querySelector('#history-link').addEventListener("click", () => {
    abortLink("history", event);
  })



  // Input checking
  button.addEventListener("click", () => {
    let time = document.querySelector('input[name="time"]');
    if (+time.value > 24 || +time.value < 1) {
      time.value = "";
      time.placeholder = "*Введіть значення від 1 до 24";
    }
    else if(Number.isNaN(+time.value))
    {
      time.value = "";
      time.placeholder = "*Введіть число";
    }


    let languageScore = document.querySelector('input[name="language-score');
    let mathsScore = document.querySelector('input[name="maths-score');
    let historyScore = document.querySelector('input[name="history-score');
    let error = false;
    

    if (languageScore.disabled && mathsScore.disabled && historyScore.disabled){
      alert("Оберіть хоча б один предмет");
      error = true;
    }

    if (languageScore.disabled){
    }
    else if (+languageScore.value > 200 || +languageScore.value < 100) {
      languageScore.value = "";
      languageScore.placeholder = "*Введіть значення від 100 до 200";
      error = true;
    }
    else if(Number.isNaN(+languageScore.value))
    {
      languageScore.value = "";
      languageScore.placeholder = "*Введіть число";
      error = true;
    }
    else if(languageScore.value.includes(".")) {
      languageScore.value = "";
      languageScore.placeholder = "*Введіть ціле число";
      error = true;
    }


    if (mathsScore.disabled){
    }
    else if (+mathsScore.value > 200 || +mathsScore.value < 100) {
      mathsScore.value = "";
      mathsScore.placeholder = "*Введіть значення від 100 до 200";
      error = true;
    }
    else if(Number.isNaN(+mathsScore.value))
    {
      mathsScore.value = "";
      mathsScore.placeholder = "*Введіть число";
      error = true;
    }
    else if(mathsScore.value.includes(".")) {
      mathsScore.value = "";
      mathsScore.placeholder = "*Введіть ціле число";
      error = true;
    }


    if (historyScore.disabled){
    }
    else if (+historyScore.value > 200 || +languageScore.value < 100) {
      historyScore.value = "";
      historyScore.placeholder = "*Введіть значення від 100 до 200";
    }
    else if(Number.isNaN(+languageScore.value))
    {
      historyScore.value = "";
      historyScore.placeholder = "*Введіть число";
    }
    else if(historyScore.value.includes(".")) {
      historyScore.value = "";
      historyScore.placeholder = "*Введіть ціле число";
    }
  });


  // Animation
  let summary = document.querySelector('summary')
  let details = document.querySelector('details')
});





// Functions
const disableInput = (name) => {

  let usingElement = document.querySelector(`#${name}`);
  let scoreArea = document.querySelector(`input[name="${name}-score"]`);

  console.log(name)
  if (!usingElement.checked) {
    scoreArea.setAttribute('disabled',true);
    scoreArea.placeholder = "";
  }
  else {
    scoreArea.removeAttribute('disabled');
  }
}

const abortLink = (name, event) => {
  let element = document.querySelector(`input[name="${name}-score"]`);
  if (element.disabled)
  {
    event.preventDefault();
  }
}
