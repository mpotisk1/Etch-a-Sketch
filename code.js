const container = document.querySelector('.container');
const box = document.createElement('div');
const clearButton = document.getElementById('clear');
const sixteen = document.getElementById('sixteen');
const thirtyTwo = document.getElementById('thirtyTwo');
const sixtyFour = document.getElementById('sixtyFour');
const oneHundo = document.getElementById('oneHundo');

const sizeButton = document.getElementById('size');
sizeButton.addEventListener('click', makeGrid);

clearButton.addEventListener('click', clear);

let r = 1;
let g = 1;
let b = 1;


function makeGrid(){
    const container = document.querySelector('.container');
    let gridSize = document.getElementById('size').value;
    const boxSize = Math.floor(800 / gridSize);
  
    container.innerHTML = "";
    for (i=0; i<gridSize * gridSize; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('id', i);
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    box.addEventListener('mouseover', highlight);
    
    container.appendChild(box);
   
    }
}

function highlight(){
    pickColor();
    this.style.backgroundColor = pickColor();
}

function clear(){
    makeGrid();
    console.log('cleared');
    console.log(randomNum());
    console.log(pickColor());
}

function randomNum(){
    min = Math.ceil(1);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max-min +1)) + min;
}

function pickColor(){
     r = randomNum();
     g = randomNum();
     b = randomNum();

    return 'rgb('+r+','+g+','+b+')';
    
}






makeGrid();

