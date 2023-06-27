let myContainer = document.getElementById('myContainer');
myContainer.style.textAlign = 'center';

//Creating an HTML Element
let h1Element = document.createElement('h1');
h1Element.textContent = 'Web Technologies';
//Appending to an HTML Element appendChild()
myContainer.appendChild(h1Element);

//Creating an HTML Element
let btnElement = document.createElement('button');
btnElement.textContent = 'Change Heading';
//Appending to an HTML Element appendChild()
myContainer.appendChild(btnElement);

//Adding Event Listners Dynamically
btnElement.onclick = function(){
    h1Element.textContent = "4.0 Technologies";
    h1Element.classList.add("heading"); //providing class names dynamically classList.add()
}

//removing Class names dynamically classList.remove()

//creating an HTML Element
let removeStylesBtnElement = document.createElement('button');
removeStylesBtnElement.textContent = 'Remove Styles';
myContainer.appendChild(removeStylesBtnElement);

removeStylesBtnElement.onclick = function(){
    h1Element.classList.remove('heading');
}