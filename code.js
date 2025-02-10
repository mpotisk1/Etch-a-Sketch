const container = document.querySelector('.container');
const box = document.createElement('div');
const clearButton = document.getElementById('clear');



function makeGrid(){
    for (i=0; i<256; i++){
    const container = document.querySelector('.container');
    const box = document.createElement('div');

    box.classList.add('box');
    box.setAttribute('id', i);
    box.addEventListener('mouseover', highlight);
    
    container.appendChild(box);
   
    }
}
function highlight(){
   this.style.cssText = "background-color: black;";
}

function clear(){
    const boxes = document.querySelectorAll('.box');
    for (i=0; i < boxes.length; i++){
        boxes[i].style.cssText = 'background-color: transparent';
    }
    console.log('cleared')
}


clearButton.addEventListener('click', clear);


makeGrid();

