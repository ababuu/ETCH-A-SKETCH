const DEFAULT_GRID=16;
let grids=document.querySelector('.grids');
const container = document.getElementById("container");
const button=document.querySelector('.reset');
button.addEventListener('click', reset);

function makeGrid(num){
    container.style.gridTemplateColumns=`repeat(${num},1fr)`;
    container.style.gridTemplateRows=`repeat(${num},1fr)`;

    for(let i=0; i< num*num; i++){
        let div=document.createElement('div');
        div.addEventListener('mouseover',changeColor);
        
        container.appendChild(div);
    }
}

function changeColor(e){
    let choice=document.getElementsByName('colorChoice');
    
    if(document.getElementById('rain').checked){
    let randR= Math.floor(Math.random() * 256);
    let randG= Math.floor(Math.random() * 256);
    let randB= Math.floor(Math.random() * 256);
    let col = "rgb(" + randR + "," + randG + "," + randB + ")";
    e.target.setAttribute('style', `background-color: ${col}`);
    }

    else if(document.getElementById('solid').checked) {
        
        e.target.style.backgroundColor='black';
    }


}

function reset(){
    container.textContent='';
    let x=prompt("Enter the number of Grids");
    if(x>100){
        x=prompt("Please enter a number less than 100");
    }
    makeGrid(x);
}


function defaultGrid(){
    makeGrid(DEFAULT_GRID);
}

makeGrid(16);




