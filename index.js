'use strict'
//i'm really sorry for this huge amateur code


//creating textarea and keyboard wrapper
const body = document.querySelector('body');
const divInput = document.createElement('div');
const input = document.createElement('textarea');
const divKeyboardWrapper = document.createElement('div');
divKeyboardWrapper.classList.add('wrapper');
divKeyboardWrapper.id = 'wrapper';
divInput.classList.add('textArea')
input.placeholder = 'this virtual keyboard was created on MacOS';
input.setAttribute('autofocus', '')
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
    for (let i = 0; i < FIRST_ROW.length; i++) {
        if (i == FIRST_ROW.indexOf('BACKSPACE')){
            document.getElementById("firstRow").innerHTML += "<div class='keyBackspace'>" + FIRST_ROW[i] + "</div>";
        }
        else {
            document.getElementById("firstRow").innerHTML += "<div class='key'>" + FIRST_ROW[i] + "</div>";
    }
    }
    for (let i = 0; i < SECOND_ROW.length; i++) {
        if (i == SECOND_ROW.indexOf('TAB')){
            document.getElementById("secondRow").innerHTML += "<div class='keyTab'>" + SECOND_ROW[i] + "</div>";
        }
        else{
        document.getElementById("secondRow").innerHTML += "<div class='key'>" + SECOND_ROW[i] + "</div>";
      }
    }
      for (let i = 0; i < THIRD_ROW.length; i++) {
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
    
      for (let i = 0; i < FORTH_ROW.length; i++) {
        if (i == FORTH_ROW.indexOf('SHIFT')){
            document.getElementById("forthRow").innerHTML += "<div class='keyShift'>" + FORTH_ROW[i] + "</div>";
        }
        else if (i == FORTH_ROW.indexOf('SHIFT', [2])){
            document.getElementById("forthRow").innerHTML += "<div class='keyShiftRight'>" + FORTH_ROW[i] + "</div>";
        }
        else{
            document.getElementById("forthRow").innerHTML += "<div class='key'>" + FORTH_ROW[i] + "</div>";
        }
      }
    
      for (let i = 0; i < FIFTH_ROW.length; i++) {
          if(i == FIFTH_ROW.indexOf('CTRL')){
            document.getElementById("fifthRow").innerHTML += "<div class='keyCtrl'>" + FIFTH_ROW[i] + "</div>";
          }
          else if(i == FIFTH_ROW.indexOf('CMD⌘')){
            document.getElementById("fifthRow").innerHTML += "<div id = 'cmdLeft' class='keyCmd'>" + FIFTH_ROW[i] + "</div>";
          }
          else if(i == FIFTH_ROW.indexOf('CMD⌘', [3])){
            document.getElementById("fifthRow").innerHTML += "<div id = 'cmdRight' class='keyCmd'>" + FIFTH_ROW[i] + "</div>";
          }
          else if(i == FIFTH_ROW.indexOf('ALT')){
            document.getElementById("fifthRow").innerHTML += "<div id = 'altLeft' class='keyAlt'>" + FIFTH_ROW[i] + "</div>";
          }
          else if(i == FIFTH_ROW.indexOf('ALT', [3])){
            document.getElementById("fifthRow").innerHTML += "<div id = 'altRight' class='keyAlt'>" + FIFTH_ROW[i] + "</div>";
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
const shiftRight = document.querySelector('.keyShiftRight');
const shiftLeft = document.querySelector('.keyShift');
const altLeft = document.getElementById('altLeft');
const altRight = document.getElementById('altRight');
const cmdRight = document.getElementById('cmdRight');
const cmdLeft = document.getElementById('cmdLeft');
const ctrl = document.querySelector('.keyCtrl');
const space = document.querySelector('.keySpace');
const arrow = document.querySelectorAll('.keyArrow');
const enter = document.querySelector('.keyEnter');
const caps = document.querySelector('.keyCaps');
const tab = document.querySelector('.keyTab');
const backspace = document.querySelector('.keyBackspace');
const arrowUp = document.getElementById('arrowUp');
const arrowDown = document.getElementById('arrowDown');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');




//creating keyboard events

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
    if(event.code == 'Space'){
        space.classList.add('active');
    }
    if(event.code == 'Tab'){
        tab.classList.add('active');
        event.preventDefault();
    }
    if(event.code == 'AltLeft'){
        altLeft.classList.add('active');
    }
    if(event.code == 'AltRight'){
        altRight.classList.add('active');
    }
    if(event.code == 'CapsLock'){
        caps.classList.add('active');
    }
    if(event.code == 'Enter'){
        enter.classList.add('active');
    }
    if(event.code == 'ControlLeft'){
        ctrl.classList.add('active');
    }
    if(event.code == 'Backspace'){
        backspace.classList.add('active');
    }
    if(event.code == 'ShiftRight'){
        shiftRight.classList.add('active');
    }
    if(event.code == 'ShiftLeft'){
        shiftLeft.classList.add('active');
    }
    if(event.code == 'ArrowUp'){
        arrowUp.classList.add('active')
    }
    if(event.code == 'ArrowDown'){
        arrowDown.classList.add('active')
    }
    if(event.code == 'ArrowLeft'){
        arrowLeft.classList.add('active')
    }
    if(event.code == 'ArrowRight'){
        arrowRight.classList.add('active')
    }
    if(event.code == 'MetaLeft'){
        cmdLeft.classList.add('active')
    }
    if(event.code == 'MetaRight'){
        cmdRight.classList.add('active')
    }
});

document.addEventListener('keyup', function(event){
    for(let i = 0; i < keys.length; i++) {
    if(event.key == keys[i].getAttribute('keyname') || event.key == keys[i].getAttribute('lowerCaseName')){
        keys[i].classList.remove('active');
        keys[i].classList.add('remove');
    }
    if(event.code == 'Space'){
        space.classList.remove('active');
        space.classList.add('remove');

    }
    if(event.code == 'Tab'){
        tab.classList.remove('active');
        tab.classList.add('remove');
        event.preventDefault();
    }
    if(event.code == 'AltLeft'){
        altLeft.classList.remove('active');
        altLeft.classList.add('remove');
    }
    if(event.code == 'AltRight'){
        altRight.classList.remove('active');
        altRight.classList.add('remove');

    }
    if(event.code == 'CapsLock'){
        caps.classList.remove('active');
        caps.classList.add('remove');
    }
    if(event.code == 'Enter'){
        enter.classList.remove('active');
        enter.classList.add('remove');
    }
    if(event.code == 'ControlLeft'){
        ctrl.classList.add('remove');
        ctrl.classList.remove('active');
    }
    if(event.code == 'Backspace'){
        backspace.classList.remove('active');
        backspace.classList.add('remove');
    }
    if(event.code == 'ShiftRight'){
        shiftRight.classList.remove('active');
        shiftRight.classList.add('remove');
    }
    if(event.code == 'ShiftLeft'){
        shiftLeft.classList.remove('active');
        shiftLeft.classList.add('remove');

    }
    if(event.code == 'ArrowUp'){
        arrowUp.classList.remove('active');
        arrowUp.classList.add('remove');

    }
    if(event.code == 'ArrowDown'){
        arrowDown.classList.remove('active');
        arrowDown.classList.add('remove')

    }
    if(event.code == 'ArrowLeft'){
        arrowLeft.classList.remove('active');
        arrowLeft.classList.add('remove')

    }
    if(event.code == 'ArrowRight'){
        arrowRight.classList.remove('active');
        arrowRight.classList.add('remove')

    }
    if(event.code == 'MetaLeft'){
        cmdLeft.classList.remove('active');
        cmdLeft.classList.add('remove')

    }
    if(event.code == 'MetaRight'){
        cmdRight.classList.remove('active');
        cmdRight.classList.add('remove');

    }

    setTimeout(()=> {
        keys[i].classList.remove('remove');
        cmdRight.classList.remove('remove');
        cmdLeft.classList.remove('remove');
        arrowRight.classList.remove('remove');
        arrowLeft.classList.remove('remove');
        arrowDown.classList.remove('remove');
        arrowUp.classList.remove('remove');
        shiftLeft.classList.remove('remove');
        shiftRight.classList.remove('remove');
        backspace.classList.remove('remove');
        ctrl.classList.remove('remove');
        enter.classList.remove('remove');
        caps.classList.remove('remove');
        altRight.classList.remove('remove');
        altLeft.classList.remove('remove');
        tab.classList.remove('remove');
        space.classList.remove('remove');
    },2000)
    }
});

//creating mouse events

shiftLeft.addEventListener('click', function(){
    shiftLeft.classList.add('active');
    setTimeout(()=>{
        shiftLeft.classList.remove('active');
    },500)
});
shiftRight.addEventListener('click', function(){
    shiftRight.classList.add('active');
    setTimeout(()=>{
        shiftRight.classList.remove('active');
    },500)
});
altLeft.addEventListener('click', function(){
    altLeft.classList.add('active');
    setTimeout(()=>{
        altLeft.classList.remove('active');
    },500)
});
altRight.addEventListener('click', function(){
    altRight.classList.add('active');
    setTimeout(()=>{
        altRight.classList.remove('active');
    },500)
});
backspace.addEventListener('click', function(){
    let inputString = input.value;
    input.value = inputString.substring(0, inputString.length - 1);
    backspace.classList.add('active');
    setTimeout(()=>{
        backspace.classList.remove('active');
    },500)
});

ctrl.addEventListener('click', function(){
    ctrl.classList.add('active');
    setTimeout(()=>{
        ctrl.classList.remove('active');
    },500)
});
enter.addEventListener('click', function(){
    input.value = input.value + '\r\n';
    enter.classList.add('active');
    setTimeout(()=>{
        enter.classList.remove('active');
    },500)
});
space.addEventListener('click', function(){
    input.value = input.value + ' ';
    space.classList.add('active');
    setTimeout(()=>{
        space.classList.remove('active');
    },500)
});
arrowDown.addEventListener('click', function(){
    let p = '↓';
    input.value = input.value + p;
    arrowDown.classList.add('active');
    setTimeout(()=>{
        arrowDown.classList.remove('active');
    },500)
});
arrowLeft.addEventListener('click', function(){
    let p = '←';
    input.value = input.value + p;
    arrowLeft.classList.add('active');
    setTimeout(()=>{
        arrowLeft.classList.remove('active');
    },500)
});
arrowRight.addEventListener('click', function(){
    let p = '→';
    input.value = input.value + p;
    arrowRight.classList.add('active');
    setTimeout(()=>{
        arrowRight.classList.remove('active');
    },500)
});
arrowUp.addEventListener('click', function(){
    let p = '↑';
    input.value = input.value + p;
    arrowUp.classList.add('active');
    setTimeout(()=>{
        arrowUp.classList.remove('active');
    },500)
});
tab.addEventListener('click', function(){
    input.value = input.value + '   ';
    tab.classList.add('active');
    setTimeout(()=>{
        tab.classList.remove('active');
    },500)
});
caps.addEventListener('click', function(){
    caps.classList.toggle('active');
});
cmdLeft.addEventListener('click', function(){
    cmdLeft.classList.add('active');
    setTimeout(()=>{
        cmdLeft.classList.remove('active');
    },500)
});
cmdRight.addEventListener('click', function(){
    cmdRight.classList.add('active');
    setTimeout(()=>{
        cmdRight.classList.remove('active');
    },500)
});

keys.forEach.call(keys, function(el){
    el.addEventListener('click', function () {
        el.classList.add('active');
        setTimeout(()=>{
            el.classList.remove('active');
        },500)
        })
});
keys.forEach((key) => {
    key.addEventListener('click', write);
    function write() {
        if(caps.classList.contains('active')){
            let p = key.innerHTML.toUpperCase();
            input.value = input.value + p;
        }
        else{
            let p = key.innerHTML.toLowerCase();
            input.value = input.value + p;
        }
    }
})
