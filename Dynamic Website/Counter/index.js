let counterElement = document.getElementById("counterValue")

function onIncrement(){
  let PreviousCounterValue = counterElement.textContent;
  let updateCounterValue = parseInt(PreviousCounterValue) + 1;
  counterElement.textContent = updateCounterValue;
  if (updateCounterValue > 0){
    counterElement.style.color = "Green";
  }
  else if (updateCounterValue < 0){
    counterElement.style.color = "Red";
  }else{
    counterElement.style.color = "Black";
  }
}

function onDecrement(){
  let PreviousCounterValue = counterElement.textContent;
  let updateCounterValue = parseInt(PreviousCounterValue) - 1;
  counterElement.textContent = updateCounterValue;
  if (updateCounterValue > 0){
    counterElement.style.color = "Green";
  }
  else if (updateCounterValue < 0){
    counterElement.style.color = "Red";
  }else{
    counterElement.style.color = "Black";
  }
}

function onReset(){
  let counterValue = 0;
  counterElement.textContent= counterValue;
  counterElement.style.color = "Black";
}