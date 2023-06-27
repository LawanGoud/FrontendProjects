let stopLightElement = document.getElementById('stopLight');
let readyLightElement = document.getElementById('readyLight');
let goLightElement = document.getElementById('goLight');
let stopButtonElement = document.getElementById('stopButton');
let readyButtonElement = document.getElementById('readyButton');
let goButtonElement = document.getElementById('goButton');

function turnOnRed(){
    let stopLight = stopLightElement.style.backgroundColor = "#cf1124";
    let stopButton = stopButtonElement.style.backgroundColor = '#cf1124';

    let readyLight = readyLightElement.style.backgroundColor = '#4b5069';
    let readyButton = readyButtonElement.style.backgroundColor = '#4b5069';

    let goLight = goLightElement.style.backgroundColor = '#4b5069';
    let goButton = goButtonElement.style.backgroundColor = '#4b5069'; 
}

function turnOnYellow(){
    let stopLight = stopLightElement.style.backgroundColor = '#4b5069';
    let stopButton = stopButtonElement.style.backgroundColor = '#4b5069';

    let readyLight = readyLightElement.style.backgroundColor = '#f7c948';
    let readyButton = readyButtonElement.style.backgroundColor = '#f7c948';

    let goLight = goLightElement.style.backgroundColor = '#4b5069';
    let goButton = goButtonElement.style.backgroundColor = '#4b5069';
}

function turnOnGreen(){
    let stopLight = stopButtonElement.style.backgroundColor = '#4b5069';
    let stopButton = stopButtonElement.style.backgroundColor = '#4b5069';

    let readyLight = readyLightElement.style.backgroundColor = '#4b5069';
    let readyButton = readyButtonElement.style.backgroundColor = '#4b5069';

    let goLight = goLightElement.style.backgroundColor = '#199473';
    let goButton = goButtonElement.style.backgroundColor = '#199473';
}