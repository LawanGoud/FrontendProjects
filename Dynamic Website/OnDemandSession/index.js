let groceryItems = ['Milk','peanut Butter','Choco Chips','Tomato Sauce','Cup Cakes','Noodles'];

let bgContainerEl = document.createElement('div');
bgContainerEl.classList.add('bg-container');
document.body.appendChild(bgContainerEl);

let headingElement = document.createElement('h1');
headingElement.textContent = 'Grocery List';
headingElement.classList.add('heading');
bgContainerEl.appendChild(headingElement);

let listContainerElement = document.createElement('ul');
listContainerElement.classList.add('list-container');
bgContainerEl.appendChild(listContainerElement);

for (let groceryItem of groceryItems){
    let listItemEl = document.createElement('li');
    listItemEl.textContent = groceryItem;
    listContainerElement.appendChild(listItemEl);
}

let checkboxEl = document.createElement('input');
checkboxEl.type = 'checkbox';
checkboxEl.id = 'deliveryMode';
bgContainerEl.appendChild(checkboxEl);

let labelEl = document.createElement('label');
labelEl.setAttribute("for","deliveryMode");
labelEl.classList.add('delivery-text');
labelEl.textContent = 'Need Home Delivery';
bgContainerEl.appendChild(labelEl);

let breakEl = document.createElement('br');
bgContainerEl.appendChild(breakEl);

let btnEl = document.createElement('button');
btnEl.classList.add('btn','btn-primary');
btnEl.textContent = "Proceed To Pay";
bgContainerEl.appendChild(btnEl);