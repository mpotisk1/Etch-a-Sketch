function makeGrid(){
    for (i=0; i < 256; i++){
    const container = document.querySelector('.container');
    const box = document.createElement('div');

    box.classList.add('box');
    box.setAttribute('id', i);
    container.appendChild(box);
  

    }
}
function highlight(){
    
}
makeGrid();

box.addEventListener('mouseover', highlight());