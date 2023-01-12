// Part I

function SayHi(){
    let divContainer = document.getElementById('container');
    divContainer.textContent = "Hi I'm Abel"
}

setTimeout(SayHi, 2000);

// Part II

function SayHiWith(){
    let divContainer = document.getElementById('container');
    divContainer.innerHTML = "<p>Hello World</p>"
}

setTimeout(SayHiWith, 2000);

// Part III
let numberP = 0;
let setP = setInterval(function (){
    let divContainer = document.querySelector('div');
    let newP = document.createElement('p');
    let newTextNode = document.createTextNode('Hello world !');
    newP.appendChild(newTextNode);
    divContainer.appendChild(newP)
    numberP += 1;
    if(numberP == 5){
        clearInterval(setP);
    }
    
}, 2000);


function stop(){
    clearInterval(setP);
}


