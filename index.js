let collectionText = document.getElementsByTagName("textarea")
let collectionHour = document.getElementsByTagName("h5");
let collectionBtn = document.getElementsByTagName("button");
let hour = moment().format("H")

let today = moment();
$("#currentDay").text(today.format("dddd MMMM Do YYYY"));

function setColor(){ 
    for (var element of collectionText) {
      element.classList.add('future');  
    }
    let counter=0;
    for (let i = 8; i < 19; i++) {
      if (hour > i) {
        collectionText[counter].classList.remove('future');
        collectionText[counter].classList.add('past');
      } else if (hour == i ) {
        collectionText[counter].classList.remove('future');
        collectionText[counter].classList.add('present');
      } counter++;
    } 
}

function saveFunction(clicked_value) {
  selector = document.getElementById(`${clicked_value}t`).value;
  localStorage.setItem(`${clicked_value}`, selector);
}

function displayInput() {
  for (let i = 0; i < collectionText.length; i++) {
    var saved = localStorage.getItem(`${i}`);
    collectionText[i].textContent = saved
  }
}

setColor();
displayInput();