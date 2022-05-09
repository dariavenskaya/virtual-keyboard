'use strict'
//i'm really sorry for this huge amateur code, this was my first time adding HTML elements via JS


//creating textarea and keyboard wrapper
const body = document.querySelector('body');
const divInput = document.createElement('div');
const input = document.createElement('textarea');
const divKeyboardWrapper = document.createElement('div');
divKeyboardWrapper.classList.add('wrapper');
divKeyboardWrapper.id = 'wrapper';
divInput.classList.add('textArea')
input.placeholder = 'this virtual keyboard was created on MacOS';
body.appendChild(divInput);
body.appendChild(divKeyboardWrapper);
divInput.appendChild(input);

//creating keyboard rows
const firstRow = document.createElement('div');
    firstRow.classList.add('firstRow');
    firstRow.id = 'firstRow';
    divKeyboardWrapper.appendChild(firstRow);
const secondRow = document.createElement('div');
    secondRow.classList.add('secondRow');
    secondRow.id = 'secondRow';
    divKeyboardWrapper.appendChild(secondRow);
const thirdRow = document.createElement('div');
    thirdRow.classList.add('thirdRow');
    thirdRow.id = 'thirdRow';
    divKeyboardWrapper.appendChild(thirdRow);
const forthRow = document.createElement('div');
    forthRow.classList.add('forthRow');
    forthRow.id = 'forthRow';
    divKeyboardWrapper.appendChild(forthRow);
const fifthRow = document.createElement('div');
    fifthRow.classList.add('fifthRow');
    fifthRow.id = 'fifthRow';
    divKeyboardWrapper.appendChild(fifthRow);


const FIRST_ROW = ['§', '1', '2', '3', '4', '5', '6','7', '8', '9', '0', '-', '=', 'BACKSPACE'];
const SECOND_ROW = ['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'];
const THIRD_ROW = ['CAPS LOCK', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'ENTER'];
const FORTH_ROW = ['SHIFT', '`', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', "/", 'SHIFT'];
const FIFTH_ROW = ['CTRL', 'ALT', 'CMD⌘', ' ', 'CMD⌘', 'ALT', 'ᐊ',  'ᐃ', 'ᐁ', 'ᐅ'];



//creating keys from arrays
function getKeys () {
    for (var i = 0; i < FIRST_ROW.length; i++) {
        if (i == FIRST_ROW.indexOf('BACKSPACE')){
            document.getElementById("firstRow").innerHTML += "<div class='keyBackspace'>" + FIRST_ROW[i] + "</div>";
        }
        else {
            document.getElementById("firstRow").innerHTML += "<div class='key'>" + FIRST_ROW[i] + "</div>";
    }
    }
    for (var i = 0; i < SECOND_ROW.length; i++) {
        if (i == SECOND_ROW.indexOf('TAB')){
            document.getElementById("secondRow").innerHTML += "<div class='keyTab'>" + SECOND_ROW[i] + "</div>";
        }
        else{
        document.getElementById("secondRow").innerHTML += "<div class='key'>" + SECOND_ROW[i] + "</div>";
      }
    }
      for (var i = 0; i < THIRD_ROW.length; i++) {
        if (i == THIRD_ROW.indexOf('ENTER')){
            document.getElementById("thirdRow").innerHTML += "<div class='keyEnter'>" + THIRD_ROW[i] + "</div>";
        }
        else if (i == THIRD_ROW.indexOf('CAPS LOCK')){
            document.getElementById("thirdRow").innerHTML += "<div class='keyCaps'>" + THIRD_ROW[i] + "</div>";
        }
        else {
            document.getElementById("thirdRow").innerHTML += "<div class='key'>" + THIRD_ROW[i] + "</div>";

        }
      }
    
      for (var i = 0; i < FORTH_ROW.length; i++) {
        if (i == FORTH_ROW.indexOf('SHIFT')){
            document.getElementById("forthRow").innerHTML += "<div class='keyShift'>" + FORTH_ROW[i] + "</div>";
        }
        else if (i == FORTH_ROW.indexOf('SHIFT', [2])){
            document.getElementById("forthRow").innerHTML += "<div class='keyShiftLeft'>" + FORTH_ROW[i] + "</div>";
        }
        else{
            document.getElementById("forthRow").innerHTML += "<div class='key'>" + FORTH_ROW[i] + "</div>";
        }
      }
    
      for (var i = 0; i < FIFTH_ROW.length; i++) {
          if(i == FIFTH_ROW.indexOf('CTRL')){
            document.getElementById("fifthRow").innerHTML += "<div class='keyCtrl'>" + FIFTH_ROW[i] + "</div>";
          }
          else if(i == FIFTH_ROW.indexOf('CMD⌘')){
            document.getElementById("fifthRow").innerHTML += "<div class='keyCmd'>" + FIFTH_ROW[i] + "</div>";
          }
          else if(i == FIFTH_ROW.indexOf('CMD⌘', [3])){
            document.getElementById("fifthRow").innerHTML += "<div class='keyCmd'>" + FIFTH_ROW[i] + "</div>";
          }
          else if(i == FIFTH_ROW.indexOf('ALT')){
            document.getElementById("fifthRow").innerHTML += "<div class='keyAlt'>" + FIFTH_ROW[i] + "</div>";
          }
          else if(i == FIFTH_ROW.indexOf('ALT', [3])){
            document.getElementById("fifthRow").innerHTML += "<div class='keyAlt'>" + FIFTH_ROW[i] + "</div>";
          }
          else if(i == FIFTH_ROW.indexOf(' ')){
            document.getElementById("fifthRow").innerHTML += "<div class='keySpace'>" + FIFTH_ROW[i] + "</div>";
          }
          else if(i == FIFTH_ROW.indexOf('ᐃ')){
            document.getElementById("fifthRow").innerHTML += "<div id='arrowUp' class='keyArrow'>" + FIFTH_ROW[i] + "</div>";
          }
          else if(i == FIFTH_ROW.indexOf('ᐁ')){
            document.getElementById("fifthRow").innerHTML += "<div id='arrowDown' class='keyArrow'>" + FIFTH_ROW[i] + "</div>";
          }
          else if(i == FIFTH_ROW.indexOf('ᐊ')){
            document.getElementById("fifthRow").innerHTML += "<div id='arrowLeft' class='keyArrow'>" + FIFTH_ROW[i] + "</div>";
          }
          else{
            document.getElementById("fifthRow").innerHTML += "<div id='arrowRight' class='keyArrow'>" + FIFTH_ROW[i] + "</div>";

          }
      }
        
  }
  
  getKeys();

  function wrapArrows() {
    let arrDiv = document.createElement('div');
    let arrowR = document.getElementById('arrowRight');
    let arrowL= document.getElementById('arrowLeft');
    let arrowU= document.getElementById('arrowUp');
    let arrowD= document.getElementById('arrowDown');
    arrDiv.classList.add("arrowsWrapper");
    fifthRow.appendChild(arrDiv);
    arrDiv.appendChild(arrowR);
    arrDiv.appendChild(arrowL);
    arrDiv.appendChild(arrowU);
    arrDiv.appendChild(arrowD);
}
wrapArrows();


//creating keys variables

const keys = document.querySelectorAll('.key');
const shift = document.querySelectorAll('.keyShift');
const alt = document.querySelectorAll('.keyAlt');
const cmd = document.querySelectorAll('.keyCmd');
const ctrl = document.querySelectorAll('.keyCtrl');
const space = document.querySelectorAll('.keySpace');
const arrow = document.querySelectorAll('.keyArrow');
const enter = document.querySelectorAll('.keyEnter');
const caps = document.querySelectorAll('.keyCaps');
const tab = document.querySelectorAll('.keyTab');
const bakspace = document.querySelectorAll('.keyBackspace');


//creating keys events

for(let i = 0; i<keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
};
document.addEventListener('keydown', function(event){
    for(let i = 0; i < keys.length; i++) {
    if(event.key == keys[i].getAttribute('keyname') || event.key == keys[i].getAttribute('lowerCaseName')){
        keys[i].classList.add('active');
    }
    }
    if(event.code === 'Space'){
        space.classList.toggle('active');
    }

});
document.addEventListener('keyup', function(event){
    for(let i = 0; i < keys.length; i++) {
    if(event.key == keys[i].getAttribute('keyname') || event.key == keys[i].getAttribute('lowerCaseName')){
        keys[i].classList.remove('active');
        keys[i].classList.add('remove');
    }
    setTimeout(()=> {
        keys[i].classList.remove('remove')
    },1000)
    }
});


// keys.onclick = function(){
//     keys.forEach(x => x.classList.toggle('active'));
// }
// window.addEventListener('keydown', function(){
//     // for(let i = 0; i<keys.length; i++) {
//         keys.classList.toggle('.active');
//     }
// // }
// )










//   const ENG_LOWERCASE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 
// 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const ENG_UPPERCASE =  ENG_LOWERCASE.map(element => {
// return element.toUpperCase();
// });     

// const CYRILLIC_LOWERCASE = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о',
//                     'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
// const CYRILLIC_UPPERCASE = CYRILLIC_LOWERCASE.map(element => {
//     return element.toUpperCase();
//   });     
// const NUMBERS = ['1', '2', '3', '4', '5', '6','7', '8', '9', '0'];
// const SYMBOLS = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', 
//                 '_', '-', '=', '+', ',', '.', '/', '<', '>', '`', '~', "'", '"', ';', ':', '|', '[', ']', '{', '}', '§', '±'];
// const SPECIAL_KEYS = ['tab', 'backspace', 'enter', 'shift', 'caps lock', 'del', 'ctrl', 'alt', 'cmd ⌘', 'ᐊ', 'ᐅ', 'ᐃ', 'ᐁ'];
// console.log(SPECIAL_KEYS);


// function getSpecialKeys () {
//     for (var i = 0; i < SPECIAL_KEYS.length; i++) {
//       document.getElementById("wrapper").innerHTML += "<div class='keyButton'>" + SPECIAL_KEYS[i] + "</div>";
//     }
//   }
  
//   getSpecialKeys();



//   //eng Upper case
//   function engUpKeys () {
//     for (var i = 0; i < ENG_UPPERCASE.length; i++) {
//       document.getElementById("wrapper").innerHTML += "<div class='keyButton'>" + ENG_UPPERCASE[i] + "</div>";
//     }
//   }
//   engUpKeys();

//  //cyrillic Upper Case 
//   function cyrillicUpKeys () {
//     for (var i = 0; i < CYRILLIC_UPPERCASE.length; i++) {
//       document.getElementById("wrapper").innerHTML += "<div class='keyButtonCyrillic'>" + CYRILLIC_UPPERCASE[i] + "</div>";
//     }
//   }
  
//   cyrillicUpKeys();

