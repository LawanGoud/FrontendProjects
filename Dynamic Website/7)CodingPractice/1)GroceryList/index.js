let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];


let groceryListContainer = document.getElementById('groceryListContainer');
groceryListContainer.classList.add('grocery-list-container');

let headingEl = document.createElement('h1');
headingEl.classList.add('grocery-list-heading')
headingEl.textContent = 'Grocery List';
groceryListContainer.appendChild(headingEl)

let listItemContainerEl = document.createElement('ul');
listItemContainerEl.classList.add('list-items-container');
groceryListContainer.appendChild(listItemContainerEl);

for (let groceryItem of groceryList){
    let listItemEl = document.createElement('li');
    listItemEl.textContent = groceryItem;
    listItemContainerEl.appendChild(listItemEl);
}