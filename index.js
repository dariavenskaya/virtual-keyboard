'use strict'
//i'm really sorry for this long amateur code, this was my first time adding HTML elements via JS
//creating textarea and keyboard wrapper
const body = document.querySelector('body');
const divInput = document.createElement('div');
const input = document.createElement('textarea');
const divKeyboardWrapper = document.createElement('div');
divKeyboardWrapper.classList.add('wrapper');
divKeyboardWrapper.id = 'wrapper';
divInput.classList.add('textArea')
input.placeholder = 'Type here';
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
const FIFTH_ROW = ['CTRL', 'ALT', 'CMD⌘', 'SPACE', 'CMD⌘', 'ALT', 'ᐊ',  'ᐃ', 'ᐁ', 'ᐅ'];



//creating keys from arrays
function getKeys () {
    for (var i = 0; i < FIRST_ROW.length; i++) {
        if (i == FIRST_ROW.indexOf('BACKSPACE')){
            document.getElementById("firstRow").innerHTML += "<div class='keyButtonVisibleBackspace'>" + FIRST_ROW[i] + "</div>";
        }
        else {
            document.getElementById("firstRow").innerHTML += "<div class='keyButtonVisible'>" + FIRST_ROW[i] + "</div>";
    }
    }
    for (var i = 0; i < SECOND_ROW.length; i++) {
        if (i == SECOND_ROW.indexOf('TAB')){
            document.getElementById("secondRow").innerHTML += "<div class='keyButtonVisibleTab'>" + SECOND_ROW[i] + "</div>";
        }
        else{
        document.getElementById("secondRow").innerHTML += "<div class='keyButtonVisible'>" + SECOND_ROW[i] + "</div>";
      }
    }
      for (var i = 0; i < THIRD_ROW.length; i++) {
        if (i == THIRD_ROW.indexOf('ENTER')){
            document.getElementById("thirdRow").innerHTML += "<div class='keyButtonVisibleEnter'>" + THIRD_ROW[i] + "</div>";
        }
        else if (i == THIRD_ROW.indexOf('CAPS LOCK')){
            document.getElementById("thirdRow").innerHTML += "<div class='keyButtonVisibleCaps'>" + THIRD_ROW[i] + "</div>";
        }
        else {
            document.getElementById("thirdRow").innerHTML += "<div class='keyButtonVisible'>" + THIRD_ROW[i] + "</div>";

        }
      }
    
      for (var i = 0; i < FORTH_ROW.length; i++) {
        if (i == FORTH_ROW.indexOf('SHIFT')){
            document.getElementById("forthRow").innerHTML += "<div class='keyButtonVisibleShift'>" + FORTH_ROW[i] + "</div>";
        }
        else{
            document.getElementById("forthRow").innerHTML += "<div class='keyButtonVisible'>" + FORTH_ROW[i] + "</div>";
        }
      }
    
      for (var i = 0; i < FIFTH_ROW.length; i++) {
        document.getElementById("fifthRow").innerHTML += "<div class='keyButtonVisible'>" + FIFTH_ROW[i] + "</div>";
      }
        
  }
  
  getKeys();

//finding special characters in an array
// let backspaceKey = FIRST_ROW.find(item => item == 'BACKSPACE');
// const BACKSPACE_KEY = backspaceKey.classList.add('backspace');





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

